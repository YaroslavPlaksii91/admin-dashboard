export type ActionButtonsProps = {
  onAddClick: () => void;
  onFilterClick: () => void;
  handleSort: (sortKey: string) => void;
  addButtonName: string;
  sortOptions: string[];
};
