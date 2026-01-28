import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ResourcesList from '@/src/components/ResourcesList';
import PageHeading from '@/src/components/ui/PageHeading';

const CONTENT_DIR = path.join(process.cwd(), 'content/resources');

export const runtime = 'nodejs';

export default function ResourcesIndex() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((file) => {
    const filePath = path.join(CONTENT_DIR, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(source);

    return {
      slug: file.replace(/\.mdx$/, ''),
      title: data.title ?? file.replace(/\.mdx$/, ''),
      subtext: data.subtext ?? '',
      date: data.date ?? null,
      keywords: data.keywords ?? [],
    };
  });

  return (
    <div className="w-screen mx-auto my-30">
      {/* <PageHeading heading="Resources" /> */}

      <ResourcesList posts={posts} />


    </div>
  );
}
