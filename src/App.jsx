import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import About from "./components/About";
import Question from "./components/Question";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <About />
        <Question/>
      </main>
      <Footer />
    </>
  );
}
