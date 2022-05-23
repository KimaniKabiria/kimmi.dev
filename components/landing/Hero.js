import React, {useEffect} from "react"
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaChevronDown} from 'react-icons/fa'

import HeroImg from "../../assets/images/hero.svg"

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

export default function Hero(){
    return(
        <FadeInWhenVisible>
            <div className="flex flex-col lg:flex-row lg:px-12 pb-20">
                <div className="flex lg:w1/2">
                    <div className="lg:px-12">
                        <Image
                        className=""
                        src={HeroImg}
                        alt="HeroImg"
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:w-1/2 lg:py-20 py-8 text-center lg:text-left">
                    <div className="w-full h-44 lg:h-64">
                        <h1 className="lg:text-5xl text-4xl font-bold">Hello,</h1>
                        <h1 className="lg:text-4xl text-2xl font-semibold mt-4">
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
                    <motion.div 
                        whileHover={{ 
                        scale: 1.10, 
                        }} 
                        transition={{
                            ease: 'easeOut',
                            duration: 0.35,
                        }}
                        className="flex justify-center items-center"
                    > 
                        <button className="mx-auto my-6 rounded-xl py-3 px-12 font-extrabold uppercase text-gray-700 dark:text-white bg-gradient-to-r from-blue-400 to-emerald-400 bg-opacity-50 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-cyan-400 hover:border hover:border-white">
                                <div className="flex flex-row text-center items-center JU]">
                                    <p className="w-full">START HERE</p>                               
                                    <FaChevronDown className="w-12 text-center h-6" size='fa-2x' />
                                </div>
                        </button>
                    </motion.div>
                </div>
            </div>
        </FadeInWhenVisible>
    )
}