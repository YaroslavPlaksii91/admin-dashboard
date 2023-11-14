export type ColumnHeadingProps = {
  onClick: () => void;
  size: number;
  name: string;
  title: string;
  sortKey: string;
  sortDirection: 'asc' | 'desc';
};
