import React from "react";
import { FaFacebookF, FaLinkedinIn,  FaEnvelope, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 mt-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1  md:grid-cols-4 gap-10 px-6">
        {/* Left Section */}
        <div>
          <div className="flex items-center space-x-2">
            
            <h2 className="text-lg font-bold">Nur Contact</h2>
          </div>

          <h3 className="mt-4 font-semibold">Share Now</h3>
          <div className="flex space-x-3 mt-2">
            <a href="https://www.facebook.com/nur637788" className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/in/nur637788/" className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaLinkedinIn />
            </a>
            <a href="https://www.instagram.com/nur637788/" className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaInstagram />
            </a>
            <a href="mailto:mdnoyon631234@gmail.com" className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm text-gray-700 ">
            <li className="hover:underline text-black"><a href="#">Facebook</a> </li>
            <li className="hover:underline text-black"><a href="#">Instagram</a></li>
            <li className="hover:underline text-black"><a href="#product">LinkedIn</a></li>
            <li className="hover:underline text-black"><a href="#contact">GitHub</a></li>
            <li className="hover:underline text-black"><a href="#login">Twitter</a></li>
            <li className="hover:underline text-black"><a href="#singup">Protfolio</a></li>
            <li className="hover:underline text-black"><a href="#getmore">nur637788</a></li>
          </ul>
        </div>

        {/*Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-gray-700 ">
            <li className="hover:underline text-black"><a href="#">nur637788</a> </li>
            <li className="hover:underline text-black"><a href="#">nur-dev</a></li>
            <li className="hover:underline text-black"><a href="#">Abdun Nur</a></li>
            <li className="hover:underline text-black"><a href="#">Web Developer</a></li>
            <li className="hover:underline text-black"><a href="#">Fronend Developer</a></li>
            <li className="hover:underline text-black"><a href="#">React Developer</a></li>
            <li className="hover:underline text-black"><a href="#">NOYON</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Info</h3>
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FiPhone />
            </div>
            <span className="text-sm text-gray-700"><a href="tel:+88 01321231802">+88 01749535688</a></span>
          </div>
          <div className="flex items-center space-x-3 mb-3">
            <div className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FiMail />
            </div>
            <span className="text-sm text-gray-700"><a href="mailto:mdnoyon631234@gmail.com">mdnoyon631234@gmail.com</a></span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-black hover:bg-blue-400 text-white rounded-md">
              <FiMapPin />
            </div>
            <span className="text-sm text-gray-700">
              <a href="https://www.google.com/maps/place/Chapainawabganj+Polytechnic+Institute/@24.6041348,88.2535192,132m/data=!3m1!1e3!4m14!1m7!3m6!1s0x39fbb6adce9b8e7f:0x9e48aed7c8c2e606!2sChapainawabganj+Polytechnic+Institute!8m2!3d24.6042394!4d88.253888!16s%2Fg%2F11clsy857f!3m5!1s0x39fbb6adce9b8e7f:0x9e48aed7c8c2e606!8m2!3d24.6042394!4d88.253888!16s%2Fg%2F11clsy857f?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank">Chapainawabganj, Rajshahi</a>
            </span>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="mt-3 text-center">
        <h3>© 2025 Nur Contact. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
