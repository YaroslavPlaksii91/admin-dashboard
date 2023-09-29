export type HeadingProps = {
  sortKey: string;
  sortDirection: string;
  handleSort: (name: string) => void;
  columns: readonly {
    title: string;
    name: string;
    size: number;
  }[];
};
