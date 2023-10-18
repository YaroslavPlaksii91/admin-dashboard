import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from '@styles/theme';
import { SpeedDial } from '@pages/Home/components/SpeedDial/SpeedDial';

import '../index.css';

const meta: Meta<typeof SpeedDial> = {
  title: 'Home/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider theme={theme}>
        <div
          style={{
            maxWidth: '380px',
            paddingTop: '50px',
          }}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const Default: StoryObj<typeof SpeedDial> = {
  args: {
    handleDelete: () => {},
    handleEdit: () => {},
  },
};
