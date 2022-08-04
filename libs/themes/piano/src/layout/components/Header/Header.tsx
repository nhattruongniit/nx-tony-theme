import { Box, Toolbar, IconButton } from '@mui/material';

// mui icons
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// config
import { THEMES } from '@tony-theme/configs';

// hooks
import { useResponsive } from '@tony-theme/hooks';

// components
import {
  ThemeMode,
  SearchBar,
  ISearchBarProps,
  IThemeModeProps,
} from '@tony-theme/components';

// styles
import { RootStyle } from './style';
import React from 'react';

export type IHeaderProps = ISearchBarProps &
  IThemeModeProps & {
    onOpenSidebar: VoidFunction;
    isCollapse?: boolean;
    AccountPopover?: React.ReactNode | undefined;
  };

export function Header({
  // state
  themeMode = THEMES.LIGHT,
  isCollapse = false,
  // action
  onOpenSidebar,
  onToggleMode,
  onSearchBar,
  // components
  AccountPopover,
}: IHeaderProps) {
  const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle isCollapse={isCollapse}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
        }}
      >
        {!isDesktop && (
          <IconButton
            sx={{ color: 'text.secondary' }}
            aria-label="avatar"
            component="span"
            onClick={onOpenSidebar}
          >
            <MenuOpenIcon />
          </IconButton>
        )}

        {onSearchBar && (
          <SearchBar onSearchBar={(value) => onSearchBar(value)} />
        )}

        <Box sx={{ flexGrow: 1 }} />

        {/* theme mode */}
        {onToggleMode && (
          <ThemeMode themeMode={themeMode} onToggleMode={onToggleMode} />
        )}

        {AccountPopover}
      </Toolbar>
    </RootStyle>
  );
}
