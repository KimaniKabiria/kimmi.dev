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
import ProductFeatures from "../components/landing/ProductFeatures";
import ArrowIcon from '../components/includes/ArrowIcon';
import { getGlobalData } from '../utils/global-data';

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
        
        <ProductFeatures />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
