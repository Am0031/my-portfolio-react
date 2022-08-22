import { useLazyQuery } from "@apollo/client";

import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import { DASHBOARD_QUERY } from "../queries/projects";
import { useEffect, useState } from "react";

export const Portfolio = () => {
  const [section, setSection] = useState("about");
  return (
    <div>
      <Navbar />
      {section === "about" && <Banner />}
      {section === "projects" && <Projects />}
      {section === "contact" && <Contact />}

      <Footer />
    </div>
  );
};
