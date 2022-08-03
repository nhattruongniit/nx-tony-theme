import { styled, Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';

// mui icons
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';

// config
import { HEADER, NAVBAR, THEMES } from '../../../configs';

// utils
import { cssStyles } from '../../../helpers';

// hooks
import { useResponsive } from '@nx-tony-theme/hooks';

// sections
import AccountPopover from './components/AccountPopover';
import SearchBar from './components/SearchBar';

type RootStyleProps = {
  isCollapse: boolean;
};

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse',
})<RootStyleProps>(({ isCollapse, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
  },
}));

interface IHeaderProps {
  onOpenSidebar: VoidFunction;
  onToggleMode?: VoidFunction;
  themeMode?: string;
  isCollapse?: boolean;
}

export function Header({
  onOpenSidebar,
  onToggleMode,
  themeMode = THEMES.LIGHT,
  isCollapse = false,
}: IHeaderProps) {
  const isDesktop = useResponsive('up', 'lg');

  console.log('onToggleMode: ', onToggleMode);
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
        <SearchBar />
        <Box sx={{ flexGrow: 1 }} />
        {/* theme mode */}
        {onToggleMode && (
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
        )}
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <AccountPopover />
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
