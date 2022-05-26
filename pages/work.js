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
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
