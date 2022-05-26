import React, {useEffect} from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import { MdDraw} from 'react-icons/md'
import { GiNotebook } from "react-icons/gi";
import { AiTwotoneCode } from "react-icons/ai";
import { HiLightBulb } from "react-icons/hi"
import{ FaShapes } from "react-icons/fa"


export default function WorkProcess(){
    return(
        <div className="flex flex-col items-center justify-center py-12">
            <div className="w-full py-4 text-center">
                <h1 className="font-semibold text-2xl"> How I Work!</h1>
                <p className="text-base"> my process to build awesone things</p>
            </div>
            <div className="w-full lg:grid grid-cols-5">
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-48 m-8 h-52 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-kimmi-teal/30 dark:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10 shadow-lg shadow-black/30 dark:shadow-white/20 hover:shadow-md dark:hover:shadow-md">
                        <div className="flex w-16 justify-end items-end bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-kimmi-teal dark:hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <HiLightBulb className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-base font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>
                            Discover</RoughNotation>
                            </h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I conduct user research to identify the problem I want to solve.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-48 m-8 h-52 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-kimmi-teal/30 dark:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10 shadow-lg shadow-black/30 dark:shadow-white/20 hover:shadow-md dark:hover:shadow-md">
                        <div className="flex w-16 justify-end items-end bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-kimmi-teal dark:hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <GiNotebook className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-base font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Define</RoughNotation></h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I brainstorm possible solutions to the identified problem.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-48 m-8 h-52 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-kimmi-teal/30 dark:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10 shadow-lg shadow-black/30 dark:shadow-white/20 hover:shadow-md dark:hover:shadow-md">
                        <div className="flex w-16 justify-end items-end bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-kimmi-teal dark:hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <MdDraw className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-base font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Ideate</RoughNotation>
                                </h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I create wireframes and sketches of the product I’m about to create.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-48 m-8 h-52 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-kimmi-teal/30 dark:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10 shadow-lg shadow-black/30 dark:shadow-white/20 hover:shadow-md dark:hover:shadow-md">
                        <div className="flex w-16 justify-end items-end bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-kimmi-teal dark:hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <FaShapes className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-base font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Prototype</RoughNotation></h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I create high fidelity design and prototype the screens.</p>
                    </div>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="p-6 w-48 m-8 h-52 max-w-xs mx-auto rounded-xl backdrop-blur-lg bg-kimmi-teal/30 dark:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10 shadow-lg shadow-black/30 dark:shadow-white/20 hover:shadow-md dark:hover:shadow-md">
                        <div className="flex w-16 justify-end items-end bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-kimmi-teal dark:hover:bg-kimmi-teal rounded-lg -ml-8">  
                            <AiTwotoneCode className="w-10 h-10 py-2 pr-4 text-right" size='fa-2x' />
                        </div>
                        <h5 className="text-base font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">
                            <RoughNotation 
                                type="underline"
                                // show = {true}
                                padding={2}
                                animate={false}>Implement</RoughNotation></h5>
                        <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">Now I build, code and deliver for implementation.</p>
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}