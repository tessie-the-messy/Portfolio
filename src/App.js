import "./App.css";
import { HashRouter as Router, Route, Routes} from "react-router-dom"

import AboutMe from "./components/Pages/AboutMe"
import Projects from "./components/Pages/Projects"
import Contact from "./components/Pages/Contact"

function App() {
  return (
   <Router>
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   </Router>
  );
}

export default App;