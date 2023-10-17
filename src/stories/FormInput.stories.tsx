import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { FormInput } from '@components/FormInput/FormInput';
import { theme } from '@styles/theme';

import '../index.css';

const meta: Meta<typeof FormInput> = {
  title: 'App/FormInput',
  component: FormInput,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            maxWidth: '380px',
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
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
