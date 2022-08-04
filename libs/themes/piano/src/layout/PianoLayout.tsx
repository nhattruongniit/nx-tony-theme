import React from 'react';
import { Box, styled } from '@mui/material';

// hooks
import { useResponsive } from '@tony-theme/hooks';

// sections
import { SideBar as DefaultSider } from './components/SideBar';
import { Header as DefaultHeader } from './components/Header';

// config
import { HEADER, NAVBAR } from '../configs';

// components
import { NavListProps } from './components/SideBar/type';

type MainStyleProps = {
  collapseClick: boolean;
};

type IMenuAccountPopoverProps = {
  label: string;
  action: () => void;
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

type IProps = {
  children: React.ReactNode;
  AccountPopover?: React.ReactNode;
  ThemeMode?: React.ReactNode;
  SearchBar?: React.ReactNode;
  menuAccountPopover?: IMenuAccountPopoverProps[];
  menuItems?: NavListProps[];
  logo?: any | React.ReactNode;
  onSearchBar?: (value: string) => void;
};

export const PianoLayout: React.FC<IProps> = ({
  // state
  logo,
  menuItems,
  // components
  AccountPopover,
  ThemeMode,
  SearchBar,
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
        onOpenSidebar={() => setOpen(true)}
        AccountPopover={AccountPopover}
        ThemeMode={ThemeMode}
        SearchBar={SearchBar}
      />

      <DefaultSider
        logo={logo}
        isCollapse={isCollapse}
        isOpenSidebar={open}
        onToggleCollapse={onToggleCollapse}
        collapseClick={collapse.click}
        collapseHover={collapse.hover}
        onCloseSidebar={() => setOpen(false)}
        onHoverEnter={onHoverEnter}
        onHoverLeave={onHoverLeave}
        menuItems={menuItems}
      />

      <MainStyle collapseClick={collapse.click}>{children}</MainStyle>
    </Box>
  );
};
