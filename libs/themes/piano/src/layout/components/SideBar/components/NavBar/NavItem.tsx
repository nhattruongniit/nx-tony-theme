/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
// @mui
import { Box, Tooltip, ListItemButtonProps } from '@mui/material';
// mui icon
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { NavItemProps } from '../../type';
import { ListItemStyle, ListItemTextStyle, ListItemIconStyle } from './style';

type Props = NavItemProps & ListItemButtonProps;

export default function NavItem({
  item,
  depth,
  active,
  open,
  isCollapse,
  ...other
}: Props) {
  const { label, icon, info, children, disabled, caption } = item;

  const renderContent = (
    <ListItemStyle depth={depth} active={active} disabled={disabled} {...other}>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}

      {depth !== 1 && <DotIcon active={active && depth !== 1} />}

      <ListItemTextStyle
        isCollapse={isCollapse}
        primary={label}
        secondary={
          caption && (
            <Tooltip title={caption} placement="top-start">
              <span>{caption}</span>
            </Tooltip>
          )
        }
        primaryTypographyProps={{
          noWrap: true,
          variant: active ? 'subtitle2' : 'body2',
        }}
        secondaryTypographyProps={{
          noWrap: true,
          variant: 'caption',
        }}
      />

      {!isCollapse && (
        <>
          {info && (
            <Box component="span" sx={{ lineHeight: 0 }}>
              {info}
            </Box>
          )}

          {children && children.length > 0 && (
            <KeyboardArrowDownIcon
              sx={{ transform: open ? 'rotate(0deg)' : 'rotate(270deg)' }}
            />
          )}
        </>
      )}
    </ListItemStyle>
  );

  return <React.Fragment>{renderContent}</React.Fragment>;
}

// ----------------------------------------------------------------------

type DotIconProps = {
  active: boolean;
};

export function DotIcon({ active }: DotIconProps) {
  return (
    <ListItemIconStyle>
      <Box
        component="span"
        sx={{
          width: 4,
          height: 4,
          borderRadius: '50%',
          bgcolor: 'text.disabled',
          transition: (theme) =>
            theme.transitions.create('transform', {
              duration: theme.transitions.duration.shorter,
            }),
          ...(active && {
            transform: 'scale(2)',
            bgcolor: 'primary.main',
          }),
        }}
      />
    </ListItemIconStyle>
  );
}
