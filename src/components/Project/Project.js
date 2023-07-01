import React from "react";
import "./Project.css";
import "tachyons";
import FaceRecognitionAppImage from "./img/FaceRecognition.png";

import RobofriendImage from "./img/Robofriend.png";

const Project = () => {
  return (
    <section id="Project" className="bg-color">
      <div className="tc f2 fw5 ma3">Projects</div>
      <div className="project-grid">
        <div className="project-item flex flex-wrap items-center justify-center">
          <div className="w-50-l w-100 pa3">
            <img
              src={FaceRecognitionAppImage}
              alt="Project 1"
              className="project-image project-image-large"
            />
          </div>
          <div className="w-50-l w-100 pa3">
            <h3 className="project-title">Project 1</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tempor turpis eu faucibus lacinia. Sed auctor urna sed lectus
              accumsan fermentum. Donec sed turpis vel ipsum auctor laoreet.
              Sed non erat ultricies, consectetur nisl a, tincidunt quam.
            </p>
            <a href="https://example.com" className="project-button">
              Check it out
            </a>
          </div>
        </div>
        <div className="project-item flex flex-wrap items-center justify-center">
          <div className="w-50-l w-100 pa3">
            <h3 className="project-title">Project 2</h3>
            <p className="project-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              tempor turpis eu faucibus lacinia. Sed auctor urna sed lectus
              accumsan fermentum. Donec sed turpis vel ipsum auctor laoreet.
              Sed non erat ultricies, consectetur nisl a, tincidunt quam.
            </p>
            <a href="https://example.com" className="project-button">
              Check it out
            </a>
          </div>
          <div className="w-50-l w-100 pa3">
            <img  
              src={RobofriendImage}
              alt="Project 2"
              className="project-image project-image-large"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
