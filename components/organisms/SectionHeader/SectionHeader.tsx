import Title, { TitleProps } from "@/components/atoms/Title"
import { twMerge } from "tailwind-merge"

type Props = {
  alignment?: "left" | "center" | "right"
  titleVariant?: TitleProps["intent"]
}

const SectionHeader = ({
  alignment = "left",
  titleVariant = "medium",
}: Props) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-[var(--spacing-300)]",
        alignment === "left" ? "items-start" : null,
        alignment === "center" ? "items-center" : null,
        alignment === "right" ? "items-end" : null
      )}
    >
      <Title intent={titleVariant} as="h1">
        Moving our world forward by delivering what matters
      </Title>

      <hr className="bg-[var(--color-secondary-separator)] w-[80px] h-[4px]" />
    </div>
  )
}

export default SectionHeader
