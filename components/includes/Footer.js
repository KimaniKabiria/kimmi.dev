import Image from 'next/image'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'
import { SiAdobexd, SiAdobeillustrator, SiAdobephotoshop, SiReact, SiJavascript, SiTailwindcss, SiVuedotjs, SiNextdotjs, SiFlutter, SiPhp, SiPython, SiKotlin, SiSwift, SiMysql, SiPostgresql, SiLaravel, SiDjango } from "react-icons/si";
import ContactDialog from './ContactDialog';

import Phone from "../../assets/images/phone.svg"

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

export default function Footer({ copyrightText }) {
  return (
    <footer className="pt-16 w-full flex flex-col items-center mx-auto">
      <div className='flex flex-col w-5/6 p-8 lg:p-12 lg:mx-20 items-center justify-center text-center bg-black/10 dark:bg-white/10 rounded-2xl'>
        <h1 className='text-sm underline font-semibold'>Not Your Average Designer / Developer</h1>
        <div className='flex lg:flex-row flex-col p-4 lg:p-8 items-center'>
          <div className='flex flex-col text-left'>
            <h1 className='lg:text-5xl text-2xl font-semibold'>Where do we start?</h1>
            <p className='text-base lg:p-4'>Schedule a call so I can learn about your product and we can discuss the best way to help you meet your goals.</p>
            <div className='p-4'>
              <ContactDialog />
            </div>
          </div>
          <div className='flex'>
            <div className="flex w-xl">
                <Image
                className=""
                src={Phone}
                alt="Phone"
                />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col text-base mx-auto px-4 pt-8 lg:pt-12'>
        <p className='text-center'>This website was handcrafted with plenty cups of ☕</p>
        <p className='text-center'>by <span className='font-semibold'>Kimani Kabiria</span> using:</p>
        <div className='flex flex-row mx-auto py-2'>
          <SiTailwindcss className="w-12 h-12 p-2" size='fa-2x' /> 
          <SiNextdotjs className="w-12 h-12 p-2" size='fa-2x' /> 
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-2 items-center">
        <div className='flex flex-row m-4'>
          <div className='inline-block w-6 h-6 mx-4'>
              <a href="https://twitter.com/kimmi_dev">
              <FaTwitter size='fa-2x' />
              </a>
          </div>
          <div className='inline-block w-6 h-6 mx-4'>
              <a href="https://www.facebook.com/kimanikabiria/">
              <FaFacebook size='fa-2x' />
              </a>
          </div>
          <div className='inline-block w-6 h-6 mx-4'>
              <a href="https://www.instagram.com/kimani.kabiria/">
              <FaInstagram size='fa-2x' />
              </a>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
      <div className='text-center text-sm'>
        <p className="dark:text-white mb-3 font-bold opacity-60">
          © {new Date().getFullYear()}, kimmi.dev, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
