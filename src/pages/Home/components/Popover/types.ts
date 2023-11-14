import { ReactNode } from 'react';

export type PopoverProps = {
  id: string | undefined;
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  handleClose: () => void;
  children: ReactNode;
};
