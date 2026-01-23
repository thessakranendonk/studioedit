import clsx from "clsx"
import { ChevronRightIcon } from "flowbite-react"
import Link from "next/link"

export interface SyntaxLinkProps {
  page: string
  section?: string
  title?: string
}

export const SyntaxLink: React.FC<SyntaxLinkProps> = ({ section, page, title }) => {
  return (
    // section is optional when linking to Ancillery pages
    <Link href={section ? `/${section}/${page}` : `/${page}`}
        className={clsx(
          'flex w-full px-4 py-2 sm:py-3 rounded-md border-2',
          'text-lg font-normal no-underline',
          'text-white hover:text-brand-base hover:border-brand-base bg-brand-base hover:bg-white',
          'transition-colors duration-150 ease-in',
          'focus:outline-none focus-visible:ring focus-visible:ring-brand-orange/20 focus-visible:border-transparent',
        )}
      >
        <span className="inline-block flex-1">{title}</span>
        <ChevronRightIcon className="w-5 h-6 mt-1 inline-block text-brand-blue-dark" />
    </Link>
  )
}