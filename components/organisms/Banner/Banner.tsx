import Container from "@/components/atoms/Container"
import Breadcrumb from "@/components/molecules/Breadcrumb/Breadcrumb"
import SectionHeader from "@/components/organisms/SectionHeader/SectionHeader"
import Tabs from "@/components/organisms/Tabs/Tabs"

type BannerProps = {}

const Banner = ({}: BannerProps) => {
  return (
    <div className="pb-[var(--spacing-1700)] bg-[var(--color-neutral-grey)] relative background-banner-clearBrown">
      <div className="py-[var(--spacing-400)]">
        <Breadcrumb />
      </div>

      <Container className="py-[var(--spacing-800)]">
        <div className="max-w-[950px] mx-auto flex flex-col">
          <SectionHeader titleVariant="large" alignment="center" />

          <div className="mt-[var(--spacing-600)] flex flex-col">
            <Tabs />
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 2xl:max-h-[200px] h-full flex items-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          className="h-[calc((100vw/1440)*72)] w-screen"
          height="72"
          viewBox="0 0 1440 72"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M-400 176C139.222 -24.794 1028.42 -10.941 1440 13.8751V176L-400 176Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Banner
