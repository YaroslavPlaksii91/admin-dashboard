import { SummaryItemType } from '@pages/Home/Overview/components/Summary/types';
import { StatisticsItemType } from '@pages/Home/Overview/components/Statistics/types';
import { ChartItemType } from '@pages/Home/Overview/components/Chart/types';
import { TasksItemType } from '@pages/Home/Overview/components/Tasks/types';
import { TicketsItemType } from '@pages/Home/Overview/components/Tickets/types';

export type OverviewDataType = {
  summary: SummaryItemType[];
  trends: ChartItemType[];
  statistics: StatisticsItemType[];
  tasks: TasksItemType[];
  unresolved: TicketsItemType[];
};
