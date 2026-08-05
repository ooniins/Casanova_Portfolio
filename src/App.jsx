import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GridCursorHighlight from "./components/GridCursorHighlight";

export default function App() {
  return (
    <>
      <GridCursorHighlight />
      <Navbar />
      <main>
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}