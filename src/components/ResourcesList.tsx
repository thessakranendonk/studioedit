// 'use client';

// import Link from 'next/link';
// import AnimateOnHover, { hoverVariants } from '@/src/components/AnimateOnHover';
// import { MdOutlineArrowRightAlt } from "react-icons/md";
// import { showOnHover } from '../styles/animations';

// function formatDate(dateString: string | null) {
//   if (!dateString) return null;

//   const [year, month, day] = dateString.split("-").map(Number);

//   return new Date(year, month - 1, day).toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// // title="Resources" subtitle="By Dr. Judy Ehrentraut" 

// type Post = {
//     slug: string;
//     title: string;
//     subtext: string;
//     date: string | null;
//     keywords: string[];
// };

// const ResourcesList: React.FC<{ posts: Post[] }> = ({ posts }) => {
//     const sortedPosts = [...posts].sort((a, b) => {
//   if (!a.date) return 1;  // push undated posts to the bottom
//   if (!b.date) return -1;

//   return new Date(b.date).getTime() - new Date(a.date).getTime();
// });

//   return (
//   <div className="relative w-full min-h-screen">
//   {/* Background */}
//   <div className="absolute inset-0 z-0 bg-[url('/images/Hero9.png')] bg-cover bg-no-repeat bg-top"></div>

//   {/* Content */}
//   <ul className="relative z-10 max-w-md mx-auto place-items-start gap-6 py-20">
//     {sortedPosts.map((post) => (
//       <li
//         key={post.slug}
//         className="w-full grid grid-cols-4 mb-2 border border-brand-base/50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
//       >
       
//         <div className="col-span-3">
        
//         <AnimateOnHover>
//           <Link href={`/resources/${post.slug}`} className="text-brand-base inline-block col-span-3">
//             <p className="text-sm text-gray-500">
//               {formatDate(post.date)}
//             </p>
//             <p className="text-3xl font-semibold py-3 text-shadow-md">
//               {post.title}
//             </p>
//             <p className="italic">
//               {post.subtext}
//             </p>
//           </Link>
//         </AnimateOnHover>
//         </div>
        
//         <div className='col-span-1 place-items-end place-content-center'>
//           <AnimateOnHover customVariants={showOnHover}>
//         <MdOutlineArrowRightAlt size={28} />
//         </AnimateOnHover>
//         </div>
        
//       </li>
//     ))}
//   </ul>
// </div>
//   );
// }

// export default ResourcesList;

'use client';

import Link from 'next/link';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion, Variants } from "framer-motion";
import AnimateOnHover from './AnimateOnHover';
import Page from '@/app/page';
import PageHeading from './ui/PageHeading';

function formatDate(dateString: string | null) {
  if (!dateString) return null;
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

type Post = {
  slug: string;
  title: string;
  subtext: string;
  date: string | null;
  keywords: string[];
};

const arrowVariants: Variants = {
  rest: { opacity: 0, x: -6 },
  hover: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
  },
};

const ResourcesList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const sortedPosts = [...posts].sort((a, b) => {
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/images/Hero9.png')] bg-cover bg-no-repeat bg-top" />
        <PageHeading heading="Resources" extraClassName='relative z-10 pt-10 text-white  font-[bungee]'/>
      {/* Content */}
      <ul className="relative z-10 max-w-md mx-auto grid gap-6 py-20 lg:ml-120">
        {sortedPosts.map((post) => (
        
          <motion.li
            key={post.slug}
            className="w-full grid grid-cols-4 mb-2 border border-brand-base/50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm"
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
              
            <div className="col-span-3"><AnimateOnHover>
              <Link href={`/resources/${post.slug}`} className="text-brand-base inline-block">
                <p className="text-sm text-gray-500">{formatDate(post.date)}</p>
                <p className="text-3xl font-semibold py-3 text-shadow-md">{post.title}</p>
                <p className="italic">{post.subtext}</p>
              </Link>
                 </AnimateOnHover>
            </div>

            <div className="col-span-1 flex items-center justify-end">
              <motion.div variants={arrowVariants}>
                <MdOutlineArrowRightAlt size={28} />
              </motion.div>
            </div>
         
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesList;
