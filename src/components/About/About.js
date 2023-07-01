import React from "react";
import "./About.css";
import "tachyons";
import profileImage from "./profile.jpg";

const About = () => {
  return (
    <section id="about" className="bg-f6f6f6">
      <div className="container">
        <div className="tc capitalize f4 fw6 col mt2">
          <h1 className="section-title">About Me</h1>
          <div className="flex justify-center items-center mt3">
            <div className="pa3">
              <img
                src={profileImage}
                alt="Profile"
                className="ba bw2 b--black-10 br-100 h4 w4"
              />
            </div>
          </div>
          <div className="mt4 ph5">
            <p className="lh-copy f5">
              Hello, I'm Mohammad Fahad, a passionate Full Stack Developer actively
              seeking new challenges and growth opportunities.
            </p>
            <p className="lh-copy f5">
              With a strong foundation in Computer Science and a burning passion for
              innovation, I strive to deliver high-quality software
            </p>
            <p className="lh-copy f5">
              solutions and exceptional user experiences. I stay ahead of emerging
              trends and technologies, keeping myself at
            </p>
            <p className="lh-copy f5">
              the forefront of the ever-evolving tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
