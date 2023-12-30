import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export const revalidate = 10; // revalidate page every 10 seconds

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
