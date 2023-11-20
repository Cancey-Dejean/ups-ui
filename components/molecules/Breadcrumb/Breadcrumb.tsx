import Container from "@/components/atoms/Container"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

type Props = {}

const items = [
  { href: "/", name: "Home" },
  { name: "Our Stories", current: true },
]

const Breadcrumb = ({}: Props) => {
  return (
    <div>
      <Container>
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap">
            {items.map((item, index) => (
              <li
                key={index}
                aria-current={item.current ? "page" : undefined}
                className={twMerge(
                  "relative text-[14px]",
                  item.current
                    ? "text-color-breadcrumb-active before:content-[''] before:inline-block before:mx-[8px] before:rotate-[21deg] before:h-[0.8em] before:border-r-[1px] before:border-[currentColor]"
                    : null
                )}
              >
                {item.href ? (
                  <Link href={item.href} className="underline">
                    {item.name}
                  </Link>
                ) : (
                  item.name
                )}
              </li>
            ))}
          </ol>
        </nav>
      </Container>
    </div>
  )
}

export default Breadcrumb
