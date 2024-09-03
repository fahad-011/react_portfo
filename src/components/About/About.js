import React from "react";
import profileImage from "./profile.jpg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animation = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? "translateX(0)" : "translateX(-100px)",
    },
    config: { duration: 1000 },
  });

  return (
    <section
      id="about"
      className="min-h-screen bg-white flex justify-center items-center"
    >
      <div className="container mx-auto px-4 py-8">
        <animated.div ref={ref} style={animation}>
          <div className="text-center capitalize text-xl font-semibold mt-2">
            <h1 className="section-title text-2xl font-serif mb-4">About Me</h1>
            <div className="flex justify-center items-center mt-3">
              <div className="p-3">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="border-2 border-black rounded-full h-24 w-26"
                />
              </div>
            </div>
            <div className="mt-4 ph-5 ">
              <p
                className="leading-6 text-base pb-[1rem]"
                style={{ color: "#333333" }}
              >
                Hello! I'm Fahad Rahman, a Full Stack Developer with a keen
                interest in exploring new challenges and growth opportunities.
              </p>
              <p
                className="leading-6 text-base pb-[1rem]"
                style={{ color: "#333333" }}
              >
                I'm enthusiastic about creating high-quality software solutions
                that resonate with user experiences.
              </p>
              <p
                className="leading-6 text-base pb-[1rem]"
                style={{ color: "#333333" }}
              >
                I'm delving into DevOps, Kubernetes, and other cutting-edge
                technologies while actively contributing to open-source
                projects.
              </p>
              <p
                className="leading-6 text-base pb-[1rem]"
                style={{ color: "#333333" }}
              >
                I'm committed to staying at the forefront of innovation.
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
