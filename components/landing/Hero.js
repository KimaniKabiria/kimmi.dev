import React from "react"
import Image from 'next/image'

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
            <div className="flex lg:w-1/2 lg:py-20 py-8 text-center lg:text-left">
                <div className="w-full">
                <h1 className="lg:text-5xl text-4xl">Hi there,</h1>
                <h1 className="lg:text-4xl text-2xl mt-4">Let's Build something awesome that lives on the internet</h1>
                </div>
            </div>
        </div>
    )
}