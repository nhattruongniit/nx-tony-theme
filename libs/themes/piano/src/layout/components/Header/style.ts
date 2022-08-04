import { styled, AppBar } from '@mui/material';

// css styles
import { cssStyles } from '@tony-theme/cores/components';

// config
import {
  HEADER,
  NAVBAR,
  APPBAR_MOBILE,
  APPBAR_DESKTOP,
} from '@tony-theme/cores/configs';

type RootStyleProps = {
  isCollapse: boolean;
};

export const RootStyle = styled(AppBar, {
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

export const SearchbarStyle = styled('div')(({ theme }) => ({
  ...cssStyles(theme).bgBlur(),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: '0 8px 16px 0 rgb(145 158 171 / 16%)',
  [theme.breakpoints.up('md')]: {
    height: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH - 5}px)`,
  },
}));
