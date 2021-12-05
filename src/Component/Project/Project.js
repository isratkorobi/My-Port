import React from 'react';
import './Project.css';
import bg from '../../image/img1.jpg';
import cg from '../../image/img2.jpg';
import dg from '../../image/img3.jpg';
const Project = () => {
    return (
        <div id="project">
            <h2 className="text-center p-2 mt-5 pt-5 mb-3">MY PROJECT</h2>
            <div className="container">
         <div className="row g-4 mb-5">
          <div className="col-md-4">
            <img className="img-fluid pro-img" src={bg} alt="" />
            <div>
              <h3>Medico.</h3>
              <ul>
                <li>This is a doctor project dentist website</li>
                <li>Dynamic responsive react template website</li>
                <li>Multi page website also Dynamic Route</li>
                <li>User can Login and Register with google </li>
                <li>User can Login and Register with email</li>
                <li>User can appointment for their service.</li>
                <li>Also use this project Mongodb atlas,React Router Dom,React Bootstrap,Firebase Authentication,Heroku deploy.</li>
              </ul>
              <div className="link">
              <a href="https://dentist-medico-service.web.app/" target="_blank">Live Link</a>
              <a href="https://github.com/isratkorobi/Medico." target="_blank">Client Code</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={dg} alt="" />
            <div>
              <h3>Foodota.</h3>
              <ul>
              <li>This is a online Food delivery website.</li>
                <li>A responsive Dentist website</li>
                <li>Fully responsive and Dynamic react template</li>
                <li>Multi page website,Dynamic Route.</li>
                <li>User can Login and Register with google & email. </li>
                <li>Also use this project Mongodb atlas,React Router Dom,Firebase Authentication,Heroku deploy.</li>
              </ul>
              <div className="link">
              <a href="https://food-delivery-a4f61.web.app/" target="_blank">Live Link</a>
              <a href="https://github.com/isratkorobi/Foodota-Client-site" target="_blank">Client Code</a>
              <a href="https://github.com/isratkorobi/Foodota-Server-Site" target="_blank">Server Code</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img className="img-fluid" src={cg} alt="" />
            <div>
              <h3>Timekeeper.</h3>
              <ul>
                <li>This is online watch selling shop website.</li>
                <li>Dynamic responsive react template website</li>
                <li>admin can view all the necessary items.</li>
                <li>To order, first user has to register then they can place order.</li>
                <li>User can Login and Register with google and email </li>
                <li>Using Firebase Authentication , Heroku for deploy site</li>
              </ul>
              <div className="link">
              <a href="https://timekeeper-e7ff2.web.app/" target="_blank">Live Link</a>
              <a href="https://github.com/isratkorobi/TimeKeeper-Online-Shop" target="_blank">Client Code</a>
              <a href="https://github.com/isratkorobi/TimeKeeper-server-code" target="_blank">Server Code</a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
        </div>
    );
};

export default Project; 
