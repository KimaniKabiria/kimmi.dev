import React, { Fragment, useEffect, useRef, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { LockOpenIcon, ChevronDownIcon, BriefcaseIcon, InformationCircleIcon, XIcon } from "@heroicons/react/outline"
import PropTypes from "prop-types";
import Link from 'next/link'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";


function ContactDialog() {
  
    let [isOpen, setIsOpen] = useState(false)
    
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }
    

  return (
    <>
      <button 
            className="group flex items-center px-12 py-2 text-xl"
            type="button"
            onClick={openModal}
        >
            <RoughNotation 
                type="circle"
                show = {true}
                animate = {true}
                color="#009193"
            >
                <p className="p-4 font-extrabold">Let&apos;s Build</p>
            </RoughNotation>                       
        </button>  
    
            <Transition appear show={isOpen} as={Fragment}>
            <Dialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto"
            onClose={closeModal}
            >
            <div className="min-h-screen px-4 text-center text-white">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
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
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-kimmi-teal/40  backdrop-filter backdrop-blur-lg backdrop-saturate-150 shadow-xl rounded-2xl">
                    <div>
                        <div className="flex flex-row items-start w-full">
                            <Dialog.Title as="h3" className="w-full p-2 text-2xl font-bold leading-6 text-center">
                                Talk to Me.
                            </Dialog.Title>
                            <button className='p-2 focus:outline-none' onClick={closeModal}>
                                <XIcon className="block h-6 w-6"/>
                            </button>
                        </div>
                        <div className="mt-2 border-t-2 border-white">
                            <p className="p-2 text-sm text-white text-center">
                                Let&apos;s build domething that will live on the internet.
                            </p>
                        </div>
                    </div>
                    
                    <form className="w-full p-4 lg:px-8" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
                        <input type="hidden" name="form-name" value="contact" />
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full mb-4 lg:mb-0 px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Full Names
                            </label>
                            <input className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight focus:outline-none" id="fullName" type="text" placeholder="Jane" onChange={handleChange} />
                            </div>
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                E-mail
                            </label>
                            <input className="appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight" id="email" type="email" placeholder="jane@example.com" />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                                Message
                            </label>
                            <textarea className="no-resize resize-y appearance-none block w-full rounded py-3 px-4 mb-3 leading-tight h-12 lg:h-24" id="message" placeholder="Send me a quick message" onChange={handleChange}></textarea>
                            </div>
                        </div>
                        <div className="block items-center">
                            <div className="text-center">
                                <button className="shadow bg-gradient-to-r from-black to-kimmi-teal text-white font-bold py-2 px-8 rounded lg:mx-4" onClick={closeModal} type="submit">
                                    Send
                                </button>
                                
                                <button className="shadow bg-black/20 font-bold py-2 px-8 rounded lg:mx-4" onClick={closeModal} type="button">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className="mt-4">
                    {/* <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={closeModal}
                    >
                        Got it, thanks!
                    </button> */}
                    </div>
                </div>
                </Transition.Child>
            </div>
            </Dialog>
        </Transition> 
    </>
  )
}

export default ContactDialog;