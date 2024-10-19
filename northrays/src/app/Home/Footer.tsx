import React from "react";
import Image from "next/image";
// import logo from "./logo.png";
import logo from "../../../public/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#151922] grid grid:cols-1 sm:grid-cols-2 md:grid-cols-4 items-center border-t border-gray-400 text-left">
      <div className=" text-white p-20 text-left flex justify-center md:flex-col hidden md:block">
        <div className="">
        <Image
          src={logo} // Image path
          alt="Description of the image"
          width={150} // Define width
          height={150} // Define height
        />
        <h1 className="text-[30px] py-[15px] pl-[10px] font-medium text-[#FA8500]">
          Nort Rays
        </h1></div>
        <p className="text-[14px] leading-8  tracking-wide text-[#6b6b6e]">
          "Empowering businesses with cutting-edge technology and innovative
          marketing solutions. Let's shape the future together with North Rays."
        </p>
      </div>
     
        <div className="border-l border-l-[#3a3a3b] p-10 hover:bg-[#171813]">
          <p className="md:pb-28 pb-5 text-[#939396] font-bold text-[16px] uppercase">Product</p>

          <ul className="space-y-5 text-white">
            <li>TCP Optimization</li>
            <li>Bandwidth Management</li>
            <li>Network Visibility</li>
            <li>BQN Platform</li>
          </ul>
          <p className="md:pt-24 pt-5 text-[16px] text-[#6b6b6e]">Documentation</p>

        </div>
        <div className="hover:bg-[#171813] p-10">
          <p className="md:pb-28 pb-5 text-[#939396] font-bold text-[16px] uppercase">General</p>

          <ul className="space-y-5 text-white">
            <li>TCP Optimization</li>
            <li>Bandwidth Management</li>
            <li>Network Visibility</li>
            <li>BQN Platform</li>
          </ul>
          <p className="md:pt-24 pt-5 text-[#6b6b6e] text-[16px]">Privacy and Documentation</p>
        </div>
        <div className="hover:bg-[#20211A] p-10">

          <p className="md:pb-28 pb-5 text-[#939396] font-bold text-[16px] uppercase">Socials</p>

          <ul className="space-y-5 pb-8 text-white">
            <li>TCP Optimization</li>
            <li>Bandwidth Management</li>
            <li>Network Visibility</li>
            <li>BQN Platform</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

      </div>
  );
};

export default Footer;
