import React from "react";
import Tilt from "react-parallax-tilt";

const Service: React.FC = () => {
  return (
    <div className="services" id="service">
      <div className="container">
        <div className="title">
          <h3>Services</h3>
        </div>
        <div className="service_list">
          <ul>
            <li data-aos="fade-right" data-aos-duration="1200">
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img
                      className="svg custom"
                      src="assets/service/service-1.svg"
                      alt=""
                    />
                    <div className="service_title">
                      <h3>Marketing</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img
                      className="svg custom"
                      src="assets/service/service-2.svg"
                      alt=""
                    />
                    <div className="service_title">
                      <h3>Management</h3>
                    </div>
                  </div>
                </div>{" "}
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img
                      className="svg custom"
                      src="assets/service/service-3.svg"
                      alt=""
                    />
                    <div className="service_title">
                      <h3>Front-end Dev</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img
                      className="svg custom"
                      src="assets/service/service-4.svg"
                      alt=""
                    />
                    <div className="service_title">
                      <h3>Back-end Dev</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;