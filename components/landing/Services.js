import React, { Fragment, useEffect, useRef, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { MdDesignServices} from 'react-icons/md'
import { XIcon } from "@heroicons/react/outline"
import { CgFigma } from "react-icons/cg";
import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiReact, SiJavascript, SiTailwindcss, SiVuedotjs, SiNextdotjs, SiFlutter, SiPhp, SiPython, SiKotlin, SiSwift, SiMysql, SiPostgresql, SiLaravel, SiDjango } from "react-icons/si";
import { HiOutlineDesktopComputer } from "react-icons/hi"
import{ BsCodeSquare } from "react-icons/bs"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import Design from "../../assets/images/design.svg"
import FrontEnd from "../../assets/images/front-end.svg"
import Code from "../../assets/images/about.svg"

export default function Services(){
  
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen2, setIsOpen2] = useState(false)
    let [isOpen3, setIsOpen3] = useState(false)
    
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function closeModal2() {
        setIsOpen2(false)
    }

    function openModal2() {
        setIsOpen2(true)
    }

    function closeModal3() {
        setIsOpen3(false)
    }

    function openModal3() {
        setIsOpen3(true)
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
          },
        },
      };
      const item = {
        hidden: { opacity: 0, x: -10 },
        show: { opacity: 1, x: 10 },
      };

      
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  

    return(       
        <div className="flex justify-center mx-auto lg:p-12 text-center text-base">
            <div className="lg:grid lg:grid-cols-3">
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="flex flex-col items-center justify-center p-6 max-w-sm rounded-xl backdrop-blur-lg bg-white/10 dark:bg-black/30 hover:bg-kimmi-teal/30 dark:hover:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10 transform lg:-skew-y-6 lg:hover:skew-y-0">
                        <div className="flex mx-auto w-full justify-center items-center">  
                        <MdDesignServices className="w-24 text-center h-24 p-2" size='fa-2x' />
                        </div>
                        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Design</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                        <button 
                            className="flex rounded-md items-center justify-end w-full py-2 text-base text-center ml-8 -mb-4"
                            type="button"
                            onClick={openModal}
                        >
                            <p className="inline-flex items-center py-2 px-12 text-sm font-medium text-center text-white bg-kimmi-teal rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-kimmi-teal dark:hover:bg-kimmi-teal">
                                Explore
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </p>                       
                        </button>  
                    
                            <Transition appear show={isOpen} as={Fragment}>
                            <Dialog
                            as="div"
                            className="fixed inset-0 z-50 overflow-y-auto"
                            onClose={closeModal}
                            >
                            <div className="min-h-screen px-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                <div className="fixed inset-0 bg-black/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150" aria-hidden="true" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                &#8203;
                                </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                <div className="inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-kimmi-teal/20 shadow-2xl rounded-2xl">
                                    <div>
                                        <div className="flex flex-row items-start w-full">
                                            <Dialog.Title as="h3" className="w-full p-2 lg:px-8">
                                                <h1 className="text-3xl font-black p-2">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={2}
                                                        animate={false}
                                                    >DESIGN</RoughNotation>
                                            </h1>
                                            </Dialog.Title>
                                            <button className='p-2 focus:outline-none' onClick={closeModal}>
                                                <XIcon className="block h-6 w-6"/>
                                            </button>
                                        </div>
                                        <div className="mt-2 dark:border-white">
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row flex-col px-6">
                                        <div className="flex flex-col lg:w-1/2">
                                            <div className="lg:px-20 py-6">
                                                <Image
                                                className=""
                                                src={Design}
                                                alt="Design"
                                                />
                                            </div>
                                            <p className="font-medium text-base">
                                            I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth.
                                            </p>
                                        </div>
                                        <div className="flex flex-col lg:w-1/2"> 
                                            <div className="">
                                                <h3 className="font-bold">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={8}
                                                        animate={false}
                                                    >Things I enjoy designing:</RoughNotation></h3>
                                                <p className="p-2 font-black">UI - UX - Web - Mobile - Apps - Logos</p>
                                            </div>
                                            <div className="">
                                                <h3 className="font-bold">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={10}
                                                        animate={false}
                                                    >My Design Tools</RoughNotation>
                                                    </h3>
                                                <div className="p-3 text-base">
                                                    <motion.ul variants={container} initial="hidden" animate="show">
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <CgFigma className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Figma
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiAdobexd className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Adobe XD
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiAdobeillustrator className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Adobe Illustrator
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiAdobephotoshop className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Adobe Photoshop
                                                    </motion.li>
                                                    </motion.ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Transition.Child>
                            </div>
                            </Dialog>
                        </Transition> 
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="flex flex-col items-center justify-center p-6 max-w-sm rounded-xl backdrop-blur-lg bg-white/10 dark:bg-black/30 hover:bg-kimmi-teal/30 dark:hover:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10">
                        <div className="flex mx-auto w-full justify-center items-center">  
                        <HiOutlineDesktopComputer className="w-24 text-center h-24 p-2" size='fa-2x' />
                        </div>
                        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Front-End</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                        <button 
                            className="flex rounded-md items-center justify-end w-full py-2 text-base text-center ml-8 -mb-4"
                            type="button"
                            onClick={openModal2}
                        >
                            <p className="inline-flex items-center py-2 px-12 text-sm font-medium text-center text-white bg-kimmi-teal rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-kimmi-teal dark:hover:bg-kimmi-teal">
                                Explore
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </p>                       
                        </button>  
                    
                            <Transition appear show={isOpen2} as={Fragment}>
                            <Dialog
                            as="div"
                            className="fixed inset-0 z-50 overflow-y-auto"
                            onClose={closeModal2}
                            >
                            <div className="min-h-screen px-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                <div className="fixed inset-0 bg-black/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150" aria-hidden="true" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                &#8203;
                                </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                <div className="inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-kimmi-teal/20 shadow-xl rounded-2xl">
                                    <div>
                                        <div className="flex flex-row items-start w-full">
                                            <Dialog.Title as="h3" className="w-full p-4">
                                                <h1 className="text-3xl font-black p-2">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={2}
                                                        animate={false}
                                                    >FRONT-END</RoughNotation></h1>
                                            </Dialog.Title>
                                            <button className='p-2 focus:outline-none' onClick={closeModal2}>
                                                <XIcon className="block h-6 w-6"/>
                                            </button>
                                        </div>
                                        <div className="mt-2 dark:border-white">
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row flex-col px-6">
                                        <div className="flex flex-col lg:w-1/2">
                                            <div className="lg:px-20 py-6">
                                                <Image
                                                className=""
                                                src={FrontEnd}
                                                alt="FrontEnd"
                                                />
                                            </div>
                                            <p className="font-medium text-base">
                                            I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.
                                            </p>
                                        </div>
                                        <div className="flex flex-col lg:w-1/2"> 
                                            <div className="">
                                                <h3 className="font-bold">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={8}
                                                        animate={false}
                                                    >Languages I speak:</RoughNotation></h3>
                                                <p className="p-3 font-black">HTML - JavaScript - JSX - CSS - Sass - Less</p>
                                            </div>
                                            <div className="">
                                                <h3 className="font-bold">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={10}
                                                        animate={false}
                                                    >My Design Tools</RoughNotation></h3>
                                                <div className="p-3 -ml-12 flex flex-col lg:flex-row">
                                                    <motion.ul variants={container} initial="hidden" animate="show" className="mx-auto">
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiReact className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        React
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiJavascript className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        JavaScript
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiTailwindcss className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Tailwind
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiVuedotjs className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Vue JS
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiNextdotjs className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Next.JS
                                                    </motion.li>
                                                    </motion.ul>
                                                    <motion.ul variants={container} initial="hidden" animate="show" className="mx-auto">
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiFlutter className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Flutter
                                                    </motion.li>
                                                    {/* <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiJavascript className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        JavaScript
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiTailwindcss className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Tailwind
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiVuedotjs className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Vue JS
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiNextdotjs className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Next.JS
                                                    </motion.li> */}
                                                    </motion.ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Transition.Child>
                            </div>
                            </Dialog>
                        </Transition> 
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.95 }}
                >
                    <div className="flex flex-col items-center justify-center p-6 max-w-sm rounded-xl backdrop-blur-lg bg-white/10 dark:bg-black/30 hover:bg-kimmi-teal/30 dark:hover:bg-kimmi-teal/20 transition border border-kimmi-teal dark:border-white border-opacity-10 dark:border-opacity-10 lg:transform lg:skew-y-6 lg:hover:skew-y-0">
                        <div className="flex mx-auto w-full justify-center items-center">  
                        <BsCodeSquare className="w-24 text-center h-24 p-2" size='fa-2x' />
                        </div>
                        <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Back-End</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">I am passionate about building excellent things that improves the lives of everyone.</p>
                        <button 
                            className="flex rounded-md items-center justify-end w-full py-2 text-base text-center ml-8 -mb-4"
                            type="button"
                            onClick={openModal3}
                        >
                            <p className="inline-flex items-center py-2 px-12 text-sm font-medium text-center text-white bg-kimmi-teal rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-kimmi-teal dark:hover:bg-kimmi-teal">
                                Explore
                                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path></svg>
                            </p>                       
                        </button>  
                    
                            <Transition appear show={isOpen3} as={Fragment}>
                            <Dialog
                            as="div"
                            className="fixed inset-0 z-50 overflow-y-auto"
                            onClose={closeModal}
                            >
                            <div className="min-h-screen px-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                <div className="fixed inset-0 bg-black/20 backdrop-filter backdrop-blur-lg backdrop-saturate-150" aria-hidden="true" />
                                </Transition.Child>

                                {/* This element is to trick the browser into centering the modal contents. */}
                                <span
                                    className="inline-block h-screen align-middle"
                                    aria-hidden="true"
                                >
                                &#8203;
                                </span>
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                <div className="inline-block w-full max-w-5xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-kimmi-teal/20 shadow-xl rounded-2xl">
                                    <div>
                                        <div className="flex flex-row items-start w-full">
                                            <Dialog.Title as="h3" className="w-full p-2">
                                                <h1 className="text-3xl font-black p-4">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={2}
                                                        animate={false}
                                                    >BACK-END</RoughNotation></h1>
                                            </Dialog.Title>
                                            <button className='p-2 focus:outline-none' onClick={closeModal3}>
                                                <XIcon className="block h-6 w-6"/>
                                            </button>
                                        </div>
                                        <div className="mt-2 dark:border-white">
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row flex-col px-6">
                                        <div className="flex flex-col lg:w-1/2">
                                            <div className="lg:px-20 py-6">
                                                <Image
                                                className=""
                                                src={Code}
                                                alt="Code"
                                                />
                                            </div>
                                            <p className="font-medium text-base">I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
                                            </p>
                                        </div>
                                        <div className="flex flex-col lg:w-1/2"> 
                                            <div className="">
                                                <h3 className="font-bold">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={8}
                                                        animate={false}
                                                    >Things I enjoy building:</RoughNotation></h3>
                                                <p className="p-2 font-black">Full Stack applications - Websites & Web apps - Mobile Apps - APIs</p>
                                            </div>
                                            <div className="">
                                                <h3 className="font-bold">
                                                    <RoughNotation 
                                                        type="underline"
                                                        // show = {true}
                                                        padding={10}
                                                        animate={false}
                                                    >My ToolBox</RoughNotation></h3>
                                                <div className="p-3 -ml-12 flex flex-col lg:flex-row">
                                                    <motion.ul variants={container} initial="hidden" animate="show" className="mx-auto">
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiPhp className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        PHP
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiPython className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Python
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiKotlin className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Kotlin
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiSwift className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Swift
                                                    </motion.li>
                                                    </motion.ul>
                                                    <motion.ul variants={container} initial="hidden" animate="show" className="mx-auto">
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiMysql className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        MySQL
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiPostgresql className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Postgre Sql
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiLaravel className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Laravel
                                                    </motion.li>
                                                    <motion.li variants={item} className="flex flex-row items-center">
                                                        <SiDjango className="w-12 h-12 p-2" size='fa-2x' /> 
                                                        Django
                                                    </motion.li>
                                                    </motion.ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Transition.Child>
                            </div>
                            </Dialog>
                        </Transition> 
                    </div>
                </motion.div>
            </div>
        </div>
    )
}