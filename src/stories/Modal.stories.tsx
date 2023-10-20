import { Meta, StoryObj } from '@storybook/react';

import { ModalComponent } from '@components/Modal/Modal';

import '../index.css';

const meta: Meta<typeof ModalComponent> = {
  title: 'App/Modal',
  component: ModalComponent,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof ModalComponent> = {
  args: {
    isOpen: true,
    title: 'Modal title',
    children: 'Text content',
    onClose: () => {},
  },
};
