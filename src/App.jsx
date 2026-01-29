import { useState } from "react";
import { MouseProvider } from "./contexts/MouseContext";
import BackgroundEffects from "./components/BackgroundEffects";
import MouseSpotlight from "./components/MouseSpotlight";
import CursorParticles from "./components/CursorParticles";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Mission from "./components/Mission";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <MouseProvider>
      <BackgroundEffects />
      <MouseSpotlight />
      <CursorParticles />
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Mission />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </MouseProvider>
  );
}

export default App;
