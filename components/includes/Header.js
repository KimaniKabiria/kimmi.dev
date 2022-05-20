import { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image'

import Logo from "../../assets/images/logo.png"
import LogoWhite from "../../assets/images/logo-white.png"

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
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
    width="21"
    height="20"
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
    <div className="flex bg-white justify-center dark:bg-gray-900 rounded-2xl p-1">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }}
        className="flex items-center pr-2 dark:bg-primary rounded-2xl justify-center align-center p-2 w-16 transition"
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
        className="flex items-center pr-2 bg-primary dark:bg-transparent rounded-2xl justify-center align-center p-2 w-16 h-10 transition"
      >
        {sunIcon}
      </button>
    </div>
  );
};

const LogoSwitch = () => {
  return (
    <div>
      <div className="dark:hidden block">
        <Image
          className=""
          src={Logo}
          alt="Logo"
          width= {230}
          height={50}
        />
      </div>
      <div className="hidden dark:block">
        <Image
          className=""
          src={LogoWhite}
          alt="Logo"
          width= {230}
          height={50}
        />
      </div>
    </div>
  )
}

export default function Header() {
 const [animateHeader, setAnimateHeader] = useState(false);
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
   { title: "Home", url: "https://themeptation.net" },
   { title: "Products", url: "https://themeptation.net" },
   { title: "Contact", url: "https://themeptation.net" }
 ];
return (
 <header className={`w-full backdrop-filter backdrop-blur-lg bg-white/10 dark:bg-black/10 sticky flex z-40 top-0 trasition ease-in-out duration-500 ${animateHeader && "shadow-xl"}`}>
      {/* <div className="mx-auto "> */}
        <div className={`flex w-full py-6 ${animateHeader && "py-2"} mx-auto items-center px-8 trasition ease-in-out duration-500`}>
          <div className="flex justify-start mx-auto">
            <a href="#" className="text-xl font-bold tracking-tighter text-indigo-400 pr-8">
              <LogoSwitch />
            </a>
          </div>
          <div className="mx-auto">
            {/* <nav>
              <ul className="flex items-center justify-start">
                {menuItems?.map((item) => (
                  <li key={item?.title}>
                    <Link href={item?.url}>
                      <a className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-indigo-400 leading-[22px] md:px-3 text-gray-400 hover:text-indigo-500">
                        {item?.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav> */}
          </div>
          <div className="flex justify-end mx-auto">
            <ThemeSwitcher />
          </div>
        </div>
      {/* </div> */}
    </header>
 );
}