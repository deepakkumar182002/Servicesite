'use client'
// import React from "react";
import logo from "../public/logo.png"
import Image from "next/image";
import React, { useState } from 'react';
import Link from 'next/link';
function Navigation() {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle dropdown visibility
  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };


  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // Close the dropdown when clicking outside the button/dropdown
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest('.dropdown-container') && isDropdownOpen) {
  //       setIsDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [isDropdownOpen]);

  return (
    <>

      <nav className="relative border-gray-200 w-full border-b py-3 md:bg-white bg-gray-100 z-50  bg-inherit  border-b-default border-solid border-prime-gray-200 ">
        <div className="container mx-auto">
          <div className="md:w-full flex  flex-col lg:flex-row px-4">
            <div className=" flex justify-between  lg:flex-row">
              <Link href="/" className="flex items-center">
                <h2 className='text-3xl font-bold'><Image src={logo} height={120} width={120} alt="" /></h2>
              </Link>
              <div className="flex flex-col lg:flex-row md:w-64 lg:hidden lg:items-center gap-4 ml-auto justify-center">
                <Link href="/" className="bg-red-500 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-red-400 hover:text-white-500">Download App</Link>
              </div>
              <button data-collapse-toggle="default-megamenu" onClick={toggleMenu} type="button" className="lg:hidden inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="true">
                {/* <span className="sr-only">Open main menu</span> */}
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>

            <div className="w-full lg:flex lg:pl-11">
              {/* desktop view */}
              <ul className="hidden lg:flex items-start mb-4 lg:mb-0 gap-y-4 lg:items-center flex-col mt-4 lg:mt-0 md:flex-row">
                <li>
                  <Link href="/" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0 hover:text-red-300 focus:text-red-400 disabled:text-black/30 dark:text-neutral-600 dark:hover:text-red-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-red-400/90 dark:[&.active]:text-zinc-400">Home</Link>
                </li>
                <li>
                  <Link href="/About" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0 hover:text-red-300 focus:text-red-400 disabled:text-black/30 dark:text-neutral-600 dark:hover:text-red-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-red-400/90 dark:[&.active]:text-zinc-400">About Us</Link>
                </li>
                <li>
                  <Link href="/Safety" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0 hover:text-red-300 focus:text-red-400 disabled:text-black/30 dark:text-neutral-600 dark:hover:text-red-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-red-400/90 dark:[&.active]:text-zinc-400">Safety</Link>
                </li>
                <li>
                  <Link href="/Career" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0 hover:text-red-300 focus:text-red-400 disabled:text-black/30 dark:text-neutral-600 dark:hover:text-red-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-red-400/90 dark:[&.active]:text-zinc-400">Careers</Link>
                </li>

                <li className="relative">
                  <Link href="/ContactUs" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0 hover:text-red-300 focus:text-red-400 disabled:text-black/30 dark:text-neutral-600 dark:hover:text-red-400 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-red-400/90 dark:[&.active]:text-red-400">Contact Us</Link>
                </li>

              </ul>

              {/* mobile view */}
              <ul className={`lg:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}flex items-start mb-4 lg:mb-0 gap-y-4 lg:items-center flex-col mt-4 lg:mt-0 md:flex-row`}>
                <li>
                  <Link href="/" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0">Home</Link>
                </li>
                <li>
                  <Link href="/About" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0">About us</Link>
                </li>
                <li>
                  <Link href="/Safety" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0">Safety</Link>
                </li>
                <li>
                  <Link href="/Career" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0">Careers</Link>
                </li>
                
                <li>
                  <Link href="/ContactUs" className="flex items-center justify-between text-gray-500 text-sm text-center lg:text-base font-medium hover:text-indigo-700 transition-all duration-500 mb-2 lg:mr-6 lg:mb-0 mr-auto lg:text-left m-auto lg:m-0">Contact Us</Link>
                </li>
              </ul>
              <div className="hidden lg:flex flex-col lg:flex-row md:w-64  lg:items-center gap-4 ml-auto justify-center">
                <Link href="/" className="bg-red-500 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm hover:bg-red-400 hover:text-white-500">Download App</Link>
              </div>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation;
