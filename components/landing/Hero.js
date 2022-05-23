import React from "react"
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { motion, useAnimation } from "framer-motion"

import HeroImg from "../../assets/images/hero.svg"

export default function Hero(){
    return(
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
                    <h1 className="lg:text-5xl text-4xl font-bold">Hi there,</h1>
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
                <button className="mx-auto my-6 rounded-xl py-3 px-12 font-extrabold uppercase text-gray-700 dark:text-white bg-gradient-to-r from-blue-400 to-emerald-400 bg-opacity-50 hover:bg-gradient-to-r hover:from-cyan-200 hover:to-cyan-400 hover:border hover:border-white">
                    Start Here !
                </button>
            </div>
        </div>
    )
}