import data from './data.json';
import { DataType } from './types';

export const getData = () => new Promise<DataType>(resolve => resolve(data));
