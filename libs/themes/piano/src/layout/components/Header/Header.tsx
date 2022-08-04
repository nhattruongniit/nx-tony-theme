import { Box, Toolbar, IconButton } from '@mui/material';

// mui icons
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

// hooks
import { useResponsive } from '@tony-theme/hooks';

// styles
import { RootStyle } from './style';
import React from 'react';

export type IHeaderProps = {
  isCollapse?: boolean;
  onOpenSidebar: VoidFunction;
  AccountPopover?: React.ReactNode | undefined;
  ThemeMode?: React.ReactNode | undefined;
  SearchBar?: React.ReactNode;
};

export function Header({
  // state
  isCollapse = false,
  // action
  onOpenSidebar,
  // components
  AccountPopover,
  ThemeMode,
  SearchBar,
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
        <>
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

          {SearchBar}

          <Box sx={{ flexGrow: 1 }} />

          {ThemeMode}

          {AccountPopover}
        </>
      </Toolbar>
    </RootStyle>
  );
}
