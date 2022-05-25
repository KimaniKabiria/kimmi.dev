import React, {useEffect} from "react"
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import Layout, { GradientBackground } from '../components/includes/Layout';
import Hero from '../components/landing/Hero';
import AboutSection from "../components/landing/AboutSection";
import Services from "../components/landing/Services";
import WorkProcess from "../components/landing/WorkProcess";
import ArrowIcon from '../components/includes/ArrowIcon';
import { getGlobalData } from '../utils/global-data';

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.8 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Index({ posts, globalData }) {
  
  return (
    <Layout globalData={globalData}>
        <Hero />

        <AboutSection />
        
        {/* About Me Section */}
        {/* <FadeInWhenVisible>
          <div className='py-20 lg:-mx-20 -mx-8 my-12 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10'>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <h1 className="lg:text-3xl text-2xl text-center px-8 py-4">
                Hi there, I am <span className='underline font-medium text-kimmi-teal'>Kimani Kabiria</span>, Nice to meet you
              </h1>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <h4 className='text-xl text-center px-8 font-light'>I design and code beautifully simple things, and I love what I do.</h4>
            </motion.div>
              <div className='p-6'>
                <div className='lg:w-1/3 mx-auto'></div>
                <div className='lg:w-1/3 mx-auto'>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className='text-center'>
                      Since beginning my journey as a freelance designer and software developer nearly 10 years ago, I've done remote work for agencies, consulted for startups and organizations, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time.
                    </p>
                  </motion.div>
                </div>
                <div className='lg:w-1/3 mx-auto'></div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <p className='text-center uppercase text-kimmi-teal text-2xl font-bold mt-8 px-8'>
                  I will help you bring your ideas to life!
                </p>
              </motion.div>
        </div>
        </FadeInWhenVisible> */}

        <Services />

        <WorkProcess />

        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
