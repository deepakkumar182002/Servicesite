import Footer from "@/components/Footer";
import Homepage from "@/components/Homepage";
import Navigation from "@/components/Navigation";
// import temp14 from "../public/bgimage.jpg";
// import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
// import Nav from "@/components/Nav";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="">
        <div className="sticky z-20 top-0 w-full">
          {/* <Nav /> */}
          <Navigation />
        </div>
        {/* <div className="sticky top-0 z-0">
          <Image src={temp14} alt="" className="" />
        </div> */}
      </main>
      <div className="">
        <Homepage />
      </div>
      <div
        className="fixed-bottom right-140"
        style={{
          left: "initial",
          marginBottom: "90px",
          marginRight: "30px",
          zIndex: "0",
        }}
      >
        <a
          href="https://wa.me/8218011747?text=Hello, How can I help you?"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp className="text-[3rem] fixed bottom-6 right-6 text-green-500" />
        </a>
      </div>

      <Footer />
    </>
  );
}
