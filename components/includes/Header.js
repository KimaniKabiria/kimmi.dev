import React, { Fragment, useEffect, useRef, useState } from "react"
import Link from "next/link";
import Image from 'next/image'
import { LockOpenIcon, ChevronDownIcon, BriefcaseIcon, InformationCircleIcon } from "@heroicons/react/outline"
import { Menu, Dialog, Transition } from '@headlessui/react'

import Logo from "../../assets/images/logo.png"
import LogoWhite from "../../assets/images/logo-white.png"
import LogoSVG from "../../assets/images/logo.svg"
import LogoWhiteSVG from "../../assets/images/logo-white.svg"

import ContactDialog from "./ContactDialog";

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="17"
    fill="none"
    viewBox="0 0 25 24"
    className="dark:opacity-50"
  >
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      clipPath="url(#clip0_192_823)"
    >
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
    </g>
    <defs>
      <clipPath id="clip0_192_823">
        <path
          className="fill-current text-white"
          d="M0 0H24V24H0z"
          transform="translate(.5)"
        ></path>
      </clipPath>
    </defs>
  </svg>
);

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="17"
    fill="none"
    viewBox="0 0 21 20"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="stroke-current text-gray-400 dark:text-white"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    ></path>
  </svg>
);

const ThemeSwitcher = () => {
  return (
    <div className="flex w-1/2 lg:w-28 lg:h-10 bg-white justify-center dark:bg-gray-900 rounded-2xl p-1">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center pr-2 dark:bg-kimmi-teal rounded-2xl justify-center align-center p-2 w-16 transition"
      >
        {moonIcon}
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }}
        className="flex items-center pr-2 bg-kimmi-teal dark:bg-transparent rounded-2xl justify-center align-center p-2 w-16 transition"
      >
        {sunIcon}
      </button>
    </div>
  );
};

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Header() {
 const [animateHeader, setAnimateHeader] = useState(false)
 const [isExpanded, toggleExpansion] = useState(false)
 
 useEffect(() => {
   const listener = () => {
    if (window.scrollY > 140) {
      setAnimateHeader(true);
    } else setAnimateHeader(false);
   };
   window.addEventListener("scroll", listener);
   return () => {
     window.removeEventListener("scroll", listener);
   };
 }, []);
 const menuItems = [
   { title: "About Me", url: "#" },
   { title: "My Works", url: "#" },
 ];
return (
 <header className={`w-full sticky flex z-40 top-0 trasition ease-in-out duration-500 ${animateHeader && "lg:px-8"}`}>
      {/* <div className="mx-auto "> */}
        <div className={`flex w-full py-6 lg:px-12 rounded-2xl justify-between items-start lg:items-center backdrop-filter backdrop-blur-lg ${animateHeader && "py-2 bg-white/10 dark:bg-black/10 border-2 border-kimmi-teal/10 m-2"} mx-auto px-8 trasition ease-in-out duration-500`}>
                
          <div className="flex h-12 lg:hidden">
              <button
                onClick={() => toggleExpansion(!isExpanded)}
                className="flex items-center px-3 py-2 text-taran-orange border border-taran-blue rounded hover:text-taran-orange hover:border-white"
              >
                <svg
                  className="w-3 h-3 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
          </div>

          <div className="flex flex-col lg:flex-row mx-auto w-full items-center lg:px-4">          
            <div className="inline-flex lg:flex justify-start mx-auto">
              <div className={`flex-shrink w-48 ${animateHeader && "w-40"} flex`}>
                <Link href="\" passHref>
                  <div className="dark:hidden block">
                      <Image
                        className=""
                        src={LogoSVG}
                        alt="Logo"
                        width= {460}
                        height={100}
                      />
                    </div>
                  </Link>
                <Link href="\" passHref>
                    <div className="hidden dark:block">
                      <Image
                        className=""
                        src={LogoWhiteSVG}
                        alt="Logo"
                        width= {460}
                        height={100}
                      />
                    </div>
                  </Link>
                </div>
            </div>

            <div className={`${isExpanded ? `block` : `hidden`} w-full flex flex-grow lg:flex lg:items-center lg:w-auto mx-auto`}>
              <div className="flex w-full lg:justify-end mx-auto">
                
              </div>
              <div className="flex w-full mt-8 flex-col lg:flex-row lg:mt-0 lg:items-center lg:justify-end mx-auto  text-kimmi-teal">
                <nav>
                  <ul className="flex items-center justify-center">
                    {menuItems?.map((item) => (
                      <li key={item?.title}>
                        <Link href={item?.url}>
                          <a className="px-2 text-base font-medium border-b-2 border-transparent hover:border-kimmi-teal hover:text-kimmi-teal">
                            {item?.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div>
                  {/* <ContactDialog /> */}
                </div>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </header>
 );
}