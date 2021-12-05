import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about">
    <div className="container">
      <div className="row align-items-center pt-5 mb-5">
        <div className="col-md-5 col-sm-12">
          <img
            className="img-fluid about-photo"
            src="https://i.ibb.co/ZKGQx1w/profile-pic-15.png"
            alt=""
          />
        </div>
        <div className="col-md-7">
          <div className="about-content">
              <h2 className="text-white">About Myself</h2>
              {/* <div className="about-content "> */}
               <h1>Hi,</h1>
<p>
             My name is Israt Zahan korobi.I am studing BBA Honours 2nd year in Accounting.I am a Mern Stack developer.In this case i did many project by using react js and also added some library. Recently i have finished a Mern stack course by Programming hero.Thats why I know about Node js,React Router,Firebase Auhtentication,Heroku deploy,Payment gateway. And i also use this things when i did my project.I like to do these project.And I want to learn new things.
              </p>
              <div className="skill-icon">
             <i class="fab fa-html5"></i>
              <i class="fab fa-css3-alt"></i>
              <i class="fab fa-js-square"></i>
             <i class="fab fa-bootstrap"></i>
             <i class="fab fa-node"></i>
           <i class="fab fa-react"></i>
               <i class="fab fa-mdb"></i>
               </div>
             </div>
            </div>
          </div>
        </div>
      </div>
      // </div>
  );
};

export default About;
