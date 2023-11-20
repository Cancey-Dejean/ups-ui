import Container from "@/components/atoms/Container"
import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb"

type BannerProps = {}

const Banner = ({}: BannerProps) => {
  return (
    <div>
      <Breadcrumb />
      <Container>
        <h1>Text</h1>
      </Container>
    </div>
  )
}

export default Banner
