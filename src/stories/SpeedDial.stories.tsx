import { Meta, StoryObj } from '@storybook/react';

import { SpeedDial } from '@pages/Home/components/SpeedDial/SpeedDial';

import '../index.css';

const meta: Meta<typeof SpeedDial> = {
  title: 'Home/SpeedDial',
  component: SpeedDial,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div
        style={{
          maxWidth: '200px',
          paddingTop: '30px',
        }}
      >
        <Story />
      </div>
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
