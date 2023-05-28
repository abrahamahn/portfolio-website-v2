import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

interface SidebarItem {
  icon: string;
  itemName: string;
  itemRoute: string;
  activeClass: string;
}

const sidebarContent: SidebarItem[] = [
  {
    icon: "home",
    itemName: "Home",
    itemRoute: "#home",
    activeClass: "active",
  },
  {
    icon: "about",
    itemName: "About",
    itemRoute: "#about",
    activeClass: "",
  },
  {
    icon: "service",
    itemName: "Service",
    itemRoute: "#service",
    activeClass: "",
  },
  {
    icon: "portfolio",
    itemName: "Portfolio",
    itemRoute: "#portfolio",
    activeClass: "",
  },
  {
    icon: "contact",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

interface SidebarFooterContent {
  avatar: string;
  name: string;
  email: string;
  emailRef: string;
}

const sidebarFooterContent: SidebarFooterContent = {
  avatar: "assets/sidebar/avatar.jpg",
  name: "Abraham J. Ahn",
  email: "satmorningrain@gmail.com",
  emailRef: "mailto:satmorningrain@gmail.com",
};

const Sidebar: React.FC = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
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
        <div className="mob-header">
          <button className="toggler-menu" onClick={handleClick}>
            <div className={click ? "active" : ""}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      )}

      {/* End Mobile Header */}
      <div className={click ? "sidebar menu-open" : "sidebar"}>
        <div className="sidebar_inner">
          <div className="logo">
            <Link to="/">
              <img
                className="logo_dark"
                src={`/assets/sidebar/logo.png`}
                alt="brand"
              />
            </Link>
          </div>
          {/* End .logo */}

          <div className="menu">
            <ScrollspyNav
              scrollTargetIds={["home", "about", "service", "portfolio", "contact"]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sidebarContent.map((val, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={val.itemRoute}
                        className={val.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          className="svg custom"
                          src={`assets/sidebar/${val.icon}.svg`}
                          alt="icon"
                        />
                        {val.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          {/* End .menu */}

          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + sidebarFooterContent.avatar})`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3>{sidebarFooterContent.name}</h3>
                <a href={sidebarFooterContent.emailRef}>
                  {sidebarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
          {/* End author */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
