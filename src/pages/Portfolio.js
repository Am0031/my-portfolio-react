import { useLazyQuery } from "@apollo/client";

import { Banner } from "../components/Banner";
import { Projects } from "../components/Projects";

import { DASHBOARD_QUERY } from "../queries/projects";
import { useEffect } from "react";

export const Portfolio = () => {
  return (
    <div>
      <h1>My portfolio</h1>
      <Banner />
      <Projects title="My projects" />
    </div>
  );
};
