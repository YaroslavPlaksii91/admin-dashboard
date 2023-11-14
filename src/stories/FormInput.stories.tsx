import { Meta, StoryObj } from '@storybook/react';

import { FormInput } from '@components/FormInput/FormInput';

import '../index.css';

const meta: Meta<typeof FormInput> = {
  title: 'App/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '380px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Email: StoryObj<typeof FormInput> = {
  args: {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Email',
    errors: {},
  },
};

export const Password: StoryObj<typeof FormInput> = {
  args: {
    label: 'Password',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    errors: {},
    isPassword: true,
  },
};

export const Text: StoryObj<typeof FormInput> = {
  args: {
    label: 'Text',
    type: 'text',
    name: 'text',
    placeholder: 'Text',
    errors: {},
  },
};
