import { SummaryItemType } from '@layout/Overview/components/Summary/types';
import { StatisticsItemType } from '@layout/Overview/components/Statistics/types';
import { ChartItemType } from '@layout/Overview/components/Chart/types';
import { TasksItemType } from '@layout/Overview/components/Tasks/types';
import { TicketsItemType } from '@layout/Overview/components/Tickets/types';

export type UserStoreType = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  isLoggedIn: boolean;
};

export type OverviewDataType = {
  summary: SummaryItemType[];
  trends: ChartItemType[];
  statistics: StatisticsItemType[];
  tasks: TasksItemType[];
  unresolved: TicketsItemType[];
};
