import React from "react";
import "./Technologies.css";
import "tachyons";
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

const Technologies = () => {
  return (
    <section id="technologies" className="technologies-section">
      <div className="container">
        <div className="technologies-grid">
          <div className="languages">
            <h3 className="tc uppercase f3 fw5 ma4">Languages</h3>
            <div className="logos flex flex-wrap">
              <div className="field">
                <img src={Java} alt="Java" className="w4 h4 ma2" />
                <img src={C} alt="C" className="w3 h3 ma2" />
              </div>
              <div className="field">
                <img src={Js} alt="JavaScript" className="w3 h3 ma2" />
                <img src={Python} alt="Python" className="w3 h3 ma2" />
              </div>
            </div>
            <p className="tc f5 fw4 lh-copy">
              Java, C, JavaScript, and Python are popular programming languages used for various purposes.
            </p>
          </div>
          <div className="frontend">
            <h3 className="tc uppercase f3 fw5 ma4">Front-End</h3>
            <div className="logos flex flex-wrap">
              <div className="field">
                <img src={Reactjs} alt="React" className="w4 h4 ma2" />
                <img src={Bootstrap} alt="Bootstrap" className="w4 h4 ma2" />
              </div>
              <div className="field">
                <img src={Html} alt="HTML" className="w3 h3 ma2" />
                <img src={Css} alt="CSS" className="w3 h3 ma2" />
              </div>
            </div>
            <p className="tc f5 fw4 lh-copy">
              React, Bootstrap, HTML, and CSS are essential for building engaging user interfaces and web applications.
            </p>
          </div>
          <div className="backend">
            <h3 className="tc uppercase f3 fw5 ma4 ">Back-End</h3>
            <div className="logos flex flex-wrap">
              <div className="field">
                <img src={Node} alt="Node.js" className="w4 h4 ma2" />
                <img src={Express} alt="Express.js" className="w4 h4 ma2" />
              </div>
              <div className="field">
                <img src={Postgres} alt="PostgreSQL" className="w3 h3 ma2" />
                <img src={Mysql} alt="MySQL" className="w3 h3 ma2" />
              </div>
            </div>
            <p className="tc f5 fw4 lh-copy">
              Node.js, Express.js, PostgreSQL, and MySQL are commonly used for server-side.
            </p>
          </div>
          <div className="tools">
            <h3 className="tc uppercase f3 fw5 ma4">Tools</h3>
            <div className="logos flex flex-wrap">
              <div className="field">
                <img src={Git} alt="Git" className="w4 h4 ma2" />
                <img src={Github} alt="GitHub" className="w4 h4 ma2" />
              </div>
              <div className="field">
                <img src={VS} alt="Visual Studio Code" className="w3 h3 ma2" />
                <img src={Heroku} alt="Heroku" className="w3 h3 ma2" />
              </div>
            </div>
            <p className="tc f5 fw4 lh-copy">
              Git, GitHub, Visual Studio Code, and Heroku are widely used tools for version control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
