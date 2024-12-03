import React, { useState } from 'react';
import DisplayTech from './DisplayTech';
import { Experience } from './consts';

const Timeline = () => {

  const [expanded, setExpanded] = useState(null);

  const toggleDescription = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle the expanded state
  };

  return (
    <section id="experience" className="bg-gray-100 py-10 px-5">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Timeline</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-1  bg-blue-500 transform -translate-x-1/2 hidden md:block "></div>

        <div className="space-y-12">
          {Experience.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
            >
              {/* Circle Indicator */}
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full border-4 border-white left-1/2 transform -translate-x-1/2 md:group-hover:bg-blue-600 transition hidden md:block"></div>

              {/* Content */}
              <div
                className={`relative p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-500 w-full md:w-5/12 transform hover:scale-105 transition-transform duration-300 ${index % 2 === 0
                  ? 'md:ml-8 md:border-r-4 md:border-l-0'
                  : 'md:mr-8'
                  }`}
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {item.title} <span className="text-blue-500">| {item.company}</span>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{item.duration}</p>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleDescription(index)}
                  className="mt-2 text-blue-500 hover:underline focus:outline-none"
                >
                  {expanded === index ? "Hide Details" : "Show Details"}
                </button>

                {/* Description */}
                {expanded === index && (
                  <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <DisplayTech tools={item.tools} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
