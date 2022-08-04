import { IconButton } from '@mui/material';

// mui icons
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';

// configs
import { THEMES } from '../configs';
import React from 'react';

export interface IThemeModeProps {
  onToggleMode?: VoidFunction;
  themeMode?: string;
}

export const ThemeMode: React.FC<IThemeModeProps> = ({
  onToggleMode,
  themeMode,
}) => {
  return (
    <IconButton
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
      title="Change Theme"
      onClick={onToggleMode}
      sx={{ color: 'text.secondary' }}
    >
      {themeMode === THEMES.LIGHT ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};
