import React, {useEffect} from "react"
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import Layout, { GradientBackground } from '../components/includes/Layout';
import Hero from '../components/landing/Hero';
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


export default function Work({ posts, globalData }) {
  
  return (
    <Layout globalData={globalData}>
        <FadeInWhenVisible>
            <div className="flex flex-col justify-center items-center mx-auto max-w-2xl text-center">
                <h1 className="text-3xl lg:text-5xl font-semibold p-4">/work.</h1>
                <p className="text-xl">I&apos;ve worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.</p>
            </div>
        </FadeInWhenVisible>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
