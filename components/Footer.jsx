import React from "react";
import Link from "next/link";
import Image from "next/image";
import play from "../public/download.png"
import logo from "../public/logo.png"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
function Footer() {
    return (
        <>
            <footer className="text-gray-600 body-font bg-gray-200">
                <div className="container px-5 py-6 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font text-gray-900 tracking-widest text-sm mb-3 font-bold">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                                </li>
                                <li>
                                    <Link href="/About" className="text-gray-600 hover:text-gray-800">About Us</Link>
                                </li>
                                <li>
                                    <Link href="/safety" className="text-gray-600 hover:text-gray-800">Safety</Link>
                                </li>
                                <li>
                                    <Link href="/Career" className="text-gray-600 hover:text-gray-800">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/" className="text-gray-600 hover:text-gray-800">Contacts</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href="/About" className="text-gray-600 hover:text-gray-800">Our Story</Link>
                                </li>
                                <li>
                                    <Link href="/About" className="text-gray-600 hover:text-gray-800">Our Success</Link>
                                </li>
                                <li>
                                    <Link href="/About" className="text-gray-600 hover:text-gray-800">Our Values</Link>
                                </li>
                                <li>
                                    <Link href="/About" className="text-gray-600 hover:text-gray-800">Join Us</Link>
                                </li>
                            </nav>
                        </div>

                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">APPLICATION</h2>
                            
                            <Image src={play} alt="" height={140} width={140}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <Link href="/"   className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={logo} alt="" height={90} width={90}/>
                                <span className="ml-3 text-2xl font-bold">Ridewaves</span>
                            </Link>
                            
                            <div className="mt-4">

                            
                            <div className="text-sm flex flex-row"><FaPhoneAlt className="text-xl text-blue-500" /><span className="pl-2"> +91 8923798699</span></div>            
                            <div className="text-sm flex flex-row mt-2"><FaEnvelope className="text-xl text-red-500" /><span className="pl-2">contact@ridewaves.com</span></div>
                            <div className="text-sm flex flex-row mt-2">
                            <div className="text-sm text-wrap flex-row flex"><FaMapMarkerAlt className="md:text-3xl text-2xl text-green-500" />
                            <span className="pl-2 text-start">Diamond Carpate, Near Fatehabad Rd, Agra, Uttar Pradesh-(282001)</span></div>
                            </div>
                            </div>
                            <span className="inline-flex sm:ml-auto sm:mt-0 p-6 sm:justify-start">
                                <Link href="/" className="text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </Link>
                                <Link href="/" className="ml-3 text-gray-500">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </Link>
                                <Link href="/" className="ml-3 text-gray-500">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </Link>
                                <Link href="/" className="ml-3 text-gray-500">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </Link>
                            </span>

                        </div>
                    </div>
                            <p className="text-sm text-center text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2024 Shodhshala Innotech (P) Ltd. All rights reserved.</p>
                </div>

            </footer>
        </>
    )
}

export default Footer;
