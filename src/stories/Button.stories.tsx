import { Button } from "../app/components/Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => (
    <Button variant="success">
      <span>Click me</span>
    </Button>
  ),
};
