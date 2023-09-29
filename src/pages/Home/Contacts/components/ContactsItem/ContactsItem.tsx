import { FC } from 'react';
import { Grid, Button, SvgIcon, Box, Typography } from '@mui/material';

import { ContactItemProps } from './types';

export const ContactsItem: FC<ContactItemProps> = ({ contact }) => {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        padding: '24px 32px',
        borderBottom: '1px solid',
        borderBottomColor: 'borderColor',
        transition: 'background-color 250ms ease',
        '&:hover': {
          backgroundColor: 'rgba(55, 81, 255, 0.04)',
          cursor: 'pointer',
        },
      }}
    >
      <Grid item xs={4} sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: '44px',
            height: '44px',
            mr: 6,
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img src={contact.image} alt={contact.name} />
        </Box>

        <Typography variant="subtitle2" component="p">
          {contact.name}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="subtitle2" component="p">
          {contact.email}
        </Typography>
      </Grid>
      <Grid item xs={3} sx={{ pr: 5 }}>
        <Typography variant="subtitle2" component="p">
          {contact.address}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle2" component="p">
          {contact.created}
        </Typography>
        <Button>
          <SvgIcon titleAccess="More options">
            <use href="/src/assets/icons/sprite.svg#icon-more"></use>
          </SvgIcon>
        </Button>
      </Grid>
    </Grid>
  );
};
