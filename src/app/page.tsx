import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import AccelerateSales from "./components/AccelerateSales";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Resources from "./components/Resources";
import DemoCTA from "./components/DemoCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      {/* <TrustedBy /> */}
      <HowItWorks />
      <Features />
      <AccelerateSales />
      <Testimonials />
      <Pricing />
      {/* <Resources /> */}
      <DemoCTA />
      <Footer />
    </main>
  );
}
