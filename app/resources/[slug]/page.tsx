import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { mdxComponents } from '@/src/components/mdxComponents';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // MUST unwrap the promise
  const { slug } = await params;

  // Then you can safely read your MDX file
  const filePath = path.join(process.cwd(), 'content/resources', `${slug}.mdx`);
  // if (!fs.existsSync(filePath)) notFound();

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <article className="prose mx-auto py-10 mt-30">
      <h1>{data.title}</h1>
      <MDXRemote source={content} components={mdxComponents} />
    </article>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'content/resources', `${slug}.mdx`);
  const { data } = matter(fs.readFileSync(filePath, 'utf8'));

  return {
    title: data.title,
    description: data.description ?? '',
  };
}
