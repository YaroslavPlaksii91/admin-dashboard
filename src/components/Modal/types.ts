import { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onSubmit: () => void;
  onClose: () => void;
};
