import { SetStateAction, useState } from 'react';
// @mui
import {
  styled,
  Input,
  Slide,
  Button,
  InputAdornment,
  ClickAwayListener,
  IconButton,
} from '@mui/material';

// mui icons
import SearchIcon from '@mui/icons-material/Search';

// config
import {
  APPBAR_DESKTOP,
  APPBAR_MOBILE,
  HEADER,
  NAVBAR,
} from '@tony-theme/configs';

// styles
import { cssStyles } from '../cssStyles';

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

export interface ISearchBarProps {
  onSearchBar?: (value: string) => void;
}

export function SearchBar({ onSearchBar }: ISearchBarProps) {
  const [isOpen, setOpen] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeText = (e: { target: { value: SetStateAction<string> } }) => {
    setTextSearch(e.target.value);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!isOpen && (
          <IconButton
            sx={{ color: 'text.secondary' }}
            aria-label="avatar"
            component="span"
            onClick={handleOpen}
          >
            <SearchIcon />
          </IconButton>
        )}

        <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
          <SearchbarStyle>
            <Input
              autoFocus
              fullWidth
              disableUnderline
              placeholder="Search…"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
              sx={{ mr: 1, fontWeight: 'fontWeightBold' }}
              onChange={onChangeText}
            />
            <Button
              variant="contained"
              onClick={() => {
                handleClose();
                onSearchBar && onSearchBar(textSearch);
              }}
            >
              Search
            </Button>
          </SearchbarStyle>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}
