import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import NavMenu from "./layout/NavMenu";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import StrollToTop from "./util/StrollToTop";
import Footer from "./layout/Footer";
import LoaderIcon from "./components/LoaderIcon";
import { useState, useEffect } from "react";

import { Box } from "@chakra-ui/react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Box>
      {isLoading ? (
        <LoaderIcon />
      ) : (
        <>
          <Router>
            <NavMenu />
            <StrollToTop />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<AboutMe />}></Route>
              <Route path="/project1" element={<Project1 />}></Route>
              <Route path="/project2" element={<Project2 />}></Route>
              <Route path="/project3" element={<Project3 />}></Route>
            </Routes>
          </Router>
          <Footer />
        </>
      )}
    </Box>
  );
}

export default App;
