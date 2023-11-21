import { twMerge } from "tailwind-merge"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(
        "px-5 2xl:max-w-container-desktop mx-auto",
        className ? className : null
      )}
    >
      {children}
    </div>
  )
}

export default Container
