import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Button",
  component: Button,
  args: {
    size: "base",
    intent: "primary",
    reverseIcon: false,
    linkUrl: "",
    icon: null,
    className: "",
    label: "Button",
    ariaLabel: "Button",
    shadow: false,
    onClick: () => {
      console.log("clicked");
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    intent: {
      control: { type: "select" },
      // options: buttonIntents.map((intent) => intent),
      options: [
        "primary",
        "secondary",
        "tertiary",
        "border-primary",
        "text",
        "navText",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["base", "small", "large"],
    },
    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Button label="Primary" {...args} />;
  },
};
