import React from "react";
import {
  UseFormRegister,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";

import HeaderMobile from "../components/layer/MobileHeader";
import Sidebar from "../components/layer/DesktopSidebar";

import Hero from "../components/section/Hero";
import About from "../components/section/About";
import Service from "../components/section/Service";
import Portfolio from "../components/section/Portfolio";
import Contact from "../components/section/Contact";

interface HomeProps {
  form: React.RefObject<HTMLFormElement>;
  register: UseFormRegister<{ name: string; email: string; message: string }>;
  setValue: UseFormSetValue<{ name: string; email: string; message: string }>;
  errors: FieldErrors<{ name: string; email: string; message: string }>;
  sendEmail: (e: React.FormEvent) => void;
  handlePortfolioClick: () => void;
  handleResumeClick: () => void;
  portfolioSectionRef: React.RefObject<HTMLDivElement>;
  contactSectionRef: React.RefObject<HTMLDivElement>;
}

const Home: React.FC<HomeProps> = ({
  form,
  register,
  setValue,
  errors,
  sendEmail,
  portfolioSectionRef,
  contactSectionRef,
  handlePortfolioClick,
  handleResumeClick,
}) => {
  return (
    <div className="main_container">
      <header className="mobile_header">
        <div className="mobile_header_inner">
          <HeaderMobile />
          <Sidebar />
        </div>
      </header>
      <main>
        <Hero
          handlePortfolioClick={handlePortfolioClick}
          handleResumeClick={handleResumeClick}
        />
        <About />
        <Service />
        <Portfolio portfolioSectionRef={portfolioSectionRef} />
        <Contact
          form={form}
          register={register}
          setValue={setValue}
          errors={errors}
          sendEmail={sendEmail}
          contactSectionRef={contactSectionRef}
        />
      </main>
    </div>
  );
};

export default Home;
