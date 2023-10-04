import data from './data.json';
import { OverviewDataType } from './types';

export const getOverviewData = () =>
  new Promise<OverviewDataType>(resolve => resolve(data));
