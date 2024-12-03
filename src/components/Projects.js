import React from "react";
import DisplayTech from "./DisplayTech";
import { FaGithub } from "react-icons/fa";
import { Projects } from "./consts";
import styles from '../styles/Projects.module.css'

const ProjectShowcase = () => {
  return (
    <section id="projects" className="bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        My Projects
      </h2>
      <div className="flex justify-center items-center">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-6">
          {Projects.map((project, index) => (
            <div
              key={index}
              className={`w-80 md:w-72 ${styles.diagonalBackground} shadow-lg rounded-3xl border border-gray-200 p-6 transform hover:scale-105 transition-transform duration-300`}
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 mt-2">{project.description}</p>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center space-x-2 text-blue-500 hover:underline"
              >
                <FaGithub />
                <span>View on GitHub</span>
              </a>

              {/* Technologies */}
              <DisplayTech tools={project.tools}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
