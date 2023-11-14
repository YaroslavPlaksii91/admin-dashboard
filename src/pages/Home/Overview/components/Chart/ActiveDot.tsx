import { FC } from 'react';

import { ActiveDotProps } from './types';

export const ActiveDot: FC<ActiveDotProps> = ({ cx, cy }) => {
  return (
    <g>
      <circle
        opacity="0.16"
        cx={cx}
        cy={cy}
        r="13"
        stroke="#3751FF"
        strokeWidth="2"
        fill="none"
      />

      <circle
        cx={cx}
        cy={cy}
        r="4"
        fill="#fff"
        strokeWidth="4px"
        stroke="#3751FF"
        width="14px"
        height="14px"
        filter="drop-shadow(0px 1px 2px rgba(55, 81, 255, 0.20))"
        className="recharts-dot"
      />
    </g>
  );
};
