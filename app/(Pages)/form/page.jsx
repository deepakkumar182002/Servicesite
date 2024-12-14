'use client' // Ensure this is declared for client-side rendering

import React, { useState, useEffect } from "react";
import tem12 from "../../../public/temp12.jpg";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Dialog from "@/components/Dialog";
import Footer from "@/components/Footer";

export default function Contactform() {
  const [state, handleSubmit] = useForm("xblrwojo");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Custom form validation logic
    if (!event.target.name.value || !event.target.email.value || !event.target.message.value) {
      setDialogMessage("Please fill out all required fields.");
      setIsDialogOpen(true);
      return;
    }

    // Proceed with form submission if validation passes
    handleSubmit(event);
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
  };

  // useEffect hook to manage success state without causing re-render issues
  useEffect(() => {
    if (state.succeeded) {
      setDialogMessage("Thanks for joining!");
      setIsDialogOpen(true);

      // Automatically refresh the page after showing the dialog
      setTimeout(() => {
        window.location.reload(); // Refresh the page using window.location.reload()
      }, 1); // Adjust the delay time here
    }
  }, [state.succeeded]);

  return (
    <>
      <main className="bg-gray-100">
        <Navigation />
        <div className="bg-gray-100 flex flex-col md:flex-row justify-center gap-4 mx-auto">
          <div className="w-full md:w-auto flex flex-col m-2">
            <div className="header-text p-4 flex bg-gray-900">
              <span>
                <h2 className="md:text-3xl text-2xl ml-4 font-bold text-white">Request Callback</h2>
                <h6 className="text-white ml-4">Fill out this form below!</h6>
              </span>
            </div>
            <form onSubmit={handleFormSubmit} className="grid grid-cols justify-center align-items-center gap-3">
              <input
                id="Username"
                type="Username"
                name="name"
                placeholder="Enter Your Name*"
                className="mt-2 p-2"
                required
              />
              <ValidationError prefix="Username" field="name" errors={state.errors} />

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="p-2"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <input
                id="Phone"
                name="Phone"
                placeholder="Enter Your Phone no."
                className="p-2"
                required
              />
              <ValidationError prefix="Phone" field="Phone" errors={state.errors} />

              <label htmlFor="course" className="text-muted text-start md:ml-0 ml-2">
                Service Interested<span className="text-red-500">*</span>
              </label>
              <select name="course" id="course" className="p-2">
                <option>Select Services</option>
                <option value="Cars Rental">Cars Rental</option>
                <option value="Buying">Buying</option>
                <option value="Order">Order</option>
                <option value="Other">Other</option>
              </select>
              <ValidationError prefix="Course" field="Course" errors={state.errors} />

              <label htmlFor="course" className="text-muted text-start">Message</label>
              <textarea
                id="message"
                name="message"
                className="my-0 p-2"
                rows="3"
                cols="50"
                placeholder="Enter any additional information"
              />
              <ValidationError prefix="message" field="message" errors={state.errors} />

              <button
                type="submit"
                disabled={state.submitting}
                className="m-3 bg-gray-900 text-white mx-auto px-8 py-2 rounded-lg"
              >
                Submit
              </button>
              <p className="text-muted">
                By continuing, you confirm that you have read and agreed to Ridewaves&apos;s{" "}
                <span>Terms</span> and <span>Privacy policy</span>
              </p>
            </form>
          </div>
          <Image src={tem12} alt="" className="h-[600px] m-2 w-[600px]" />
        </div>
        {/* Dialog for both form validation and success message */}
        <Dialog isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} onConfirm={handleConfirm}>
          <p>{dialogMessage}</p>
        </Dialog>
      </main>
      <Footer />
    </>
  );
}
