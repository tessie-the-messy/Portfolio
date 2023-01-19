import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (<div>
    <Header />
    <main>
    <AboutMe />
    <Projects />
    <Contact />
    </main>
    <Footer />
  </div>);
}

export default App;
