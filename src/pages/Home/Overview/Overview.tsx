import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { getOverviewData } from '@services/db/overview';
import { OverviewDataType } from '@services/db/types';

import { Summary } from './components/Summary/Summary';
import { Chart } from './components/Chart/Chart';
import { Statistics } from './components/Statistics/Statistics';
import { Tickets } from './components/Tickets/Tickets';
import { Tasks } from './components/Tasks/Tasks';

export const Overview: FC = () => {
  const [data, setData] = useState<OverviewDataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOverviewData();
        setData(data);
      } catch (error) {
        console.error('Error while fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box component="section">
      {data && (
        <>
          <Summary data={data.summary} />

          <Box
            sx={{
              display: 'flex',
              mb: '30px',
              backgroundColor: 'mainWhiteColor',
              border: '1px solid',
              borderColor: 'borderColor',
              borderRadius: '8px',
            }}
          >
            <Chart trends={data.trends} />
            <Statistics data={data.statistics} />
          </Box>

          <Box sx={{ display: 'flex', gap: '30px' }}>
            <Tickets data={data.unresolved} />
            <Tasks data={data.tasks} />
          </Box>
        </>
      )}
    </Box>
  );
};
