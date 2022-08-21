import { useLazyQuery } from "@apollo/client";

import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

import { DASHBOARD_QUERY } from "../queries/projects";
import { useEffect } from "react";

export const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Projects title="My projects" />
      <Contact />
    </div>
  );
};
