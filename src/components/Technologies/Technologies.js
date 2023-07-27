import React from "react";
import "tachyons";
import './Technologies.css';
import Bootstrap from './Logo/bootstrap.svg';
import C from './Logo/c.svg';
import Css from './Logo/css.svg';
import Express from './Logo/express.svg';
import Git from './Logo/git.svg';
import Github from './Logo/github.svg';
import Heroku from './Logo/heroku.svg';
import Html from'./Logo/html.svg';
import Java from './Logo/java.svg';
import Js from './Logo/js.svg';
import Mysql from './Logo/mysql.svg';
import Node from'./Logo/nodejs.svg';
import Postgres from'./Logo/postgresql.svg';
import Reactjs from'./Logo/react.svg';
import VS from'./Logo/visual-studio-code.svg';
import Python from './Logo/python.svg';
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Technologies = () => {
  const [languagesRef, languagesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [frontendRef, frontendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [backendRef, backendInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [toolsRef, toolsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationFromLeft = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: languagesInView ? 1 : 0, transform: languagesInView ? "translateX(0)" : "translateX(-100px)" },
    config: { duration: 1000 },
  });

  const animationFromRight = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: { opacity: backendInView ? 1 : 0, transform: backendInView ? "translateX(0)" : "translateX(100px)" },
    config: { duration: 1000 },
  });


  return (
    <section id="technologies" className="bg-gray-100 py-2 px-4 md:px-6 lg:px-10 xl:px-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          <div className="languages flex flex-col items-center justify-center text-center my-2 p-4 md:m-0">
            <animated.div ref={languagesRef} style={animationFromLeft}>
          <h3 className="uppercase text-xl font-semibold my-8">Languages</h3>
          <div className="logos flex flex-wrap justify-center gap-5 mb-5">
            <div className="field w-16 h-16">
              <img src={Java} alt="Java" className="w-full h-full object-contain" />
            </div>
            <div className="field w-16 h-16">
              <img src={C} alt="C" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="logos flex flex-wrap justify-center gap-5">
            <div className="field w-16 h-16">
              <img src={Js} alt="JavaScript" className="w-full h-full object-contain" />
            </div>
            <div className="field w-16 h-16">
              <img src={Python} alt="Python" className="w-full h-full object-contain" />
            </div>
          </div>
          <p className="text-base font-normal leading-6 my-8">
            Java, C, JavaScript, and Python are popular programming languages used for various purposes.
          </p>
          </animated.div>
        </div>

          <div className="frontend flex flex-col items-center justify-center text-center my-2 p-4 md:m-0">
          <animated.div ref={frontendRef} style={animationFromLeft}>
            <h3 className="uppercase text-xl font-semibold my-8">Front-End</h3>
            <div className="logos flex flex-wrap justify-center gap-5 mb-5">
              <div className="field w-16 h-16">
                <img src={Reactjs} alt="React" className="w-full h-full object-contain" />
              </div>
              <div className="field w-16 h-16">
                <img src={Bootstrap} alt="Bootstrap" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="logos flex flex-wrap justify-center gap-5">
              <div className="field w-16 h-16">
                <img src={Html} alt="HTML" className="w-full h-full object-contain" />
              </div>
              <div className="field w-16 h-16">
                <img src={Css} alt="CSS" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-base font-normal leading-6 my-8">
              React, Bootstrap, HTML, and CSS are essential for building engaging user interfaces and web applications.
            </p>
            </animated.div>
          </div>

          <div className="backend flex flex-col items-center justify-center text-center my-2 p-4 md:m-0">
          <animated.div ref={backendRef} style={animationFromRight}>
            <h3 className="uppercase text-xl font-semibold my-8">Back-End</h3>
            <div className="logos flex flex-wrap justify-center gap-5 mb-5">
              <div className="field w-16 h-16">
                <img src={Node} alt="Node.js" className="w-full h-full object-contain" />
              </div>
              <div className="field w-16 h-16">
                <img src={Express} alt="Express.js" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="logos flex flex-wrap justify-center gap-5">
              <div className="field w-16 h-16">
                <img src={Postgres} alt="PostgreSQL" className="w-full h-full object-contain" />
              </div>
              <div className="field w-16 h-16">
                <img src={Mysql} alt="MySQL" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-base font-normal leading-6 my-8">
              Node.js, Express.js, PostgreSQL, and MySQL are commonly used for server-side.
            </p>
            </animated.div>
          </div>

          <div className="tools flex flex-col items-center justify-center text-center my-2 p-4 md:m-0">
          <animated.div ref={toolsRef} style={animationFromRight}>
            <h3 className="uppercase text-xl font-semibold my-8">Tools</h3>
            <div className="logos flex flex-wrap justify-center gap-5 mb-5">
              <div className="field w-16 h-16">
                <img src={Git} alt="Git" className="w-full h-full object-contain" />
              </div>
              <div className="field w-16 h-16">
                <img src={Github} alt="GitHub" className="w-full h-full object-contain" />
              </div>
            </div>
            <div className="logos flex flex-wrap justify-center gap-5">
              <div className="field w-16 h-16">
                <img src={VS} alt="Visual Studio Code" className="w-full h-full object-contain" />
              </div>
              <div className="field w-16 h-16">
                <img src={Heroku} alt="Heroku" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-base font-normal leading-6 my-8">
              Git, GitHub, Visual Studio Code, and Heroku are widely used tools for version control.
            </p>
            </animated.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Technologies;
