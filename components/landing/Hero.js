import React, { useEffect, useState } from "react"
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaChevronDown} from 'react-icons/fa'

import HeroImg from "../../assets/images/hero.svg"
import AnimatedText from "../includes/AnimatedText"

import ContactDialog from "../includes/ContactDialog"

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

export default function Hero(){

    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
        { type: "heading1", text: "Hello," }
    ];

    const container = {
        visible: {
        transition: {
            staggerChildren: 0.025
        }
        }
    };

    // Quick and dirt for the example
    const handleReplay = () => {
        setReplay(!replay);
        setTimeout(() => {
        setReplay(true);
        }, 300);
    };
    return(
        <div className="flex flex-col lg:flex-row lg:mt-0 px-4 lg:px-12 2xl:px-32 2xl:mt-20 lg:pb-20 overflow-hidden">
            <div className="flex lg:w1/3">
            <motion.div
            whileHover={{ scale: 1.05 }}
            >
                <div className="lg:w-xl lg:my-12 lg:px-12">
                    <Image
                    className=""
                    src={HeroImg}
                    alt="HeroImg"
                    />
                </div>
            </motion.div>
            </div>
            <div className="flex flex-col lg:w-5/6 py-8 text-center lg:text-left">
                <div className="w-full">
                    <h1 className="lg:text-3xl lg:mx-0 mx-12 text-xl font-bold">
                        <motion.div
                        className="flex flex-row"
                        initial="hidden"
                        // animate="visible"
                        animate={replay ? "visible" : "hidden"}
                        variants={container}
                        whileHover={handleReplay}
                        >
                        <Emoji symbol="👋" label="sheep"/>
                        <div className="flex dark:text-white">
                            {placeholderText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                            })}
                        </div>
                        </motion.div>
                    </h1>
                    {/* <h1 className="lg:text-5xl text-4xl font-bold">Hello,</h1> */}
                    <h1 className="lg:text-6xl h-64 lg:h-72 text-4xl font-semibold mt-4">
                        <Typewriter			
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500)
                                    .typeString("Let's <strong><u>Build</u></strong> something <strong><u>awesome</u></strong> that works")
                                    .pauseFor(500)
                                    .deleteChars(5)
                                    .typeString("<strong><u>lives</u></strong> on the <strong><u>internet</u></strong>.")
                                    .pauseFor(3000)
                                    .deleteChars(57)
                                    .start();
                            }}
                        />
                    </h1>
                </div>
                <div className="flex justify-center lg:justify-end lg:mt-12">
                    <ContactDialog />
                </div>
            </div>
        </div>
    )
}