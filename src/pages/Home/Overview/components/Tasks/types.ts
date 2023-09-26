export type TasksItemType = {
  title: string;
  priority: string;
  isFinished: boolean;
};

export type TasksProps = {
  data: TasksItemType[];
};
