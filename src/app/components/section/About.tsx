import React, { useState } from "react";
import ModalContent from "../modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const skillsContent = [
    {
      name: "React.js",
      skillPercent: "85",
    },
    {
      name: "Next.js",
      skillPercent: "75",
    },
    {
      name: "C/C++",
      skillPercent: "75",
    },
    {
      name: "Typescript",
      skillPercent: "68",
    },
    {
      name: "Python",
      skillPercent: "70",
    },
    {
      name: "Marketing",
      skillPercent: "75",
    },
  ];

  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>Hello!</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <p>
                I specialize in designing and building marvelous digital web
                experiences and letting people know about them. Currently, I am
                building different web app modules related to music, multimedia,
                and social media.
              </p>
            </div>
            <div className="my_skills">
              <p className="desc">
                I've had an early fascination for music, software engineering,
                web development, design, and marketing since the launch of
                Soundcloud in 2017.
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <>
                    {skillsContent.map((val, i) => (
                      <div className="progress_inner" key={i}>
                        <span className="label">{val.name}</span>
                        <div className="background">
                          <div className="bar">
                            <div
                              className="bar_in"
                              style={{ width: val.skillPercent + "%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                </div>
              </div>
              <div className="button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="rightpart">
            <div className="image">
              <img src="assets/thumbs/26-35.jpg" alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "assets/about/2.jpg"
                  })`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/assets/sidebar/cancel.svg" alt="close icon" />
          </button>
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default About;
