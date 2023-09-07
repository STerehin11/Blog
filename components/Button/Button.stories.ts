import { Meta, StoryObj } from "@storybook/react";
import { MyButton } from "./Button";

const meta = {
  title: "MyButton",
  component: MyButton,
  argTypes: {
    variant: {
      type: "string",
      options: ["contained", "outlined", "text"],
      control: {
        type: "radio",
      },
    },
    type: {
      type: "string",
      options: ["button", "submit"],
      control: {
        type: "radio",
      },
    },
  },
} as Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "test text",
  },
};
