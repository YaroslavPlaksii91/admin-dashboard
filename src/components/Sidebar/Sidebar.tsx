import { NavLink } from 'react-router-dom';
import {
  SvgIcon,
  Drawer,
  List,
  ListItem,
  Typography,
  Divider,
} from '@mui/material';

import { Logo } from '@components/Logo/Logo';
import { LOGO_TYPES } from '@components/Logo/constants';

import { USERS_PAGES, USERS_SETTINGS } from './constants';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <Logo type={LOGO_TYPES.HORIZONTAL} />

      <List sx={{ padding: 0, paddingBottom: 4 }}>
        {USERS_PAGES.map(page => (
          <ListItem key={page.name} disablePadding sx={{ letterSpacing: 0.2 }}>
            <NavLink
              to={page.link}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              <SvgIcon titleAccess={page.name} fontSize="small">
                <use href={page.icon}></use>
              </SvgIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ lineHeight: 1.3 }}
              >
                {page.name}
              </Typography>
            </NavLink>
          </ListItem>
        ))}
      </List>

      <Divider
        sx={{
          backgroundColor: 'borderColor',
          opacity: 0.06,
        }}
      />

      <List sx={{ padding: 0, paddingTop: 4 }}>
        {USERS_SETTINGS.map(page => (
          <ListItem key={page.name} disablePadding sx={{ letterSpacing: 0.2 }}>
            <NavLink
              to={page.link}
              className={({ isActive }) =>
                isActive ? styles.activeLink : styles.link
              }
            >
              <SvgIcon titleAccess={page.name} fontSize="small">
                <use href={page.icon}></use>
              </SvgIcon>
              <Typography
                variant="body1"
                component="span"
                sx={{ lineHeight: 1.3 }}
              >
                {page.name}
              </Typography>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
