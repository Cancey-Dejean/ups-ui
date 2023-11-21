import type { Meta, StoryObj } from "@storybook/react"
import Title from "./"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  title: "Components/Title",
  component: Title,
  args: {
    as: "h1",
    intent: "heading-large",
    children: "Heading goes here",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
    intent: {
      control: { type: "select" },
      options: ["heading-large"],
    },
  },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Title {...args}></Title>
  },
}

export const Secondary: Story = {
  render: (args) => {
    return <Title {...args}></Title>
  },
}
