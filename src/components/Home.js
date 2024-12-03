import React from "react";
import { Skills } from "./consts";
import styles from '../styles/Homepage.module.css'
import { Name, Description } from "./consts";
import DisplayTech from "./DisplayTech";

const HomePage = () => {
  return (
    <div className={`${styles.diagonalBackground} min-h-screen flex flex-col justify-center items-center p-6`}>
      <div className="max-w-3xl text-center">
        {/* Intro */}
        <h1 className="text-5xl font-semibold text-blue-600 mb-10">
          Hi, I'm {Name}! 👋
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          {Description}
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Skills</h2>

        <div className="space-y-6 text-left">
          {/* Loop through each skill category */}
          {Skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {skillCategory.category}
              </h3>
              <ul className="flex flex-wrap gap-4">
                {/* Loop through the items in each category */}
                {skillCategory.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <p className="text-lg mt-6 text-gray-700 mb-6">
          Feel free to check out my work and get in touch!
        </p>

        <a
          href="mailto:akregmi@gmail.com"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default HomePage;
