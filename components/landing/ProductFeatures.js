import React, {useEffect} from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Typewriter from 'typewriter-effect'

import { CgWebsite} from 'react-icons/cg'
import { GiMagnifyingGlass, GiDrippingTube } from "react-icons/gi";
import { RiFlowChart } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi"
import{ MdOutlineDesignServices, MdOutlineSupportAgent } from "react-icons/md"

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

export default function ProductFeatures(){
    return(
        <FadeInWhenVisible>
            <div className="flex flex-col items-center justify-center py-12 lg:mx-8 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
                <div className="w-full py-4 px-4 text-center">
                    <h1 className="font-bold text-2xl lg:text-5xl">
                        <Typewriter			
                            options={{
                                loop: true,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(500)
                                    .typeString("Everything you need for a <strong><u>perfect product</u></strong>")
                                    .pauseFor(3000)
                                    .deleteChars(41)
                                    .start();
                            }}
                        />
                    </h1>
                </div>
                <div className="w-full lg:grid grid-cols-3 gap-5">
                    
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                    >
                        <div className="pt-12 px-6 flex flex-col lg:flex-row w-full">
                            <div className="flex w-16 justify-end items-center">  
                                <GiMagnifyingGlass className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">Review</h5>
                                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I make sure your current product is performing its best by thoroughly reviewing it before making any changes.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                    >
                        <div className="pt-12 px-6 flex flex-col lg:flex-row w-full">
                            <div className="flex w-16 justify-end items-center">  
                                <RiFlowChart className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">Business Strategy</h5>
                                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">We discuss what you are trying to achieve, and place goals on your website planning how to achieve that.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                    >
                        <div className="pt-12 px-6 flex flex-col lg:flex-row w-full">
                            <div className="flex w-16 justify-end items-center">  
                                <MdOutlineDesignServices className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">User Experience Design</h5>
                                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I design your product to be as easy to use as possible while guiding users towards the end goal.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                    >
                        <div className="pt-12 px-6 flex flex-col lg:flex-row w-full">
                            <div className="flex w-16 justify-end items-center">  
                                <CgWebsite className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">Tailored Development</h5>
                                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I build with your goals in mind, I turn your ideas into a ready market product.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                    >
                        <div className="pt-12 px-6 flex flex-col lg:flex-row w-full">
                            <div className="flex w-16 justify-end items-center">  
                                <GiDrippingTube className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">Rigorous Testing
</h5>
                                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">I ensure your product is of excellent quality by thoroughly testing using multiple approaches.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                    >
                        <div className="pt-12 px-6 flex flex-col lg:flex-row w-full">
                            <div className="flex w-16 justify-end items-center">  
                                <MdOutlineSupportAgent className="w-16 h-16 py-2 pr-4 text-right" size='fa-2x' />
                            </div>
                            <div>
                                <h5 className="text-2xl font-bold py-2 tracking-tight text-gray-900 dark:text-gray-300">Ongoing Support
</h5>
                                <p className="mb-3 text-sm font-normal text-gray-700 dark:text-white">Your product is always growing. Whether you’re adding new features or making improvements I’m here to help.</p>
                            </div>
                        </div>
                    </motion.div>
                    
                </div>
            </div>
        </FadeInWhenVisible>
    )
}