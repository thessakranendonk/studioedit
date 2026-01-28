import fs from 'fs';
import path from 'path';
import Link from 'next/link';

const CONTENT_DIR = path.join(process.cwd(), 'content/resources');

export const runtime = 'nodejs';

export default function ResourcesIndex() {
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'));
  const posts = files.map((file) => ({
    slug: file.replace(/\.mdx$/, ''),
  }));

  return (
    <main className="max-w-3xl mx-auto py-16">
      <h1 className="text-3xl font-semibold mb-8">Resources</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/resources/${post.slug}`}>{post.slug}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

