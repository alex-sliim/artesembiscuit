import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="grain relative min-h-screen bg-cream-50 font-body text-bark-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Products />
        <HowItWorks />
        <About />
        <Testimonials />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
