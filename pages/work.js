import React, {useEffect} from "react"
import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import Layout, { GradientBackground } from '../components/includes/Layout';
import Hero from '../components/landing/Hero';
import { getGlobalData } from '../utils/global-data';
import { RainbowHighlight } from "../components/includes/RainbowHighlight";
import ArrowIcon from '../components/includes/ArrowIcon';


export default function Work({ posts, globalData }) {

    const colors = ["#009193", "#84CC16", "#10B981", "#3B82F6"];
  
  return (
    <Layout globalData={globalData}>
        <div className="flex flex-col p-8 lg:p-20 justify-center items-center mx-auto max-w-2xl text-center">                
            <RainbowHighlight color={colors[3]}>
                <h1 className="text-3xl lg:text-5xl font-semibold p-4">/work.</h1>
            </RainbowHighlight>
            <p className="text-base p-2 lg:text-md lg:p-4">I&apos;ve worked at start-ups, tech companies and corporates on a range of different projects, including design systems, websites and apps.</p>
        </div>

        <div className="flex flex-col lg:px-20">
          <div className="flex flex-col mx-auto justify-center items-center">
            <h2 className="text-2xl lg:text-3xl font-medium">
                <RoughNotation
                    type='underline'
                    padding={4}
                    color="#008080"
                    iterations={3}
                    multiline={true}
                >Key Projects</RoughNotation>
              </h2>
            <p className="text-base p-2 lg:text-md lg:p-4">Here are some of my key projects I have worked on or Currently worked on.</p>
          </div>
          <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0">
              <section className="grid lg:grid-cols-2 2xl:grid-cols-4 grid-cols-1 gap-10 antialiased">
                  
                  <a href="https://mojochiq.com">
                    <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100/30 dark:bg-red-100/20 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                        <div className="min-h-62">
                            {/* <img className="mx-auto" src="https://demo.happyaddons.com/wp-content/uploads/2019/05/card-image13a.png" alt="" /> */}
                        </div>
                        <h1 className="font-extrabold text-6xl mt-28 mb-10 text-kimmi-teal dark:text-white">      
                        <RoughNotation
                            type='box'
                            padding={4}
                            multiline={true}
                        >01.</RoughNotation>
                        </h1>
                          <h2 className="font-bold text-xl mb-5">MojoChiq</h2>
                        <p className="text-sm leading-relaxed">
                            MojoChiq is online jewelry store. I designed their online branding (Logo, Website and Socials). I built their website using wordpress and WooCommerce.
                        </p>
                    </article>
                  </a>

                  <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                      <div className="min-h-62">
                          {/* <img className="mx-auto" src="https://www.dropbox.com/s/8wcoj21a4vxbk7s/tl.png?dl=1" alt="" /> */}
                      </div>
                      <h1 className="font-extrabold text-6xl mt-28 mb-10">02.</h1>
                      <h2 className="font-bold mb-5">Stylish Leather Bag</h2>
                      <p className="text-sm leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                      </p>
                  </article>

                  <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                      <div className="min-h-62">
                          {/* <img className="mx-auto" src="https://www.dropbox.com/s/3e0m3ttp2tdi1ly/chair.png?dl=1" alt="" /> */}
                      </div>
                      <h1 className="font-extrabold text-6xl mt-28 mb-10">03.</h1>
                      <h2 className="font-bold mb-5">Modern Wooden Chair</h2>
                      <p className="text-sm leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                      </p>
                  </article>

                  <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                      <div className="min-h-62">
                          {/* <img className="mx-auto" src="https://www.dropbox.com/s/lllrkvwvfn97piz/toppng.com-furniture-1200x957.png?dl=1" alt="" /> */}
                      </div>
                      <h1 className="font-extrabold text-6xl mt-28 mb-10">04.</h1>
                      <h2 className="font-bold mb-5">Comfortable Chair</h2>
                      <p className="text-sm leading-relaxed">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id beatae repellendus nam! Dolor dignissimos unde, dolore laboriosam atque numquam quam.
                      </p>
                  </article>
              </section>
          </section>
        </div>

        
        {/* <div className="flex lg:px-12">
          <ul className="w-full  lg:grid grid-cols-3 gap-5">
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
        </div> */}

    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
