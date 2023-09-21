import { List, ListItem, SvgIcon } from '@mui/material';

import { RenderLegendProps } from './types';

export const renderLegend = ({ payload }: RenderLegendProps) => {
  if (!payload) {
    return null;
  }

  return (
    <List
      sx={{
        position: 'absolute',
        top: -470,
        right: 0,
        display: 'flex',
        gap: '32px',
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: 1.3,
        letterSpacing: 0.1,
        color: 'secondaryTextColor',
      }}
    >
      <ListItem key={payload[1].value} sx={{ width: 'auto' }}>
        <SvgIcon sx={{ stroke: '#3751FF', mr: 2 }}>
          <use href="/src/assets/icons/sprite.svg#icon-horizontal"></use>
        </SvgIcon>
        {payload[1].value}
      </ListItem>
      <ListItem key={payload[0].value} sx={{ width: 'auto' }}>
        <SvgIcon sx={{ stroke: '#DFE0EB', mr: 2 }}>
          <use href="/src/assets/icons/sprite.svg#icon-horizontal"></use>
        </SvgIcon>
        {payload[0].value}
      </ListItem>
    </List>
  );
};
