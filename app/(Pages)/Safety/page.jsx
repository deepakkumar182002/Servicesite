import React from "react";
import Image from "next/image"; // or your preferred image component if using Next.js
import temp6 from "../../../public/temp6.jpg";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
const Safety = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white text-black min-h-screen p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-around">
          {/* Hero Section */}
          <div className="text-center mb-10 w-2/4">
           
            <span className="text-lg text-wrap text-start">
           
            <div className="mt-2">
            At <span className="font-bold text-red-400">RideWaves</span>, your safety is our top priority. <br />
            We are committed to providing you with a secure and comfortable travel experience.
            <br /> 
            <h1 className=" mt-4">Here’s how we ensure your safety during every ride:</h1>
            </div>
            <ul className="mt-2">
                <li className="pt-4">- Professional Drivers</li>
                <li className="pt-4">- Well-Maintained Vehicles</li>
                <li className="pt-4">- Real-Time Tracking</li>
                <li className="pt-4">- Safety Protocols</li>
                <li className="pt-4">- 24/7 Customer Support</li>
                <li className="pt-4">- Feedback and Improvement</li>
                
            </ul>

            </span>
           
        </div>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <Image
              src={temp6} // Replace with a real image path
              alt="Random Service"
              height={400}
              width={600}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        <hr />
        <h1 className="font-bold text-4xl mt-8 text-center">Your Safety is Our Commitment</h1>
            <p className="mt-4 text-wrap text-xl text-center p-8">At <span className="font-bold text-red-400">RideWaves</span>, we understand that safety is paramount when it comes to transportation. You can travel with confidence, knowing that we are dedicated to keeping you safe on every journey.

            For any questions about our safety practices, feel free to contact us. Your comfort and security are our mission!
            </p>

       
          <p className="flex justify-center text-2xl mt-10"> Ready to book your next ride? </p>
          <p  className="flex justify-center text-2xl mt-4">Contact us today and let us take you wherever you need to go!</p>
      </div>
      <Footer />
    </>
  );
};

export default Safety;
