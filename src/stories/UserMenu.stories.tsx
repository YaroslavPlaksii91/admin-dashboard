import { Meta, StoryObj } from '@storybook/react';

import { User } from 'firebase/auth';

import { UserMenu } from '@pages/Home/components/UserMenu/UserMenu';
import { authStore } from '@store/auth';

import '../index.css';

authStore.user = { displayName: 'John Doe' } as User;

const meta: Meta<typeof UserMenu> = {
  title: 'Home/UserMenu',
  component: UserMenu,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof UserMenu> = {};
