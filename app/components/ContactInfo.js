"use client";

import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-2 place-items-center gap-6 mb-6 lg:grid-cols-none lg:grid-flow-col max-w-7xl mx-auto">
       
      <a
        href="https://www.facebook.com/mhparvej.khan.5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:scale-110 transition text-7xl text-center"
      > 
        <FaFacebook className="text-white" />
        
      </a>
      <a
        href="https://wa.me/+8801863945101"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:scale-110 transition text-7xl"
      >
        <FaWhatsapp className="text-white" />
      </a>
      <a
        href="https://www.linkedin.com/in/mh-parvej-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:scale-110 transition text-7xl"
      >
        <FaLinkedin className="text-white" />
      </a>
      <a
        href="https://github.com/Parvej101"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 hover:scale-110 transition text-7xl"
      >
        <FaGithub className="text-white" />
      </a>
    </div>
  );
};

export default ContactInfo;
