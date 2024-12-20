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

          <div className="text-lg text-wrap lg:text-start text-center flex flex-col lg:flex-row items-center">

            <div className="flex flex-col items-center">
              <span className="font-bold text-red-400 text-4xl text-center">Be a part of our team.</span> <br />
              <div className="mt-4 text-center">We are so glad you want to join us in exploring a world of endless opportunities at <span className="font-bold text-red-400">RideWaves</span>.
              </div>
            <button type="button" className="bg-red-400 px-6 text-white float-left mt-6 py-2">View Job</button>
            </div>


            {/* Image Section */}
            <div className="flex justify-center mb-8">
              <Image
                src={temp9} // Replace with a real image path
                alt="Random Service"
                width={800}
                height={400}
              />
            </div>
          </div>
        </div>



        <p className="flex justify-center text-2xl mt-10"> Ready to book your next ride? </p>
        <p className="flex justify-center text-center text-2xl mt-4">Contact us today and let us take you wherever you need to go!</p>
      </div>
      <Footer />
    </>
  );
};

export default Career;
