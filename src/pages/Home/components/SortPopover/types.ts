export type SortPopoverProps = {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  handleSort: (sortKey: string) => void;
  options: string[];
};
