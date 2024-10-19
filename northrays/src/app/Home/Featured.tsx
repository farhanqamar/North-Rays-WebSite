import React from "react";
import { FaSteamSquare, FaLightbulb, FaAward, FaUsers, FaRocket, FaCog } from "react-icons/fa";
import { TbSettingsAutomation } from "react-icons/tb";
import { FaUsersGear } from "react-icons/fa6";
import { SiArstechnica } from "react-icons/si";

// Define the type for each featured item
interface FeaturedItem {
  id: number;
  icon: JSX.Element; // The icon will be a JSX element
  headline: string;
  details: string;
}

// Data for the featured section
const featuredData: FeaturedItem[] = [
  {
    id: 1,
    icon: <SiArstechnica className="text-4xl text-[#023047]" />,
    headline: "Transforming Businesses with Innovation",
    details: "Our AI-powered solutions and VR/AR projects have revolutionized multiple industries, driving efficiency and customer satisfaction.",
  },
  {
    id: 2,
    icon: <FaSteamSquare className="text-4xl text-[#023047]" />,
    headline: "Pioneering the Future with AI, VR, and AR",
    details: "We adopt the latest technologies to create cutting-edge solutions, providing clients with a competitive edge in the digital age.",
  },
  {
    id: 3,
    icon: <FaAward className="text-4xl text-[#023047]" />,
    headline: "Recognized for Excellence",
    details: "Awarded the 'Top Emerging AR/VR Developer' and 'Innovative Solutions in AI' for our ground-breaking projects.",
  },
  {
    id: 4,
    icon: <FaUsersGear className="text-4xl text-[#023047]" />,
    headline: "Dedicated Team of Experts",
    details: "Our experienced team of developers and marketers work closely with clients to deliver tailored solutions for each business challenge.",
  },
  // {
  //   id: 5,
  //   icon: <FaRocket className="text-4xl text-red-600" />,
  //   headline: "Accelerating Business Growth",
  //   details: "By leveraging data-driven marketing strategies, we help businesses scale rapidly and reach new markets with innovative technologies.",
  // },
  // {
  //   id: 6,
  //   icon: <FaCog className="text-4xl text-indigo-600" />,
  //   headline: "Customized Tech Solutions",
  //   details: "From custom software to advanced AI integration, we build tech solutions designed to enhance operational efficiency and productivity.",
  // },
];

const FeaturedCards = () => {
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-12 py-36">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">Our Key Benefits</h2>
      
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 px-8 lg:px-40">
        {featuredData.map((item) => (
          <div
            data-aos="zoom-in-up"
            key={item.id}
            className="hover:bg-gradient-to-r from-[#F68E60] to-[#F8DFD4] hover:text-white p-6 bg-opacity-90 shadow-lg rounded-lg flex flex-col justify-between transition-transform duration-300 hover:scale-105 px-16 text-justify"
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">{item.icon}</div>

            {/* Headline */}
            <h2 className="text-xl font-semibold mb-2 text-center">
              {item.headline}
            </h2>

            {/* Details */}
            <p className=" mb-4 text-center text-base">{item.details}</p>

            {/* Learn more with hover effect */}
            <div className="flex items-center justify-center mt-auto group">
              <a
                href="#"
                className="text-red-600 flex items-center group-hover:text-orange-500 transition-colors duration-300"
              >
                Learn more
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Horizontal Line */}
            <div className="h-1 w-full bg-gray-200 mt-2 group-hover:bg-orange-500 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCards;