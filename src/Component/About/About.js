import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-me">
      <h1 className="text-center text-white pt-3">ABOUT MYSELF</h1>
      <div className="container">
        <div className="row justify-content-center align-items-center about-info">
          <div className="col-md-5 ms-auto">
            <div className="about-photo">
              <img
                className="img-fluid"
                src="https://i.ibb.co/tHtjNc9/profile-pic-12.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="about-content">
              <h1>Hello</h1>
              <h3>I am Israt Korobi</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                voluptatibus, placeat nesciunt non at eaque odio? Commodi unde
                sequi itaque!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
