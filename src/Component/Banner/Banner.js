import React from "react";
import Particles from "react-tsparticles";
import Typed from "react-typed";
import "./Banner.css";

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  }
  return (
    <div>
       <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            // value: "#fff",
          },
          links: {
            // color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      <div className="banner">
        <div className="container">
          <div className="row justify-content-center align-items-center banner-info">
            <div className="col-md-6">
              <div className="banner-content">
                <h1>Hello</h1>
                <h3>
                  {" "}
                  I am Israt Korobi{" "}
                  <Typed
                    className="typed-text"
                    strings={[
                      "Web Designer",
                      "Web Developer",
                      "Front End Developer",
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                  />
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit voluptatibus, placeat nesciunt non at eaque odio?
                  Commodi unde sequi itaque!
                </p>
                <a href="resume.pdf" download>
                  Download
                </a>
              </div>
            </div>
            <div className="col-md-6 ms-auto">
              <div className="banner-photo">
                <img
                  className="img-fluid"
                  style={{ borderRadius: "90%" }}
                  src="https://i.ibb.co/Yh9fMhr/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction-176420-1518.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Banner;
