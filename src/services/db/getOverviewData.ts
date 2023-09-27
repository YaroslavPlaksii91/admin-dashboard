import data from './data.json';
import { OverviewDataType } from '../types';

export const getOverviewData = () =>
  new Promise<OverviewDataType>(resolve =>
    resolve({
      summary: data.summary,
      statistics: data.statistics,
      tasks: data.tasks,
      unresolved: data.unresolved,
      trends: data.trends,
    }),
  );
