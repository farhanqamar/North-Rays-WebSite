// *useClient
import React,{useState} from "react";

const LandingPage: React.FC = () => {
//   const [isBlurred, setIsBlurred] = useState(true);

//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.value.length > 0) {
//       setIsBlurred(false);
//     } else {
//       setIsBlurred(true);
//     }
//   };

  return (
      <div className="relative bg-black py-0 px-12 md:px-5 big-container">
        <img
          className="absolute inset-0 h-full w-full opacity-50 object-cover"
          src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/clothes-bg.png"
          alt="Background"
        />
        <div className="container mx-auto flex flex-wrap mt-16 mb-16 max-w-[1320px] relative">
          <div className=" flex justify-start items-center text-white w-full md:w-1/2">
            <div>
              <p className="text-[40px] leading-[55px] font-extrabold max-w-[450px]">
                Get in Touch with North Rays
              </p>
              <p className="text-[18px] leading-8 text-gray-400 max-w-[600px] mb-12">
                At North Rays, we are dedicated to empowering businesses with
                cutting-edge technology solutions and innovative marketing
                strategies. Whether you're looking for custom software,
                AI-powered tools, VR/AR experiences, or IT consulting and
                support, our team is here to help your business thrive in the
                digital age. Let’s work together to illuminate your path to
                success. Reach out to us today and discover how we can help your
                business stay ahead in the fast-evolving digital world.
              </p>
              <div className="flex justify-evenly max-w-[450px]">
                <a>
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
                    alt="Twitter"
                  />
                </a>
                <a>
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
                    alt="Facebook"
                  />
                </a>
                <a className="share-icon">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png"
                    alt="Google"
                  />
                </a>
                <a className="share-icon">
                  <img
                    className="w-8 h-8"
                    src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
                    alt="Instagram"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="right-one flex justify-center w-full md:w-1/2">
            <form className="form-box  text-white py-9 px-8 max-w-[506px]">
              <p className="contactus-head text-[30px] leading-[40px] mb-2">
                Get a quote
              </p>
              <p className="contactus-subhead text-[#d4d4d4] mb-4">
                We will get back to you in 24 hours
              </p>
              <div className="form-wrapper">
                <input
                  className="input w-full h-[50px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-[#767676] rounded mb-4"
                  type="text"
                  name="FirstName"
                  placeholder="First Name"
                />
                <input
                  className="input w-full h-[50px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-[#767676] rounded mb-4"
                  type="text"
                  name="LastName"
                  placeholder="Last Name"
                />
                <input
                  className="input w-full md:w-1/2 h-[50px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-[#767676] rounded mb-4"
                  type="email"
                  name="Email"
                  placeholder="Email"
                />
                <input
                  className="input w-full md:w-1/2 h-[50px] bg-transparent text-[18px] py-[1px] px-[22.5px] border border-[#767676] rounded mb-4"
                  type="text"
                  name="PhoneNumber"
                  placeholder="Phone Number"
                />
                <textarea
                  className="textinput w-full h-[233px] bg-transparent text-[18px] py-5 px-[22px] border border-[#767676] rounded mb-4"
                  placeholder="Type message here"
                />
                <button className="submit-btn w-full h-[56px] bg-transparent text-white hover:bg-white hover:text-black border border-[#767676] font-semibold text-[18px] rounded">
                  Get quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default LandingPage;
