import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SvgIcon, Typography, Box, Button } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { ROUTES } from '@routes/constants';
import { authStore } from '@store/auth';
import { endSession } from '@services/localeStorage/localeStorage';

export const UserMenu: FC = observer(() => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsLogoutVisible(!isLogoutVisible);
  };

  const handleLogoutClick = () => {
    authStore.logout();
    endSession();
    navigate(ROUTES.LOGIN_PAGE);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
      <Button sx={{ mr: '24px' }}>
        <SvgIcon titleAccess="Search" fontSize="small">
          <use href="/sprite.svg#icon-search"></use>
        </SvgIcon>
      </Button>
      <Button>
        <SvgIcon titleAccess="New message" fontSize="small">
          <use href="/sprite.svg#icon-new"></use>
        </SvgIcon>
      </Button>
      <Button>
        <SvgIcon sx={{ height: '32px', ml: '20px', mr: '20px' }}>
          <use href="/sprite.svg#icon-vertical"></use>
        </SvgIcon>
      </Button>

      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: 1.43,
          letterSpacing: 0.2,
          mr: '14px',
        }}
      >
        {authStore.user && authStore.user.displayName}
      </Typography>
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '1px solid #DFE0EB',
        }}
        onClick={handleIconClick}
      >
        <Box
          sx={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img src="/user.png" alt="User's photo" />
        </Box>
      </Button>

      {isLogoutVisible && (
        <Button
          sx={{ position: 'absolute', top: '80px' }}
          onClick={handleLogoutClick}
        >
          Logout
        </Button>
      )}
    </Box>
  );
});
