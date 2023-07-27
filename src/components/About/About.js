import React from "react";
import profileImage from "./profile.jpg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation will only trigger once
    threshold: 0.1, // Set the threshold for the element's visibility in the viewport
  });

  const animation = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-100px)" },
    config: { duration: 1000 },
  });

  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <animated.div ref={ref} style={animation}>
          <div className="text-center capitalize text-xl font-semibold mt-2">
            <h1 className="section-title text-2xl font-serif mb-4">About Me</h1>
            <div className="flex justify-center items-center mt-3">
              <div className="p-3">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="border-2 border-black rounded-full h-16 w-16"
                />
              </div>
            </div>
            <div className="mt-4 ph-5 ">
              <p className="leading-6 text-base pb-[1rem]" style={{ color: "#333333" }}>
                Hello, I'm Mohammad Fahad, a passionate Full Stack Developer actively
                seeking new challenges and growth opportunities.
              </p>
              <p className="leading-6 text-base pb-[1rem]" style={{ color: "#333333" }}>
                With a strong foundation in Computer Science and a burning passion for
                innovation, I strive to deliver high-quality software
              </p>
              <p className="leading-6 text-base pb-[1rem]" style={{ color: "#333333" }}>
                solutions and exceptional user experiences. I stay ahead of emerging
                trends and technologies, keeping myself at
              </p>
              <p className="leading-6 text-base pb-[1rem]" style={{ color: "#333333" }}>
                the forefront of the ever-evolving tech industry.
              </p>
            </div>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default About;
