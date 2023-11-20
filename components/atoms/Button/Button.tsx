import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { cva } from "class-variance-authority"
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"

export type ButtonProps = {
  /**
   * Description goes here
   */
  intent?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "border-primary"
    | "text"
    | "navText"
  /**
   * Description goes here
   */
  className?: string
  /**
   * Description goes here
   */
  linkUrl?: string
  /**
   * Description goes here
   */
  icon?: React.ReactNode | boolean
  /**
   * Description goes here
   */
  reverseIcon?: boolean
  /**
   * Description goes here
   */
  shadow?: boolean
  /**
   * Description goes here
   */
  size?: "base" | "small" | "large"
  /**
   * Description goes here
   */
  label?: string
  /**
   * Description goes here
   */
  ariaLabel?: string
  /**
   * Description goes here
   */
  onClick?: () => void
} & AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const button = cva(
  "text-base flex items-center gap-[8px] justify-center border border-transparent font-bold [transition:var(--transition-base)] rounded-[96px] px-4 py-3 hover:shadow-btn",
  {
    variants: {
      intent: {
        primary: ["text-white", "bg-primary-300 hover:bg-primary-200"],
        secondary: [
          "bg-white hover:bg-primary-100",
          "rounded-[28px]",
          "text-[18px] text-primary-300",
          "shadow-btn",
        ],
        tertiary: [
          "bg-transparent hover:bg-gray-300 hover:bg-opacity-30 dark:hover:bg-white",
          "text-black dark:text-white dark:hover:text-black",
          "!border-neutral-200 dark:border-white",
          "hover:shadow-none",
        ],
        "border-primary": [
          "bg-transparent hover:bg-primary-100",
          "text-primary-200",
          "!border-primary-200",
          "hover:shadow-none",
        ],
        text: [
          "bg-transparent hover:bg-gray-300/30",
          "text-black dark:text-white",
          "text-[14px]",
          "!pl-0 hover:!pl-[16px]",
          "rounded-[8px]",
        ],
        navText: [
          "bg-transparent hover:bg-gray-300",
          "text-black",
          "text-base",
          "font-normal",
          "!rounded-[10px]",
          "hover:bg-opacity-30 hover:shadow-none",
          "!px-2",
        ],
      },
      size: {
        small: ["h-[34px]", "!py-1"],
        base: ["h-[48px]"],
        large: ["h-[56px]", "py-[8px]"],
      },
      shadow: {
        true: ["shadow-btn"],
        false: null,
      },
      reverseIcon: {
        true: ["flex-row-reverse"],
        false: null,
      },
    },
  }
)

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  className = "",
  intent = "primary",
  size = "base",
  label = "Button",
  linkUrl = "",
  shadow = false,
  reverseIcon = false,
  ariaLabel = label,
  icon = null,
  ...props
}: ButtonProps) => {
  const anchorId = label
    .replace(" ", "-")
    .replace("'", "")
    .toLocaleLowerCase()
    .trim()
  const iconContent = icon ? <span>{icon}</span> : null

  return linkUrl !== "" ? (
    <Link
      href={linkUrl}
      className={twMerge(
        button({ intent, size, shadow, reverseIcon, className })
      )}
      aria-label={label}
      {...props}
    >
      {iconContent}
      {label}
    </Link>
  ) : (
    <button
      id={anchorId}
      className={twMerge(
        button({ intent, size, shadow, reverseIcon, className })
      )}
      aria-label={label}
      {...props}
    >
      {iconContent}
      {label}
    </button>
  )
}
