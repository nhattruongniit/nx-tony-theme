/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from 'react';
import { BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export type NavListProps = {
  label: string;
  route: string;
  icon?: ReactElement;
  info?: ReactElement;
  caption?: string;
  disabled?: boolean;
  roles?: string[];
  children?: any;
};

export type NavItemProps = {
  item: NavListProps;
  depth: number;
  open: boolean;
  active: boolean;
  isCollapse?: boolean;
};

export interface NavSectionProps extends BoxProps {
  isCollapse?: boolean;
  navConfig: {
    subheader: string;
    items: NavListProps[];
  }[];
}

export interface ISideBarProps {
  isOpenSidebar: boolean;
  isCollapse: boolean;
  collapseClick: boolean;
  collapseHover: boolean;
  menuItems?: unknown[];
  logo?: any | React.ReactNode;
  onCloseSidebar: () => void;
  onToggleCollapse: () => void;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
}
