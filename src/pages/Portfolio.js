import { useLazyQuery } from "@apollo/client";

import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Resume } from "../components/Resume";
import { Footer } from "../components/Footer";

import { DASHBOARD_QUERY } from "../queries/projects";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [section, setSection] = useState("about");

  const handleSectionChange = (chosenSection) => {
    setSection(chosenSection);
  };
  return (
    <div>
      <Navbar handleSectionChange={handleSectionChange} />
      {section === "about" && <Banner />}
      {section === "projects" && <Projects />}
      {section === "contact" && <Contact />}
      {section === "resume" && <Resume />}
      <Footer />
    </div>
  );
};
