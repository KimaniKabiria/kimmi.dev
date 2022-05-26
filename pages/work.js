import React, {useEffect} from "react"
import Link from 'next/link';
import Image from 'next/image'
import { getPosts } from '../utils/mdx-utils';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import Layout, { GradientBackground } from '../components/includes/Layout';
import { getGlobalData } from '../utils/global-data';
import { RainbowHighlight } from "../components/includes/RainbowHighlight";
import ArrowIcon from '../components/includes/ArrowIcon';

import { GrWordpress, GrInProgress} from 'react-icons/gr'
import { SiWoocommerce, SiAdobeillustrator , SiGhost, SiNextdotjs, SiTailwindcss, SiReact, SiPostgresql } from 'react-icons/si'
import { CgFigma } from "react-icons/cg";

import MojoLogo from "../assets/images/work/mojo_logo.png"
import MojoLogoW from "../assets/images/work/mojo_white_logo.png"
import MbLogo from "../assets/images/work/mb_logo.png"
import MbLogoW from "../assets/images/work/mb_white_logo.png"
import LogoSVG from "../assets/images/logo.svg"
import LogoWhiteSVG from "../assets/images/logo-white.svg"
import LegitLogo from "../assets/images/work/legit_logo.png"
import LegitLogoW from "../assets/images/work/legit_logo_white.png"


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
                    <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-red-100/30 dark:bg-red-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                        <div className="min-h-62 p-12">
                          <div className="block dark:hidden">
                            <Image
                            className=""
                            src={MojoLogo}
                            alt="MojoLogo"
                            />
                          </div>
                          <div className="hidden dark:block">
                            <Image
                            className=""
                            src={MojoLogoW}
                            alt="MojoLogoW"
                            />
                          </div>
                        </div>
                        <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">      
                        <RoughNotation
                            type='box'
                            padding={4}
                            multiline={true}
                        >01.</RoughNotation>
                        </h1>
                          <h2 className="font-bold text-xl mb-5">MojoChiq</h2>
                        <p className="text-sm leading-relaxed">
                            MojoChiq is online accessories store. I designed their online branding (Logo, Website and Socials). I built their website using wordpress and WooCommerce.
                        </p>
                        <div className="flex mt-6">
                          <CgFigma className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiAdobeillustrator className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <GrWordpress className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiWoocommerce className="w-24 pr-4 text-right -mt-4" size='fa-2x' />
                        </div>
                    </article>
                  </a>

                  <a href="https://themorningbeans.com">
                    <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-yellow-100/30 dark:bg-yellow-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                        <div className="min-h-62 p-12">
                          <div className="block dark:hidden">
                            <Image
                            className=""
                            src={MbLogo}
                            alt="MbLogo"
                            />
                          </div>
                          <div className="hidden dark:block">
                            <Image
                            className=""
                            src={MbLogoW}
                            alt="MbLogoW"
                            />
                          </div>
                        </div>
                          <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">      
                          <RoughNotation
                              type='box'
                              padding={4}
                              multiline={true}
                          >02.</RoughNotation>
                          </h1>
                            <h2 className="font-bold text-xl mb-5">The Morning Beans</h2>
                        <p className="text-sm leading-relaxed">
                            The Morning Beans is my personal tech blog / website. I built it to share my thought on anything tech. I designed the theme and branding of the project.
                        </p>
                          <div className="flex mt-6">
                            <CgFigma className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                            <SiAdobeillustrator className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                            <SiGhost className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          </div>
                    </article>
                  </a>

                  <a href="https://kimmi.dev">
                    <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-blue-300/20 dark:bg-blue-300/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer max-h-190 rounded-md">
                      <div className="min-h-62 p-12">
                        <div className="block dark:hidden">
                          <Image
                          className=""
                          src={LogoSVG}
                          alt="LogoSVG"
                          />
                        </div>
                        <div className="hidden dark:block">
                          <Image
                          className=""
                          src={LogoWhiteSVG}
                          alt="LogoWhiteSVG"
                          />
                        </div>
                      </div>
                        <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">      
                        <RoughNotation
                            type='box'
                            padding={4}
                            multiline={true}
                        >03.</RoughNotation>
                        </h1>
                        <h2 className="font-bold text-xl mb-5">kimmi.dev</h2>
                        <p className="text-sm leading-relaxed">
                            This is my personal protfolio, basically whay you have been looking at. It is my 2nd version of my profolio. Designed the glassmorphic UI and codded the font end.
                        </p>
                        <div className="flex mt-6">
                          <CgFigma className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiAdobeillustrator className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiNextdotjs className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiTailwindcss className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                    </article>
                  </a>

                  <a href="#">
                    <article className="flex flex-col shadow-xl mx-auto max-w-sm bg-purple-100/20 dark:bg-purple-100/10 py-20 px-12 transform duration-500 hover:-translate-y-2 cursor-pointer mt-0 md:mt-20 max-h-190 rounded-md">
                      
                      
                        <button className="flex rounded-md items-center justify-end w-full text-base text-center ml-16 -mb-4" type="button">
                            <p className="inline-flex items-center px-8 text-sm font-medium text-right bg-kimmi-teal rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-kimmi-teal dark:hover:bg-kimmi-teal">
                              <GrInProgress className="w-8 h-8 pr-4" size='fa-2x' /> On Going
                            </p>                       
                        </button>  
                        <div className="min-h-62 p-12">
                          <div className="block dark:hidden">
                            <Image
                            className=""
                            src={LegitLogo}
                            alt="LegitLogo"
                            />
                          </div>
                          <div className="hidden dark:block">
                            <Image
                            className=""
                            src={LegitLogoW}
                            alt="LegitLogoW"
                            />
                          </div>
                        </div>
                          <h1 className="font-extrabold text-6xl mb-10 text-kimmi-teal dark:text-white">      
                          <RoughNotation
                              type='box'
                              padding={4}
                              multiline={true}
                          >04.</RoughNotation>
                          </h1>
                          <h2 className="font-bold text-xl mb-5">Legit-ID</h2>
                        <p className="text-sm leading-relaxed">
                            Legit ID is a SaaS built to offer online identity verification. I am Designed and built the front-end. I an currently working on the back-end.
                        </p>
                        <div className="flex mt-6">
                          <CgFigma className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiAdobeillustrator className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiNextdotjs className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiTailwindcss className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiReact className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                          <SiPostgresql className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                    </article>
                  </a>
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
