import { FC } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

import { Sidebar } from '@components/Sidebar/Sidebar';
import { UserMenu } from '@components/UserMenu/UserMenu';

export const HomePage: FC = () => {
  const location = useLocation();

  const title = location.pathname.slice(1);

  return (
    <Box sx={{ minHeight: '100vh', padding: '30px 33px 30px 285px' }}>
      <Sidebar />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '54px',
        }}
      >
        <Typography variant="h2" sx={{ textTransform: 'capitalize' }}>
          {title}
        </Typography>
        <UserMenu />
      </Box>
      <Outlet />
    </Box>
  );
};
