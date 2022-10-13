import { useState } from 'react';
import { useNavigate, useLocation, matchPath } from 'react-router-dom';
// @mui
import { List, Collapse, Link } from '@mui/material';
//
import { NavListProps } from '../../type';
import NavItem from './NavItem';

function getActive(path: string, pathname: string) {
  return path ? !!matchPath({ path: path, end: false }, pathname) : false;
}

function isExternalLink(path: string) {
  return path && path.includes('http');
}

type NavListRootProps = {
  data: NavListProps;
  depth: number;
  hasChildren: boolean;
  isCollapse?: boolean;
};

export default function NavList({
  data,
  depth,
  hasChildren,
  isCollapse = false,
}: NavListRootProps) {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const active = getActive(data.route, pathname);

  const [open, setOpen] = useState(active);

  const handleClickItem = () => {
    if (!hasChildren) {
      navigate(data.route);
    }
    setOpen(!open);
  };

  return (
    <>
      {isExternalLink(data.route) ? (
        <Link href={data.route} target="_blank" rel="noopener" underline="none">
          <NavItem
            item={data}
            depth={depth}
            open={open}
            active={active}
            isCollapse={isCollapse}
          />
        </Link>
      ) : (
        <NavItem
          item={data}
          depth={depth}
          open={open}
          active={active}
          isCollapse={isCollapse}
          onClick={handleClickItem}
        />
      )}

      {!isCollapse && hasChildren && (
        <Collapse in={open} unmountOnExit>
          <List component="div" disablePadding>
            <NavSubList data={data.children} depth={depth} />
          </List>
        </Collapse>
      )}
    </>
  );
}

type NavListSubProps = {
  data: NavListProps[];
  depth: number;
};

function NavSubList({ data, depth }: NavListSubProps) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.label + list.route}
          data={list}
          depth={depth + 1}
          hasChildren={list.children.length > 0}
        />
      ))}
    </>
  );
}
