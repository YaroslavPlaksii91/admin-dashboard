import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { getCurrentTime } from '@services/getCurrentTime';

import { ActiveDot } from './ActiveDot';
import { CustomTooltip } from './Tooltip';
import { renderLegend } from './renderLegend';
import { ChartProps } from './types';

export const Chart: FC<ChartProps> = ({ trends }) => {
  const currentTime = getCurrentTime();

  return (
    <Box sx={{ flexGrow: 1, padding: '32px' }}>
      <Typography variant="h3" sx={{ mb: 2 }}>
        Today's trends
      </Typography>

      <Typography
        sx={{
          fontSize: 12,
          lineHeight: 1.33,
          letterSpacing: 0.1,
          color: 'secondaryTextColor',
        }}
      >
        {currentTime}
      </Typography>

      <ResponsiveContainer height="90%">
        <AreaChart
          width={800}
          height={400}
          data={trends}
          margin={{ top: 54, right: 0 }}
        >
          <XAxis
            dataKey="hour"
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 10,
              letterSpacing: 0.1,
              fill: '#9FA2B4',
            }}
            tickMargin={12}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickCount={7}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 10,
              letterSpacing: 0.1,
              fill: '#9FA2B4',
            }}
          />
          <CartesianGrid stroke="#EBEDF0" vertical={false} />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ top: -75, left: -42 }}
          />
          <Legend content={renderLegend} />
          <Area
            type="natural"
            dataKey="yesterday"
            stroke="#DFE0EB"
            strokeWidth={2}
            yAxisId="right"
            name="Yesterday"
            dot={false}
            activeDot={false}
            fill="none"
          />
          <Area
            type="natural"
            dataKey="today"
            stroke="#3751FF"
            fill="#3751FF"
            fillOpacity={0.1}
            strokeWidth={2}
            yAxisId="right"
            name="Today"
            dot={false}
            activeDot={<ActiveDot />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};
