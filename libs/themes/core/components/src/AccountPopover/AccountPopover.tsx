import { useState } from 'react';
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from '@mui/material';

export type IMenuOptionProps = {
  label: string;
  linkTo: string;
  action: () => void;
};

export type IAccountPopoverProps = {
  logout?: () => void;
  user?: {
    avatar?: string;
    name?: string;
    email?: string;
  };
  menuOption?: IMenuOptionProps[];
};

export function AccountPopover({
  user,
  menuOption,
  logout,
}: IAccountPopoverProps) {
  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
      <IconButton
        color="primary"
        aria-label="avatar"
        component="span"
        onClick={handleOpen}
      >
        {user?.avatar ? (
          <Avatar src={user?.avatar} alt={user?.name} />
        ) : (
          <Avatar alt="avatar">
            <svg
              style={{ width: 28 }}
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="PersonIcon"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </Avatar>
        )}
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{
          p: 0,
          ml: 0.75,
          '& .MuiMenuItem-root': {
            typography: 'body2',
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {user?.name || 'Default'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email || 'default@gmail.com'}
          </Typography>
        </Box>

        {menuOption && (
          <>
            <Divider sx={{ borderStyle: 'dashed' }} />

            <Stack sx={{ p: 1 }}>
              {menuOption.map((option) => (
                <MenuItem
                  key={option.label}
                  onClick={() => {
                    handleClose();
                    option.action();
                  }}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Stack>
          </>
        )}

        {logout && (
          <>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem sx={{ m: 1 }} onClick={() => logout()}>
              Logout
            </MenuItem>
          </>
        )}
      </Popover>
    </Stack>
  );
}
