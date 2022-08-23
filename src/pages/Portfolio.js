import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Resume } from "./Resume";

export const Portfolio = () => {
  // const [section, setSection] = useState("about");

  // const handleSectionChange = (chosenSection) => {
  //   setSection(chosenSection);
  // };
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      {/* <div>
        {section === "about" && <About />}
        {section === "projects" && <Projects />}
        {section === "contact" && <Contact />}
        {section === "resume" && <Resume />}
      </div> */}
    </Routes>
  );
};
