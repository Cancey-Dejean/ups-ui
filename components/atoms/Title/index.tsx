import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

export type TitleProps = {
  /**
   * Description goes here
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  /**
   * Description goes here
   */
  intent?: "heading-large"

  /**
   * Description goes here
   */
  className?: string
  /**
   * Description goes here
   */
  children: React.ReactNode
}

const heading = cva("typography-heading", {
  variants: {
    intent: {
      "heading-large": ["heading-large"],
    },
  },
})

/**
 * Primary UI component for user interaction
 */
const Title = ({
  intent = "heading-large",
  as = "h1",
  children = "Heading goes here",
  className = "",
}: TitleProps) => {
  const Element = as
  return (
    <Element className={twMerge(heading({ intent, className }))}>
      {children}
    </Element>
  )
}

export default Title
