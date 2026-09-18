import React from "react";

interface PersonalInfoItem {
  meta: string;
  metaInfo: string;
}

// Keep public profile details professional and location information broad.
const personalInfoContent: PersonalInfoItem[] = [
  { meta: "Name", metaInfo: "Abe Ahn" },
  { meta: "Role", metaInfo: "Software Engineer" },
  { meta: "Based in", metaInfo: "United States / South Korea" },
  { meta: "Remote", metaInfo: "Available" },
  { meta: "In-Office", metaInfo: "Available" },
  { meta: "Languages", metaInfo: "English, Korean, Spanish" },
];

const PersonalInfo: React.FC = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
