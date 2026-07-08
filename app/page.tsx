import Image from "next/image";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import AboutUs from "./components/AboutUs";
import SaveEarn from "./components/SaveEarn";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Faq from "./components/Faq";
import Security from "./components/Security";
import Solution from "./components/Solution";
import Financial from "./components/Financial";
import DigitalBanking from "./components/DigitalBanking";
import TrustPilot from "./components/TrustPilot";
import Teams from "./components/Teams";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <WhyUs />
        <AboutUs />
        <SaveEarn />
        <Journey />
        <Services />
        <Faq />
        <Security />
        <Solution />
        <Financial />
        <DigitalBanking />
        <TrustPilot />
        <Teams />
      </main>
      <Footer />
    </>
  );
}
