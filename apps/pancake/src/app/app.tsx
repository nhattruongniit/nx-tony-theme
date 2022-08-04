import Typography from '@mui/material/Typography';

import { PianoLayout } from '@tony-theme/piano';
import {
  AccountPopover,
  ThemeMode,
  SearchBar,
} from '@tony-theme/core/components';

export default function App() {
  return (
    <PianoLayout
      menuAccountPopover={[
        {
          label: 'Profile',
          action: () => {
            console.log('profile');
          },
        },
        {
          label: 'Settings',
          action: () => {
            console.log('settings');
          },
        },
      ]}
      AccountPopover={<AccountPopover />}
      ThemeMode={
        <ThemeMode
          themeMode="light"
          onToggleMode={() => {
            console.log('ontoggle mode');
          }}
        />
      }
      SearchBar={<SearchBar onSearchBar={(value) => console.log(value)} />}
    >
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
        non enim praesent elementum facilisis leo vel. Risus at ultrices mi
        tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
        tellus. Convallis convallis tellus id interdum velit laoreet id donec
        ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
        suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
        quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
        proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
        tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
        varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
        Lorem donec massa sapien faucibus et molestie ac.
      </Typography>
    </PianoLayout>
  );
}
