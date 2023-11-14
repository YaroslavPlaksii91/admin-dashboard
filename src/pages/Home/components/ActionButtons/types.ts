export type ActionButtonsProps = {
  onAddClick: () => void;
  handleSort: (sortKey: string) => void;
  addButtonName: string;
  sortOptions: string[];
  filterValue: string;
  setFilterValue: (value: string) => void;
  filterTitle: string;
  filterOptions: string[];
};
