export type HeadingProps = {
  sortKey: string;
  sortDirection: 'asc' | 'desc';
  handleSort: (name: string) => void;
  columns: readonly {
    title: string;
    name: string;
    size: number;
  }[];
};
