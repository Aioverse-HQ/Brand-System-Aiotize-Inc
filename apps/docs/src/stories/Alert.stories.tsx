import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '@aiotize/react';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    dismissible: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational message for the user.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'Please review your input before proceeding.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    children: 'There was an error processing your request.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    title: 'Dismissible Alert',
    children: 'Click the X button to dismiss this alert.',
    dismissible: true,
  },
};

export const WithoutTitle: Story = {
  args: {
    variant: 'info',
    children: 'This is an alert without a title.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="info" title="Info">
        This is an informational alert.
      </Alert>
      <Alert variant="success" title="Success">
        This is a success alert.
      </Alert>
      <Alert variant="warning" title="Warning">
        This is a warning alert.
      </Alert>
      <Alert variant="error" title="Error">
        This is an error alert.
      </Alert>
    </div>
  ),
};
