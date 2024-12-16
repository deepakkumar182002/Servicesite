import React from "react";
import Image from "next/image"; // or your preferred image component if using Next.js
import temp9 from "../../../public/temp9.jpg";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
const Career = () => {
  return (
    <>
      <Navigation />
      <div className="bg-white text-black min-h-screen p-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-around">
          {/* Hero Section */}
          <div className="text-center mb-10 w-2/4">
           
            <span className="text-lg text-wrap text-start">
           
            <div className="mt-2">
           <span className="font-bold text-red-400 text-4xl">Be a part of our team.</span> <br />
           <div className="mt-4">We are so glad you want to join us in exploring a world of endless opportunities at <span className="font-bold text-red-400">RideWaves</span>.
          </div>    
            </div>
            <button type="button" className="bg-red-400 px-6 text-white float-left mt-6 py-2">View Job</button>
            </span>
           
        </div>

          {/* Image Section */}
          <div className="flex justify-center mb-8">
            <Image
              src={temp9} // Replace with a real image path
              alt="Random Service"
              width={600}
              height={400}
              className="rounded-lg shadow-md h-[400px]"
            />
          </div>
        </div>
        

       
          <p className="flex justify-center text-2xl mt-10"> Ready to book your next ride? </p>
          <p  className="flex justify-center text-2xl mt-4">Contact us today and let us take you wherever you need to go!</p>
      </div>
      <Footer />
    </>
  );
};

export default Career;
