import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaFilePdf, FaEnvelope, FaArrowDown } from "react-icons/fa";
import ParticlesBg from "particles-bg";
import { Link } from "react-scroll";

const Home = () => {

  const [numParticles, setNumParticles] = useState(85);

  useEffect(() => {
    function updateNumParticles() {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setNumParticles(isMobile ? 35 : 85);
    }

    updateNumParticles();
    window.addEventListener("resize", updateNumParticles);
    return () => {
      window.removeEventListener("resize", updateNumParticles);
    };
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <ParticlesBg num={numParticles} type="lines" color="#000000" bg={true} />
      <div className="flex flex-col items-center mx-4 md:mx-8 lg:mx-16"> {/* Added mx classes for margin */}
      <h1 className="text-center capitalize text-2xl md:text-3xl lg:text-4xl font-medium text-white my-3">Mohammad Fahad Rahman</h1>
        <h2 className="text-center capitalize text-2xl md:text-3xl lg:text-4xl font-semibold text-white mt-3">
          Programmer | Full Stack Developer | Javascript Developer
        </h2>
        <div className="mt-6 flex items-center">
          <a href="https://www.linkedin.com/in/mohammad-fahad-rahman-a41a92233/" className="link dim text-white mr-3">
            <FaLinkedin className="f2 col" />
          </a>
          <a href="https://github.com/roc102" className="link dim text-white mr-3">
            <FaGithub className="f2 col" />
          </a>
          <a href="https://drive.google.com/file/d/1ko5IGlUkCSeWof-egxdXErDEkDE6eGYU/view?usp=sharing" className="link dim text-white mr-3">
            <FaFilePdf className="f2 col" />
          </a>
            <a href="mailto:mdfahadrahman1969@gmail.com" className="link dim text-white">
          <FaEnvelope className="f2 col" />
</a>
        </div>
      </div>
      {/* Scroll To Down Button */}
      <div className="flex flex-col justify-center items-center mt-8 absolute bottom-10">
        <Link
          activeClass="active"
          to="about" // Add the ID of the section where you want to scroll to
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="cursor-pointer animate-bounce text-white"
        >
          <FaArrowDown className="text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
