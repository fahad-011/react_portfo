import React from "react";
import "./Home.css";
import "tachyons";
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope } from "react-icons/fa";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <div className="flex justify-center items-center vh-100">
      <ParticlesBg num={85} type="cobweb" color="#ffffff" bg={true} />
      <div className="flex flex-column items-center">
        <h1 className="tc uppercase f1 fw5 col ma3">Mohammad Fahad Rahman</h1>
        <h2 className="tc capitalize f2 fw6 col mt2">
          Programmer | Full Stack Developer | Javascript Developer
        </h2>
        <div className="tc mt2">
          <div className="circle-background">
            <a href="https://www.linkedin.com/in/mohammad-fahad-rahman-a41a92233/" className="link dim gray mr3">
              <FaLinkedin className="f2 col" />
            </a>
            <a href="https://github.com/roc102" className="link dim gray mr3">
              <FaGithub className="f2 col" />
            </a>
            <a href="/resume.pdf" className="link dim gray mr3">
              <FaFilePdf className="f2 col" />
            </a>
            <a href="mailto:example@gmail.com" className="link dim gray">
              <FaEnvelope className="f2 col" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
