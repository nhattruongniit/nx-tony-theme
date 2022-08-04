import React from 'react';
import { Box, styled } from '@mui/material';

// hooks
import { useResponsive } from '@tony-theme/hooks';

// sections
import { SideBar as DefaultSider } from './components/SideBar';
import { Header as DefaultHeader } from './components/Header';

// config
import { HEADER, NAVBAR } from '@tony-theme/core/configs';

// components
import {
  AccountPopover,
  ISearchBarProps,
  IAccountPopoverProps,
  IThemeModeProps,
} from '@tony-theme/core/components';

import { NavListProps } from './components/SideBar/type';

type MainStyleProps = {
  collapseClick: boolean;
};

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})<MainStyleProps>(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  paddingLeft: 16,
  paddingRight: 16,
  [theme.breakpoints.up('lg')]: {
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
    transition: theme.transitions.create('margin-left', {
      duration: theme.transitions.duration.shorter,
    }),
    ...(collapseClick && {
      marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
    }),
  },
}));

type IProps = ISearchBarProps &
  IAccountPopoverProps &
  IThemeModeProps & {
    children: React.ReactNode;
    CustomAccountPopover?: React.FC;
    menuItems?: NavListProps[];
  };

export const PianoLayout: React.FC<IProps> = ({
  // state
  themeMode,
  menuAccountPopover,
  menuItems,
  // actions
  onToggleMode,
  onSearchBar,
  onLogout,
  // components
  CustomAccountPopover,
  children,
}) => {
  const [open, setOpen] = React.useState(false);
  const [collapse, setCollapse] = React.useState({
    click: false,
    hover: false,
  });
  const isDesktop = useResponsive('up', 'lg');

  const isCollapse = collapse.click && !collapse.hover;

  const onToggleCollapse = () => {
    setCollapse({ ...collapse, click: !collapse.click });
  };

  const onHoverEnter = () => {
    if (collapse.click) {
      setCollapse({ ...collapse, hover: true });
    }
  };

  const onHoverLeave = () => {
    setCollapse({ ...collapse, hover: false });
  };

  React.useEffect(() => {
    if (!isDesktop) {
      setCollapse({
        click: false,
        hover: false,
      });
    }
  }, [isDesktop]);

  return (
    <Box
      sx={{
        display: { lg: 'flex' },
        minHeight: { lg: 1 },
      }}
    >
      <DefaultHeader
        isCollapse={isCollapse}
        themeMode={themeMode}
        onOpenSidebar={() => setOpen(true)}
        onToggleMode={onToggleMode}
        onSearchBar={onSearchBar}
        AccountPopover={
          CustomAccountPopover ? (
            <CustomAccountPopover />
          ) : (
            <AccountPopover
              menuAccountPopover={menuAccountPopover}
              onLogout={onLogout}
            />
          )
        }
      />

      <DefaultSider
        isCollapse={isCollapse}
        isOpenSidebar={open}
        onToggleCollapse={onToggleCollapse}
        menuItems={menuItems}
        collapseClick={collapse.click}
        collapseHover={collapse.hover}
        onCloseSidebar={() => setOpen(false)}
        onHoverEnter={onHoverEnter}
        onHoverLeave={onHoverLeave}
      />

      <MainStyle collapseClick={collapse.click}>{children}</MainStyle>
    </Box>
  );
};
