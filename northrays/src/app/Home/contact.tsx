// components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="contact_us">
      <div className="flex flex-col lg:flex-row justify-between items-center p-4">
        <div className="lg:w-5/12 md:w-4/12 w-full mb-6 lg:mb-0">
          <img
            className="mainImg"
            src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/mp35.svg"
            alt="Contact"
          />
        </div>
        <div className="lg:w-7/12 md:w-8/12 w-full">
          <p className="text-2xl font-bold text-gray-800 mb-4">Contact Me</p>
          <form className="space-y-4" id="izml">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <p className="text-lg font-semibold text-gray-600">Full Name</p>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  id="fullName"
                  name="fullName"
                  type="text"
                />
              </div>
              <div className="w-full">
                <p className="text-lg font-semibold text-gray-600">Email Address</p>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-600">Message</p>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-md"
                id="message"
                name="message"
                rows={5}
              ></textarea>
            </div>
            <a
              className="block text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer"
              href="#"
              id="w-c-s-bgc_p-1-dm-id-4"
            >
              Send Message
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
