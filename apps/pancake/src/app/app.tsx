import Typography from '@mui/material/Typography';

// mui icons
import PostAddIcon from '@mui/icons-material/PostAdd';
import AppsIcon from '@mui/icons-material/Apps';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

// components
import {
  AccountPopover,
  ThemeMode,
  SearchBar,
} from '@tony-theme/core/components';

// themes
import { PianoLayout } from '@tony-theme/piano';
import { GuitarLayout } from '@tony-theme/guitar';

export default function App() {
  return (
    // <PianoLayout
    //   AccountPopover={
    //     <AccountPopover
    //       menuAccountPopover={[
    //         {
    //           label: 'Profile',
    //           action: () => {
    //             console.log('profile');
    //           },
    //         },
    //         {
    //           label: 'Settings',
    //           action: () => {
    //             console.log('settings');
    //           },
    //         },
    //       ]}
    //       onLogout={() => {
    //         console.log('logout');
    //       }}
    //     />
    //   }
    //   ThemeMode={
    //     <ThemeMode
    //       themeMode="light"
    //       onToggleMode={() => {
    //         console.log('ontoggle mode');
    //       }}
    //     />
    //   }
    //   SearchBar={<SearchBar onSearchBar={(value) => console.log(value)} />}
    //   menuItems={[
    //     {
    //       key: '/posts',
    //       label: 'Posts',
    //       name: 'posts',
    //       children: [
    //         {
    //           key: '/posts-list',
    //           label: 'List',
    //           name: 'posts',
    //           children: [],
    //           route: '/posts/list',
    //         },
    //       ],
    //       route: '/posts',
    //       icon: <PostAddIcon />,
    //     },
    //     {
    //       key: '/product',
    //       label: 'Products',
    //       name: 'product',
    //       children: [],
    //       route: '/product',
    //       icon: <AppsIcon />,
    //     },
    //     {
    //       key: '/restaurants',
    //       label: 'Restaurants',
    //       name: 'restaurants',
    //       children: [],
    //       route: '/restaurants',
    //       icon: <RestaurantMenuIcon />,
    //     },
    //   ]}
    // >
    //   <Typography paragraph>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    //     tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
    //     non enim praesent elementum facilisis leo vel. Risus at ultrices mi
    //     tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
    //     tellus. Convallis convallis tellus id interdum velit laoreet id donec
    //     ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
    //     suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
    //     quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
    //     proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
    //     tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
    //     varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
    //     Lorem donec massa sapien faucibus et molestie ac.
    //   </Typography>
    // </PianoLayout>
    <GuitarLayout />
  );
}
