import Button from "./ui/inputs/Button"
import { List } from "./ui/List"
import { SyntaxLink } from "./ui/SyntaxLink"

/**
 * React Components supported by content *.mdx files.
 */
export const mdxComponents = {
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="my-6 leading-relaxed text-brand-base text-md" {...props} />
  ),
    Button,
    SyntaxLink,
    List
}

