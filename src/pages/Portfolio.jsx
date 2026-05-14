import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

const Projects = lazy(() => import("./Projects").then((m) => ({ default: m.Projects })));
const Contact = lazy(() => import("./Contact").then((m) => ({ default: m.Contact })));
const Resume = lazy(() => import("./Resume").then((m) => ({ default: m.Resume })));

const PageLoader = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ width: 36, height: 36, border: "3px solid #e8d5ff", borderTopColor: "#531dab", borderRadius: "50%", animation: "spin 0.7s linear infinite" }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export const Portfolio = () => (
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/about" element={<About />} />
    <Route
      path="/projects"
      element={<Suspense fallback={<PageLoader />}><Projects /></Suspense>}
    />
    <Route
      path="/contact"
      element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>}
    />
    <Route
      path="/resume"
      element={<Suspense fallback={<PageLoader />}><Resume /></Suspense>}
    />
  </Routes>
);
