import type { Meta, StoryObj } from "@storybook/react"
import Hero from "./Hero"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Sections/Hero",
  component: Hero,
  args: {},
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // intent: {
    //   control: { type: "select" },
    //   // options: buttonIntents.map((intent) => intent),
    //   options: [
    //     "primary",
    //     "secondary",
    //     "tertiary",
    //     "border-primary",
    //     "text",
    //     "navText",
    //   ],
    // },
    // size: {
    //   control: { type: "select" },
    //   options: ["base", "small", "large"],
    // },
    // icon: {
    //   control: false,
    // },
  },
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Hero {...args} />
  },
}
