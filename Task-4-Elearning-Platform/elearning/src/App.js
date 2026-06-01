import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import VideoSection from "./components/VideoSection";
import Dashboard from "./components/Dashboard";
import Certificate from "./components/Certificate";
import Footer from "./components/Footer";
import "./components/ELearningPlatformUI.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <VideoSection />
      <Dashboard />
      <Certificate />
      <Footer />
    </>
  );
}

export default App;