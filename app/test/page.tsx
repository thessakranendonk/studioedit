import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import { mdxComponents } from '@/src/components/mdxComponents'
import React from 'react'

export const runtime = "nodejs";


const CONTENT_DIR = path.join(process.cwd(), 'content')

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { slug } = React.use(params)

  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)

  console.log(CONTENT_DIR); // Debugging line
  console.log("File Path:", filePath); // Debugging line
  console.log("params:", params); // Debugging line
  
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const source = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(source)

  return (
    <article className="prose mx-auto py-10 mt-30">
      <h1>{data.title}</h1>
      <MDXRemote source={content} components={mdxComponents as any} />
    </article>
  )
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params

  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  const { data } = matter(fs.readFileSync(filePath, 'utf8'))

  return {
    title: data.title,
    description: data.description ?? '',
  }
}
