import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import config from "./config.json";
import Project from "./pages/Project";
import { useCallback, useEffect } from "react";
import Saved from "./pages/Saved";
import "./App.css";
import "./css/theme.css";

function App() {
  const { home, projects, project, saved } = config.routes;
  const location = useLocation();

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [location, scrollToTop]);

  return (
    <div className="App">
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={projects} element={<Projects />} />
        <Route path={project} element={<Project />} />
        <Route path={saved} element={<Saved />} />
      </Routes>
    </div>
  );
}

export default App;
