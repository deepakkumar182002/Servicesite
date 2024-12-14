'use client'
import React from 'react'
import Image from 'next/image'
import temp16 from '../public/temp16.jpg'
import temp8 from '../public/temp8.jpg'
import temp7 from '../public/temp7.jpg'
import temp5 from '../public/temp5.jpg'
import temp11 from '../public/temp11.jpg'
import temp15 from '../public/temp15.jpg'
import temp10 from '../public/temp10.jpg'
import StatsSection from './StatsSection'
import { useForm, ValidationError } from "@formspree/react";

export default function Homepage() {
    const [state, handleSubmit] = useForm("xblrwojo");

    const handleFormSubmit = (event) => {
        // Your custom form validation logic goes here
        // For example, check if name, email, and message are not empty
        if (!event.target.name.value || !event.target.email.value || !event.target.message.value) {
            // Show an error message or handle the validation error
            console.error("Please fill out all required fields");
            return;
        }

        // If validation passes, proceed with the form submission
        handleSubmit(event);
    };

    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <>
            <div className="flex items-center bg-fixed flex-col justify-center h-full">
                {/* <Image src={temp14}  alt="" className='' /> */}
                <div className="container mx-auto bg-white w-2/2 md:p-4  relative">
                    {/* form  */}

                    <div className="justify-between grid  md:grid-cols-2 md:gap-4 gap-2">
                        {/* <div className="max-w-md bg-white overflow-hidden w-full">
                            <div className="md:text-2xl md:py-4 py-2 px-6 bg-gray-900 text-white text-start md:text-center font-bold uppercase">
                                Book an Appointment
                            </div>
                            <form onSubmit={handleFormSubmit} className="py-4 px-6" action="" method="POST">
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                        Name<span className='text-red-500'>*</span>
                                    </label>
                                    <input id="name" type="rname" name="name" placeholder="Enter You Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required />
                                    <ValidationError
                                        prefix="Username"
                                        field="name"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                                        Email<span className='text-red-500'>*</span>
                                    </label>
                                    <input id="email" type="email" name="email" placeholder="Enter Your Email"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="Phone">
                                        Phone Number <span className='text-red-500'>*</span>
                                    </label>
                                    <input id="Phone" name="Phone" placeholder="Enter Your Phone no."

                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                    <ValidationError
                                        prefix="Phone"
                                        field="Phone"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="course">
                                        Service<span className='text-red-500'>*</span>
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="course" id="course" >
                                        <option value="">Select a service</option>
                                        <option value="Rent">Rent</option>
                                        <option value="Buying">Buying</option>
                                        <option value="Order">Order</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    <ValidationError
                                        prefix="Course"
                                        field="Course"
                                        errors={state.errors}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        rows="3"
                                        cols="50"
                                        placeholder="Enter any additional information"

                                    />
                                    <ValidationError
                                        prefix="message"
                                        field="message"
                                        errors={state.errors}

                                    />
                                </div>
                                <div className="flex items-center justify-center mb-4">
                                    <button
                                        className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                        type="submit" disabled={state.submitting}>
                                        Book Appointment
                                    </button>
                                </div>

                            </form>
                        </div> */}
                        <span>
                        <h1 className='md:text-5xl text-2xl font-bold mt-16 '>Agra moves on 
                        </h1>
                        <h1 className='text-red-400 text-[60px] font-bold mt-2 tracking-tight'>RIDEWAVES</h1>
                        <p className='text-xl p-2   '>"At <span className='font-bold text-red-400'>RIDEWAVES</span>, we believe that travel is not just a journey but an experience. With years of expertise, we curate unforgettable adventures tailored just for you."</p>
                        <span className=' flex flex-row gap-2 mt-4'></span>
                        <button type="button" className='px-4 py-2 bg-red-400 text-white'>Download RideWaves</button>
                        <button type="button" className='ml-4 px-6 py-2 border-[1px] border-red-500/75 '>Sing-up For Driver</button>
                        </span>
                        <Image src={temp8} alt="" className='' />
                    </div>
                    <hr />
                    {/* <Image src={temp} alt="" className='my-2' /> */}
                    <h2 className='text-sm md:text-4xl font-bold my-16 text-center drop-shadow-lg'>mobility ecosystem driving communities forward</h2>
                    <div className="columns-1 md:columns-2 xl:columns-3 gap-7">
                        <div className=" break-inside-avoid mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp7} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp5} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp11} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp10} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp16} alt="Gallery image" />
                        </div>
                        <div className=" break-inside-avoid  mb-8">
                            <Image className="h-auto max-w-full rounded-lg" src={temp15} alt="Gallery image" />
                        </div>
                    </div>
                    <StatsSection />


                </div>
            </div>

        </>
    )
}
