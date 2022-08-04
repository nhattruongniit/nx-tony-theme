/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  styled,
  useTheme,
  Stack,
  Drawer,
  IconButton,
  Box,
  Avatar,
  List,
} from '@mui/material';

// hooks
import { useResponsive } from '@tony-theme/hooks';

// cssStyles
import { cssStyles } from '@tony-theme/core/components';

// config
import { NAVBAR } from '@tony-theme/core/configs';

// sections
import NavList from './components/NavBar/NavList';

// components
import { Scrollbar } from './components/Scrollbar';

// types
import { NavListProps } from './type';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    flexShrink: 0,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

export interface ISideBarProps {
  isOpenSidebar: boolean;
  isCollapse: boolean;
  collapseClick: boolean;
  collapseHover: boolean;
  menuItems?: NavListProps[];
  logo?: any | React.ReactNode;
  onCloseSidebar: () => void;
  onToggleCollapse: () => void;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
}

export function SideBar({
  // state
  isOpenSidebar,
  isCollapse,
  collapseClick,
  collapseHover,
  menuItems,
  logo,
  // actions
  onToggleCollapse,
  onCloseSidebar,
  onHoverEnter,
  onHoverLeave,
}: ISideBarProps) {
  const theme = useTheme();
  const { pathname } = useLocation();
  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          pt: 3,
          pb: 2,
          px: 2.5,
          flexShrink: 0,
          ...(isCollapse && { alignItems: 'center' }),
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          {logo ? (
            <img src={logo} alt="Amanotes" width={32} />
          ) : (
            <Avatar variant="square">M</Avatar>
          )}

          {isDesktop && !isCollapse && (
            <IconButton
              color="primary"
              aria-label="collapse"
              component="span"
              onClick={onToggleCollapse}
            >
              <Box
                sx={{
                  lineHeight: 0,
                  transition: (theme) =>
                    theme.transitions.create('transform', {
                      duration: theme.transitions.duration.shorter,
                    }),
                  ...(collapseClick && {
                    transform: 'rotate(180deg)',
                  }),
                }}
              >
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fillRule="evenodd">
                    <path d="M0 0h24v24H0z" />
                    <g fill="currentColor" fillRule="nonzero">
                      <path
                        fill="#637381"
                        d="M14.3283 11.4343 18.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"
                        opacity=".48"
                      />
                      <path
                        fill="#637381"
                        d="M8.3283 11.4343 12.5126 7.25c.4142-.4142.4142-1.0858 0-1.5-.4142-.4142-1.0858-.4142-1.5 0l-5.543 5.5429c-.3904.3905-.3904 1.0237 0 1.4142l5.543 5.5429c.4142.4142 1.0858.4142 1.5 0 .4142-.4142.4142-1.0858 0-1.5l-4.1843-4.1843a.8.8 0 0 1 0-1.1314Z"
                      />
                    </g>
                  </g>
                </svg>
              </Box>
            </IconButton>
          )}
        </Stack>
      </Stack>

      <Box>
        {menuItems && (
          <>
            {menuItems.map((list: any, groupIndex: number) => (
              <List key={groupIndex} sx={{ px: 2, pb: 0, pt: 0 }}>
                <NavList
                  data={list}
                  depth={1}
                  hasChildren={list.children.length > 0}
                  isCollapse={isCollapse}
                />
              </List>
            ))}
          </>
        )}
      </Box>
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: isCollapse
            ? NAVBAR.DASHBOARD_COLLAPSE_WIDTH
            : NAVBAR.DASHBOARD_WIDTH,
        },
        ...(collapseClick && {
          position: 'absolute',
        }),
      }}
    >
      {!isDesktop && (
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{ sx: { width: NAVBAR.DASHBOARD_WIDTH } }}
        >
          {renderContent}
        </Drawer>
      )}

      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          onMouseEnter={onHoverEnter}
          onMouseLeave={onHoverLeave}
          PaperProps={{
            sx: {
              width: NAVBAR.DASHBOARD_WIDTH,
              borderRightStyle: 'dashed',
              bgcolor: 'background.default',
              transition: (theme) =>
                theme.transitions.create('width', {
                  duration: theme.transitions.duration.standard,
                }),
              ...(isCollapse && {
                width: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
              }),
              ...(collapseHover && {
                ...cssStyles(theme).bgBlur(),
                // boxShadow: (theme) => theme.customShadows.z24,
              }),
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}
