import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';

import { getData } from '@services/getData';
import { DataType } from '@services/types';

import { Summary } from './components/Summary/Summary';
import { Chart } from './components/Chart/Chart';
import { Statistics } from './components/Statistics/Statistics';
import { Tickets } from './components/Tickets/Tickets';
import { Tasks } from './components/Tasks/Tasks';

export const Overview: FC = () => {
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setData(data);
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
