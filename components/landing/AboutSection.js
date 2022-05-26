import React, { useEffect, useState } from "react"
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "../includes/RainbowHighlight"

import AboutSVG from "../../assets/images/about.svg"


const Emoji = props => (
    <span
        className="emoji mr-4"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default function AboutSection(){
    const x = useMotionValue(200)
    const y = useMotionValue(200)

    const rotateX = useTransform(y, [0, 400], [45, -45])
    const rotateY = useTransform(x, [0, 400], [-45, 45])

 
    function handleMouse(event) {
        const rect = event.currentTarget.getBoundingClientRect();

        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
    }
    
    const colors = ["#009193", "#84CC16", "#10B981", "#3B82F6"];

    return(       
        <div className='py-20 lg:px-40 px-12 lg:-mx-20 -mx-8 my-12 bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-30 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10'>
            
                <h1 className="lg:text-3xl text-2xl text-center px-8 py-4">
                    Hi there, I am&nbsp;
                    <RainbowHighlight color={colors[2]}>Kimani Kabiria</RainbowHighlight> 
                    &nbsp;Nice to meet you
                </h1>
            <div className="flex flex-col lg:flex-row w-full items-center justify-center text-center">
                <div className="flex flex-col mx-auto p-4">
                    <RainbowHighlight color={colors[1]}>
                        <h1 className="lg:text-7xl text-2xl font-semibold">designer</h1>
                    </RainbowHighlight>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="p-4">Product designer specialising in UI design and design systems</p>
                    </motion.div>
                </div>
                <div className="flex" onMouseMove={handleMouse} >
                    <motion.div
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                        className="flex lg:p-8 justify-center items-center"
                    >
                        <div className="flex w-xl">
                            <Image
                            className=""
                            src={AboutSVG}
                            alt="AboutSVG"
                            />
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col mx-auto p-4">
                    <RainbowHighlight color={colors[3]}>
                        <h1 className="lg:text-7xl text-2xl font-semibold">&#60;coder&#62;</h1>
                    </RainbowHighlight>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                    >
                        <p className="p-4">Full-Stack developer who writes clean, elegant and efficient code</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}