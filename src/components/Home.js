import React from "react";
import { Skills } from "./consts";
import styles from '../styles/Homepage.module.css'
import { Name, Description } from "./consts";
import { CgFileDocument } from "react-icons/cg";
import Resume from '../assets/AayushRegmi_Resume.pdf'

const HomePage = () => {
  return (
    <section id="home" className={`${styles.diagonalBackground} min-h-screen flex flex-col justify-center items-center p-6`}>
      <div className="max-w-3xl text-center">
        {/* Intro */}
        <h1 className="text-5xl font-semibold text-blue-600 mb-10">
          Hi, I'm {Name}! 👋
        </h1>
        <section id="about">
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
                      className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm border border-blue-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <p className="text-lg mt-10 text-gray-700 mb-6">
          View my resume to get to know more about me!
        </p>

        <a
          href={Resume} without rel="noopener noreferrer" target="_blank"
          className="inline-flex space-x-4 items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full mb-6 hover:bg-blue-900 transition-all"
        >
          <CgFileDocument />
          <span>View Resume</span>
        </a>
      </div>
    </section>
  );
};

export default HomePage;
