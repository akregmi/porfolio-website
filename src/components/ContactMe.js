import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function ContactMe() {
  return (
    <div id="contact" className="flex flex-col justify-center items-center bg-gray-100 py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h1>
      <p className="text-lg text-gray-600 mb-8 p-4 text-center">Feel free to reach out through any of the platforms below!</p>
      <div className="flex flex-col space-y-4">
        {/* Github */}
        <a
          href="https://www.github.com/akregmi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 bg-green-100 px-6 py-3 rounded-lg shadow-lg border border-green-500 hover:bg-green-600 hover:text-white transition duration-300"
        >
          <FaGithub size={24} />
          <span>Follow me on Github!</span>
        </a>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/akregmi/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 bg-blue-100 px-6 py-3 rounded-lg shadow-lg border border-blue-600 hover:bg-blue-700 hover:text-white transition duration-300"
        >
          <FaLinkedinIn size={24} />
          <span>Connect with me on LinkedIn!</span>
        </a>
        {/* Email */}
        <a
          href="mailto:akregmi@gmail.com"
          className="flex items-center space-x-4 bg-red-100 px-6 py-3 rounded-lg shadow-lg border border-red-500 hover:bg-red-700 hover:text-white transition duration-300"
        >
          <IoIosMail size={24} />
          <span>Send me an Email!</span>
        </a>
      </div>
    </div>

  );
}

export default ContactMe;
