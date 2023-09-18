import { FC } from 'react';
import { Box } from '@mui/material';

import { Summary } from './components/Summary/Summary';
import { Chart } from './components/Chart/Chart';
import { Tickets } from './components/Tickets/Tickets';
import { Tasks } from './components/Tasks/Tasks';

const data = {
  summary: [
    {
      label: 'Unresolved',
      count: 60,
    },
    {
      label: 'Overdue',
      count: 16,
    },
    {
      label: 'Open',
      count: 43,
    },
    {
      label: 'On hold',
      count: 64,
    },
  ],
  statistics: [
    {
      section: 'Resolved',
      value: '449',
    },
    {
      section: 'Received',
      value: '426',
    },
    {
      section: 'Average first response time',
      value: '33m',
    },
    {
      section: 'Average response time',
      value: '3h 8m',
    },
    {
      section: 'Resolution within SLA',
      value: '94%',
    },
  ],
  unresolved: [
    {
      title: 'Waiting on Feature Request',
      count: 4238,
    },
    {
      title: 'Awaiting Customer Response',
      count: 1005,
    },
    {
      title: 'Awaiting Developer Fix',
      count: 914,
    },
    {
      title: 'Pending',
      count: 281,
    },
  ],
  tasks: [
    {
      title: 'Finish ticket update',
      priority: 'urgent',
      isFinished: false,
    },
    {
      title: 'Create new ticket example',
      priority: 'new',
      isFinished: false,
    },
    {
      title: 'Update ticket report',
      priority: 'default',
      isFinished: true,
    },
  ],
};

export const Overview: FC = () => {
  return (
    <section>
      <Summary data={data.summary} />

      <Chart data={data.statistics} />

      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Tickets data={data.unresolved} />
        <Tasks data={data.tasks} />
      </Box>
    </section>
  );
};
