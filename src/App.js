// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// components
import NavBar from "./components/NavBar";

// stylesheet
import "./App.css"

function App() {
    const routerBaseName = process.env.PUBLIC_URL;

    return (
        // client-side routing
        <BrowserRouter basename={routerBaseName}>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="contact" element={<Contact />}/>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
