import React from "react";

interface ExperienceItem {
  year: string;
  img: string;
  position: string;
  compnayName: string;
  details: string;
}

const experienceContent: ExperienceItem[] = [
  {
    year: "Jan 2018 - Present",
    img: "/assets/icon/cashrollie.jpg",
    position: " Founder",
    compnayName: "Cashrollie",
    details: `  Music production and publishing company for artists and content creators.`,
  },
  {
    year: "Mar 2017 - Dec 2017",
    img: "/assets/icon/nick.jpg",
    position: "Web Developer and Marketing Manager",
    compnayName: "Nick Hadim Group of Companies",
    details: `Commercial real estate property management company based in Los Angeles.`,
  },
  {
    year: "Jan 2016 - Oct 2016",
    img: "/assets/icon/sunrun.jpg",
    position: "Sales Associate",
    compnayName: "Sunrun",
    details: `Generated $100,000+/yr revenue with door-to-door sales, 4,000+/mo cold prospects, and averaged 60+/mo closes.`,
  },
  {
    year: "May 2014 - Present",
    img: "/assets/icon/portal.jpg",
    position: "Founder & Freelancer",
    compnayName: "Portal Music Group",
    details: `Client: Transparent Agency, Far East Movement, Dumbfoundead, Native Instruments, Splice, Google, KIA, GE, Ensure, JW Marriott, Markus Persson, Ultra Music Festival`,
  },
  {
    year: "Aug 2013 - Dec 2013",
    img: "/assets/icon/axs.jpg",
    position: "Product and Marketing Intern",
    compnayName: "AXS.com",
    details: `Online ticketing service platform owned by Anschutz Entertainment Group (AEG).`,
  },
];

const Experience: React.FC = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src={val.img} alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
