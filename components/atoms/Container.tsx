type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="px-5 2xl:max-w-container-desktop mx-auto">{children}</div>
  )
}

export default Container
