import React from "react";
import Humaridukan from "./img/Humari Dukan.jpg";
import FaceRecognitionAppImage from "./img/FaceRecognition.png";
import Hideandseek from "./img/Hide and Seek.png";
import Robofriend from "./img/Robofriend.png";
import zomatoClone from "./img/zomato-clone.png";
import bookMyShowClone from "./img/bookmyshowClone.png";
import Js from "../Technologies/Logo/js.svg";
import Reactjs from "../Technologies/Logo/react.svg";
import Bootstrap from "../Technologies/Logo/bootstrap.svg";
import Redux from "../Technologies/Logo/redux.svg";
import Express from "../Technologies/Logo/express.svg";
import Node from "../Technologies/Logo/nodejs.svg";
import Postgres from "../Technologies/Logo/postgresql.svg";
import mongodb from "../Technologies/Logo/mongodb.svg";
import Tailwind from "../Technologies/Logo/tailwind.svg";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Project = () => {
  const [card1ImageRef, card1ImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const card1ImageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: {
      opacity: card1ImageInView ? 1 : 0,
      transform: card1ImageInView ? "translateX(0)" : "translateX(-100px)",
    },
    config: { duration: 1000 },
  });

  const [card2ImageRef, card2ImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const card2ImageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: {
      opacity: card2ImageInView ? 1 : 0,
      transform: card2ImageInView ? "translateX(0)" : "translateX(100px)",
    },
    config: { duration: 1000 },
  });

  const [card3ImageRef, card3ImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const card3ImageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: {
      opacity: card3ImageInView ? 1 : 0,
      transform: card3ImageInView ? "translateX(0)" : "translateX(-100px)",
    },
    config: { duration: 1000 },
  });

  const [card4ImageRef, card4ImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const card4ImageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: {
      opacity: card4ImageInView ? 1 : 0,
      transform: card4ImageInView ? "translateX(0)" : "translateX(100px)",
    },
    config: { duration: 1000 },
  });

  const [card5ImageRef, card5ImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const card5ImageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: {
      opacity: card5ImageInView ? 1 : 0,
      transform: card5ImageInView ? "translateX(0)" : "translateX(100px)",
    },
    config: { duration: 1000 },
  });

  const [card6ImageRef, card6ImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const card6ImageAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(100px)" },
    to: {
      opacity: card6ImageInView ? 1 : 0,
      transform: card6ImageInView ? "translateX(0)" : "translateX(100px)",
    },
    config: { duration: 1000 },
  });

  return (
    <section id="Project" className="bg-gray-100 py-10">
      <div className="container mx-auto max-w-6xl bg-white p-4 rounded-lg shadow-md m-10">
        <h2 className="text-3xl uppercase font-serif mb-12 mt-6 text-center ">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:items-center">
          {/* Project 1 */}

          <div className="p-4 flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-serif mb-4 text-center">
                Book My Show Clone
              </h2>
              <p
                className="font-serif mb-4 pb-[1rem]"
                style={{ color: "#333333" }}
              >
                This React-based application aims to replicate the user
                interface and functionality of the popular entertainment
                ticketing platform, Book My Show.
              </p>
              <div className="flex mb-4 justify-center">
                {/* Add tech stack images here */}
                <img
                  src={mongodb}
                  alt="Tech Stack 1"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Express}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Reactjs}
                  alt="Tech Stack 3"
                  className="w-8 h-8 mr-2"
                />
                <img src={Node} alt="Tech Stack 4" className="w-8 h-8 mr-2" />
                {/* Add more tech stack images as needed */}
              </div>
              <div className="text-center pt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    (window.location.href =
                      "https://bookmyshow-clone-portal.netlify.app/")
                  }
                >
                  Check it out
                </button>
              </div>
            </div>
          </div>

          {/* Book My Show Clone Image */}
          <div className="flex justify-center items-center p-4">
            <animated.img
              ref={card6ImageRef}
              src={bookMyShowClone}
              alt="Book My Show Clone"
              className="w-76 h-auto rounded-lg"
              style={card6ImageAnimation}
            />
          </div>

          {/* Project 2 */}

          {/* zomatoClone Image */}
          <div className="flex justify-center items-center p-4">
            <animated.img
              ref={card5ImageRef}
              src={zomatoClone}
              alt="hide"
              className="w-76 h-auto rounded-lg"
              style={card5ImageAnimation}
            />
          </div>

          <div className="p-4 flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-serif mb-4 text-center">
                Zomato Clone
              </h2>
              <p
                className="font-serif mb-4 pb-[1rem]"
                style={{ color: "#333333" }}
              >
                This React-based application aims to replicate the user
                interface and functionality of the popular food delivery
                platform, Zomato.
              </p>
              <div className="flex mb-4 justify-center">
                {/* Add tech stack images here */}
                <img
                  src={Reactjs}
                  alt="Tech Stack 1"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Bootstrap}
                  alt="Tech Stack 1"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Tailwind}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                <img src={Js} alt="Tech Stack 2" className="w-8 h-8 mr-2" />
                {/* Add more tech stack images as needed */}
              </div>
              <div className="text-center pt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    (window.location.href =
                      "https://zomato-clone-portal.vercel.app")
                  }
                >
                  Check it out
                </button>
              </div>
            </div>
          </div>

          {/* Project 3 */}

          <div className="p-4 flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-serif mb-4 text-center">
                E-Commerce Website
              </h2>
              <p
                className="font-serif mb-4 pb-[1rem]"
                style={{ color: "#333333" }}
              >
                An engaging E-Commerce website utilizing React with Redux and
                Bootstrap featuring a visually appealing image carousel,
                interactive checkout system.
              </p>
              <div className="flex mb-4 justify-center">
                {/* Add tech stack images here */}
                <img src={Redux} alt="Tech Stack 1" className="w-8 h-8 mr-2" />
                <img
                  src={Reactjs}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Bootstrap}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Tailwind}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                {/* Add more tech stack images as needed */}
              </div>
              <div className="text-center pt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    (window.location.href =
                      "https://e-commerce-website-portal.vercel.app")
                  }
                >
                  Check it out
                </button>
              </div>
            </div>
          </div>

          {/* E-commerce web */}
          <div className="flex justify-center items-center p-4">
            <animated.img
              ref={card1ImageRef}
              src={Humaridukan}
              alt="Humari Dukan"
              className="w-76 h-auto rounded-lg"
              style={card1ImageAnimation}
            />
          </div>

          {/* Project 4 Card */}

          <div className="p-4 flex flex-col-reverse md:flex-row justify-center items-center">
            {/* Face Recognition Image */}

            <animated.img
              ref={card2ImageRef}
              src={FaceRecognitionAppImage}
              alt="Humari Dukan"
              className="w-76 h-auto rounded-lg"
              style={card2ImageAnimation}
            />
          </div>

          {/* Project 4 Contents */}

          <div className="flex justify-center items-center p-4">
            <div className="bg-white p-4 rounded-lg  max-w-md">
              <h2 className="text-xl font-serif mb-4 text-center">
                Face Recognition Brain
              </h2>
              <p
                className="font-serif mb-4 pb-[1rem]"
                style={{ color: "#333333" }}
              >
                An AI-powered face detection web app with a responsive React
                frontend. The backend guarantees faster responses and
                scalability through the implementation of Express, API Node and
                a robust database.
              </p>
              <div className="flex mb-4 justify-center">
                {/* Add tech stack images here */}
                <img
                  src={Reactjs}
                  alt="Tech Stack 1"
                  className="w-8 h-8 mr-2"
                />
                <img src={Node} alt="Tech Stack 2" className="w-8 h-8 mr-2" />
                <img
                  src={mongodb}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Express}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                {/* Add more tech stack images as needed */}
              </div>
              <div className="text-center pt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded "
                  onClick={() =>
                    (window.location.href =
                      "https://roc102.github.io/smart-brain")
                  }
                >
                  Check it out
                </button>
              </div>
            </div>
          </div>

          {/* Project 5 */}

          <div className="p-4 flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="bg-white p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-serif mb-4 text-center">
                Hide and Seek
              </h2>
              <p
                className="font-serif mb-4 pb-[1rem]"
                style={{ color: "#333333" }}
              >
                An exciting web game crafted with JavaScript and React. Engage
                in the challenge of discovering hidden gifts Test your luck and
                immerse yourself in this delightful and entertaining gaming
                experience.
              </p>
              <div className="flex mb-4 justify-center">
                {/* Add tech stack images here */}
                <img
                  src={Reactjs}
                  alt="Tech Stack 1"
                  className="w-8 h-8 mr-2"
                />
                <img src={Js} alt="Tech Stack 1" className="w-8 h-8 mr-2" />
                <img
                  src={Bootstrap}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                <img
                  src={Tailwind}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                {/* Add more tech stack images as needed */}
              </div>
              <div className="text-center pt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    (window.location.href =
                      "https://hide-and-seek-weld.vercel.app/")
                  }
                >
                  Check it out
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center p-4">
            <animated.img
              ref={card3ImageRef}
              src={Hideandseek}
              alt="hide"
              className="w-76 h-auto rounded-lg"
              style={card3ImageAnimation}
            />
          </div>

          {/* Project 6 */}

          <div className="p-4 flex flex-col-reverse md:flex-row justify-center items-center">
            {/* Face Recognition Image */}

            <animated.img
              ref={card4ImageRef}
              src={Robofriend}
              alt="Robofriend"
              className="w-76 h-auto rounded-lg"
              style={card4ImageAnimation}
            />
          </div>

          <div className="flex justify-center items-center p-4">
            <div className="bg-white p-4 rounded-lg max-w-md">
              <h2 className="text-xl font-serif mb-4 text-center">
                RoboFriends
              </h2>
              <p
                className="font-serif mb-4 pb-[1rem]"
                style={{ color: "#333333" }}
              >
                Robofriends is a web application that features random robot
                generation. It utilizes an API to dynamically create unique
                robots with visually appealing designs by combining various
                robot components and names.
              </p>
              <div className="flex mb-4 justify-center">
                {/* Add tech stack images here */}
                <img
                  src={Reactjs}
                  alt="Tech Stack 1"
                  className="w-8 h-8 mr-2"
                />
                <img src={Redux} alt="Tech Stack 1" className="w-8 h-8 mr-2" />
                <img
                  src={Tailwind}
                  alt="Tech Stack 2"
                  className="w-8 h-8 mr-2"
                />
                <img src={Js} alt="Tech Stack 2" className="w-8 h-8 mr-2" />
                {/* Add more tech stack images as needed */}
              </div>
              <div className="text-center pt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    (window.location.href =
                      "https://roc102.github.io/Robofriend/")
                  }
                >
                  Check it out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
