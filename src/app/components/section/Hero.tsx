import React from "react";
import ReactTyped from "react-typed";
import { FiLinkedin, FiGithub } from "react-icons/fi";

interface HeroProps {
  handlePortfolioClick: () => void;
  handleResumeClick: () => void;
}

const heroContent = {
  shapeImage: "profile-picture.svg",
  heroImage: "2",
  name: "Abraham J. Ahn",
  description: `Specialized in creating the best digital web experiences.`,
};

const SocialShare = [
  {
    iconName: <FiGithub />,
    link: "https://www.github.com/abrahamahn",
  },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/abrahamahn/",
  },
];

const Hero: React.FC<HeroProps> = ({
  handlePortfolioClick,
  handleResumeClick,
}) => {
  return (
    <div className="hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`assets/hero/${heroContent.heroImage}.jpg`}
            alt="about author"
            className="image"
          />
        </div>
        <div className="extra">
          <h5
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
            className="hello"
          >
            {heroContent.name}
          </h5>
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <span className="typer-toper">
              <ReactTyped
                loop
                typeSpeed={125}
                backSpeed={25}
                strings={[
                  "Software Engineer.",
                  "Web Designer.",
                  "Marketing Manager.",
                ]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </span>
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            {heroContent.description}
          </p>
          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <ul>
              {SocialShare.map((val, i) => (
                <li key={i}>
                  <a href={val.link} target="_blank" rel="noreferrer">
                    {val.iconName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="button-div">
            <div
              className="portfolio"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <button onClick={handlePortfolioClick}>Portfolio</button>
            </div>
            <div
              className="resume"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <button onClick={handleResumeClick}>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;