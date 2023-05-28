import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PortfolioProps {
  portfolioSectionRef: React.RefObject<HTMLDivElement>;
}
const Portfolio: React.FC<PortfolioProps> = ({ portfolioSectionRef }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="portfolio" id="portfolio" ref={portfolioSectionRef}>
      <div className="portfolio_container">
        <div className="title">
          <h3>Portfolio</h3>
        </div>
        <div className="text">
          <p>Click the photo to view projects in detail.</p>
        </div>
        <div className="portfolio_inner my_carousel gallery_zoom">
          <ul data-aos="fade-right" data-aos-duration="1200">
            <Slider {...settings}>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://stirring-quokka-68f366.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="assets/portfolio/auto-connect.jpg"
                        alt="Auto Connect"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://transaction-approvals.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="assets/portfolio/transaction-approval.jpg"
                        alt="Transaction Approvals"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://blendtune.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="assets/portfolio/blendtune.jpg"
                        alt="Blendtune Music Player"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://cashrollie.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="assets/portfolio/cashrollie.jpg"
                        alt="Portfolio"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://linktr.ee/cashrollie"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="assets/portfolio/cashrollie-sns.jpg"
                        alt="Cashrollie"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div className="list_inner">
                  <div className="image">
                    <a
                      href="https://nickhadim.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="details"
                    >
                      <img
                        src="assets/portfolio/nickhadim.jpg"
                        alt="Nick Hadim"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;