import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { mdxComponents } from '@/src/components/mdxComponents';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PageHeading from '@/src/components/ui/PageHeading';
import SyntaxLink from '@/src/components/ui/inputs/SyntaxLink';
import AnimateOnScroll from '@/src/components/AnimateOnScroll';
import { slideInUpSoft } from '@/src/styles/animations';


export function formatDate(dateString: string | null) {
  if (!dateString) return null;
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // MUST unwrap the promise
  const { slug } = await params;

  // Then you can safely read your MDX file
  const filePath = path.join(process.cwd(), 'content/resources', `${slug}.mdx`);
  // if (!fs.existsSync(filePath)) notFound();

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <article className="prose w-screen bg-brand-base/80 mx-auto mt-30">
      <div className="max-w-4xl bg-white border-15 border-brand-base/90 mx-auto px-4">
        <div className="max-w-2xl mx-auto py-20">
      <PageHeading heading={data.title} />
      <p className="text-gray-500 text-sm">{formatDate(data.date)}</p>
      <MDXRemote source={content} components={mdxComponents} />

        <div className="flex justify-center pt-20">
          <SyntaxLink href="/resources" content="← Back to Resources" extraClassName="py-4 px-6">
            Request Quote
          </SyntaxLink>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/resources', `${slug}.mdx`);
  const { data } = matter(fs.readFileSync(filePath, 'utf8'));

  return {
    title: data.title,
  };
}
