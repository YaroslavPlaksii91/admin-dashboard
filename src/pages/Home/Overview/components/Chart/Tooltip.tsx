import { FC } from 'react';
import { SvgIcon } from '@mui/material';

import { TooltipProps } from './types';
import { TOOLTIP_TEST_ID } from './constants';

export const CustomTooltip: FC<TooltipProps> = ({ active, payload }) => {
  if (active && payload?.length) {
    const value = payload[1].value;

    return (
      <SvgIcon
        sx={{
          width: 64,
          height: 64,
          filter: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08))',
        }}
        data-testid={TOOLTIP_TEST_ID}
      >
        <use href="/sprite.svg#icon-sheet"></use>
        <text x="9" y="12" fill="#252733" fontSize={5} fontWeight={600}>
          {value}
        </text>
      </SvgIcon>
    );
  }

  return null;
};
