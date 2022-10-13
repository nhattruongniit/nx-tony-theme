import React from 'react';

// mui core
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar } from '@mui/material';

// components
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

const cssBaseLine = <CssBaseline />;
const drawerWidth = 260;

type IProps = {
  theme: any;
  openL: boolean;
};

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    // ...theme.typography.mainContent,
    // ...(!open && {
    //   borderBottomLeftRadius: 0,
    //   borderBottomRightRadius: 0,
    //   transition: theme.transitions.create('margin', {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen,
    //   }),
    //   [theme.breakpoints.up('md')]: {
    //     marginLeft: -(drawerWidth - 20),
    //     width: `calc(100% - ${drawerWidth}px)`,
    //   },
    //   [theme.breakpoints.down('md')]: {
    //     marginLeft: '20px',
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     padding: '16px',
    //   },
    //   [theme.breakpoints.down('sm')]: {
    //     marginLeft: '10px',
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     padding: '16px',
    //     marginRight: '10px',
    //   },
    // }),
    ...(true && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      [theme.breakpoints.down('md')]: {
        marginLeft: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: '10px',
      },
    }),
  })
);

export const GuitarLayout = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      {cssBaseLine}
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: theme.palette.background.default,
          // transition: leftDrawerOpened
          //   ? theme.transitions.create('width')
          //   : 'none',
        }}
      >
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      {/* drawer */}
      <SideBar />
      {/* main content */}
      <Main theme={theme}>
        lorem aibamd lorem aibamd lorem aibamd lorem aibamdlorem aibamd lorem
        aibamd lorem aibamd lorem aibamdlorem aibamd lorem aibamd lorem aibamd
        lorem aibamd lorem aibamd lorem aibamd lorem aibamd lorem aibamd lorem
        aibamd lorem aibamd lorem aibamd lorem aibamd lorem aibamd lorem aibamd
        lorem aibamd lorem aibamd
      </Main>
    </Box>
  );
};
