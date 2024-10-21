import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const AcadmyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navDetails, setNavDetails] = useState(false);

  // New function to handle when the mouse leaves both menus
  const handleMouseLeave = () => {
    setIsOpen(false);
    setNavDetails(false);
  };

  return (
    <nav className="p-4 bg-[#F2F5FA] shadow">
      <div className='flex justify-between items-center lg:w-[1440px] m-auto relative'>
        {/* Left - Logo */}
        <div className="flex items-center space-x-4">
          <a className="text-2xl font-bold text-blue-600">
            coursera
          </a>
          <button
            className="border border-blue-600 rounded px-4 py-2 text-blue-600 hover:bg-blue-100 flex"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <span>Explore</span>
            <span className='relative top-[6px] left-2'>
              <IoIosArrowDown />
            </span>
          </button>
        </div>

        {/* First Menu */}
        {isOpen && (
          <div>
            <aside
              className="w-72 bg-gray-50 py-6 fixed top-[50px] left-72"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              {/* Goals Section */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-4 py-1 px-4">Goals</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center hover:bg-white px-4">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Take a free course</a>
                  </li>
                  <li
                    className="flex justify-between items-center hover:bg-white px-4"
                    onMouseEnter={() => setNavDetails(true)} // Open sub-menu on hover
                    onMouseLeave={() => setNavDetails(false)} // Close sub-menu on leave
                  >
                    <a href="#" className="text-gray-600 hover:text-gray-900">Earn a Degree</a>
                    <span className="text-gray-400">{'>'}</span>
                  </li>
                  {/* Other menu items */}
                </ul>
              </div>

              {/* Subjects Section */}
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-4 px-4">Subjects</h2>
                <ul className="space-y-2">
                  <li
                    className="flex justify-between items-center hover:bg-white px-4"
                    onMouseEnter={() => setNavDetails(true)}
                    onMouseLeave={() => setNavDetails(false)}
                  >
                    <a href="#" className="text-gray-600 hover:text-gray-900">Data Science</a>
                    <span className="text-gray-400">{'>'}</span>
                  </li>
                  {/* Other subjects */}
                </ul>
              </div>
              <div className='text-center'>
                <button className="border border-blue-600 text-blue-600 px-2 py-2 rounded hover:bg-blue-50 m-auto">
                  Browse all subjects
                </button>
              </div>
            </aside>

            {/* Sub-Menu (Degrees Section) */}
            {navDetails && (
              <div
                className='fixed top-[60px] left-[30%]'
                onMouseLeave={() => setNavDetails(false)}
              >
                <DegreesSection />
              </div>
            )}
          </div>
        )}

        {/* Middle - Search Bar */}
        <div className="flex-grow mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="What do you want to learn?"
              className="w-full border border-gray-300 rounded-full pl-4 pr-10 py-2 focus:outline-none"
            />
            <span className="absolute inset-y-0 right-3 flex items-center">
              <button className="focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M18.65 11A7.65 7.65 0 1111 3.35 7.65 7.65 0 0118.65 11z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>

        {/* Right - Links */}
        <div className="flex items-center space-x-6 text-gray-600">
          <a href="/degrees" className="hover:text-blue-600 text-sm">Online Degrees</a>
          <a href="/careers" className="hover:text-blue-600 text-sm">Careers</a>
          <a href="/login" className="text-blue-600 text-sm">Log In</a>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 text-sm font-semibold">
            Join for Free
          </button>
        </div>
      </div>
    </nav>
  );
};

interface DegreeItemProps {
  logo: string;
  university: string;
  degree: string;
}

const DegreeItem = ({ logo, university, degree }: DegreeItemProps) => (
  <div className="flex items-start space-x-3 mb-4">
    <img src={logo} alt={`${university} logo`} className="w-10 h-10" />
    <div>
      <p className="font-medium text-gray-900">{university}</p>
      <p className="text-gray-600">{degree}</p>
    </div>
  </div>
);

const DegreesSection = () => {
  return (
    <div className="container mx-auto p-6 bg-green-200">
      <h1 className="text-2xl font-bold mb-2">Earn a Degree</h1>
      <p className="text-gray-600 mb-8">
        Breakthrough pricing on 100% online degrees designed to fit into your life.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Data Science Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Data Science</h2>
          <DegreeItem
            logo="./course-logo.png"
            university="University of Pittsburgh"
            degree="Master of Data Science"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="University of Michigan"
            degree="Master of Applied Data Science"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="Indian Statistical Institute"
            degree="Postgraduate Diploma in Applied Statistics"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="Louisiana State University"
            degree="Master of Science in Analytics"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="University of Colorado Boulder"
            degree="Master of Science in Data Science"
          />
          <a href="#" className="text-blue-600 hover:underline">View all Data Science degrees</a>
        </div>

        {/* Business Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Business</h2>
          <DegreeItem
            logo="./course-logo.png"
            university="University of Illinois Urbana-Champaign"
            degree="Master of Business Administration (iMBA)"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="Pontificia Universidad Católica de Chile"
            degree="Magíster en Inversiones y Finanzas Aplicadas"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="University of Illinois Urbana-Champaign"
            degree="Master of Science in Management (iMSM)"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="University of Colorado Boulder"
            degree="Master of Engineering in Engineering Management"
          />
          <DegreeItem
            logo="./course-logo.png"
            university="University of London"
            degree="Bachelor of Science in Business Administration"
          />
          <a href="#" className="text-blue-600 hover:underline">View all Business degrees</a>
        </div>
      </div>
    </div>
  );
};

export default AcadmyNavbar;