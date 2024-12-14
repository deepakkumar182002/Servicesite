import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image"; // or your preferred image component if using Next.js
import temp11 from "../../../public/temp11.jpg";
import temp2 from "../../../public/temp2.jpg";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
const About = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white text-black min-h-screen p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-around">
          {/* Hero Section */}
          <div className="text-center mb-10 w-2/4">
            <h1 className="text-4xl font-bold mb-4 mt-4 text-start">
              Your Beloved Taxi Service
            </h1>
            <span className="text-lg text-wrap text-start">
            <h1 className="text-gray-700  font-bold">Welcome to <span className="text-red-400 font-bold text-2xl">RIDEWAVES</span></h1>
            <p className="mt-2">
            At <span className="text-red-400 font-bold">RIDEWAVES</span>, we understand that getting to your destination is just as important as the journey itself. Specializing in reliable and comfortable cab services, we are dedicated to making your travel experience seamless and enjoyable.
            </p>
            </span>
        </div>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <Image
              src={temp11} // Replace with a real image path
              alt="Random Service"
              width={400}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Company Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
            <p className="text-md">
            Founded by a team of transportation enthusiasts, <span className="font-bold">RIDEWAVES</span> started with a simple mission: to provide safe, efficient, and affordable cab services for everyone. With years of experience in the industry, we have refined our operations to ensure that each ride meets the highest standards of quality and comfort.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Our Services</h2>
            <p className="text-md">
              Whether you&apos;re looking for a budget-friendly ride or a luxury
              experience, Ridewaves has got you covered. Our services include
              economy rides, premium cars, and more—providing flexibility and
              safety for every journey.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Our Values</h2>
            <p className="text-md">
            <span className="font-bold">Customer Focus:</span> Your satisfaction is at the heart of what we do. We listen to your needs and strive to exceed your expectations with every ride.
            <br />
            <span className="font-bold">Safety First:</span> We prioritize your safety, employing well-trained drivers and maintaining our fleet to the highest safety standards. <br />
            <span className="font-bold">Convenience:</span> With our easy-to-use booking system, you can book your ride in just a few clicks, anytime and anywhere.

            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Join Us on the Road</h2>
            <p className="text-md">
                Experience the difference with <span className="font-bold">RIDEWAVES.</span>  Our friendly drivers are knowledgeable about the local area and are committed to providing you with a pleasant and stress-free journey.
               
            <br />
        
            </p>
          </div>
        </div>
          <p className="flex justify-center text-2xl mt-10"> Ready to book your next ride? </p>
          <p  className="flex justify-center text-2xl mt-4">Contact us today and let us take you wherever you need to go!</p>

      </div>
      <Footer />
    </>
  );
};

export default About;
