// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// Import the `@next/mdx` package, which allows Next.js to handle MDX files (Markdown with JSX).
// The `withMDX` function is initialized with a configuration object that specifies the file extensions
// it should process (in this case, `.md` and `.mdx` files).
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/, // Regular expression to match `.md` and `.mdx` files
});

// Export the configuration for Next.js, enhanced with MDX support.
// The `withMDX` function wraps the Next.js configuration and adds MDX support.
module.exports = withMDX({
  // Specify the file extensions that Next.js should consider as pages.
  // This includes standard JavaScript/TypeScript files (`js`, `jsx`, `ts`, `tsx`)
  // as well as Markdown and MDX files (`md`, `mdx`).
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});