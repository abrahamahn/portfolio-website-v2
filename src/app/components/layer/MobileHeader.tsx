import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderMobile: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  return (
    <>
      {isMobile && (
        <div className="logo">
          <Link to="/">
            <img
              className="logo_dark"
              src={`assets/sidebar/logo.png`}
              alt="brand"
            />
            <img
              className="logo_light"
              src={`assets/sidebar/logo.png`}
              alt="brand"
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
