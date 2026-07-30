import ProductRange from "@/sections/ProductRange";
import AboutProductGrid from "../sections/AboutProduct";
import Hero from "../sections/Hero";
import ProductSection from "../sections/ProductSection";
import CTA from "../sections/CTA";
import Features from "@/sections/Features";
import ContactPage from "@/sections/Contact";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import HowWeWork from "@/sections/HowWeWork";

export default function Home() {  
  const products = [
    { id: 1, src: "/images/p1.png", name: "Aluminium Band Heaters" },
    { id: 2, src: "/images/p2.png", name: "	Aluminium Casted Band Heaters" },
    { id: 3, src: "/images/p3.png", name: "Blower Jackets for Band Heaters" },
    { id: 4, src: "/images/p4.png", name: "Nano Infrared Band Heaters" },
    { id: 5, src: "/images/p5.png", name: "Box Strapping Machine Heater" },
    { id: 6, src: "/images/p6.png", name: "CERAMIC BAND HEATERS" },
    { id: 7, src: "/images/p7.png", name: "Ceramic Nozzle Heaters" },
    { id: 8, src: "/images/p8.png", name: "HOT RUNNER MOLD COIL HEATERS" },
    {
      id: 9,
      src: "/images/p9.png",
      name: "MEDIUM WAVE SILICA OR QUARTZ TUBE INFRARED HEATERS",
    },
    { id: 10, src: "/images/p4.png", name: "CAST IN HEATERS" },
    { id: 11, src: "/images/p5.png", name: "MANIFOLD HEATERS" },
    { id: 12, src: "/images/p6.png", name: "TUBULAR HEATERS" },
    { id: 13, src: "/images/p7.png", name: "Leister Hot Air Gun Heater" },
    { id: 14, src: "/images/p8.png", name: "Short Wave Infrared Heater" },
    { id: 15, src: "/images/p9.png", name: "Ceramic IR Heater" },
    { id: 16, src: "/images/p10.png", name: "MICA BAND HEATERS" },
    { id: 17, src: "/images/p11.png", name: "Mica Band Heaters" },
  ];
  return (
    <>
      <Hero />
      <AboutProductGrid />
      <ProductRange title={"Our Popular Products"} products={products} />
      <CTA />
      <HowWeWork />
      <Features />
      <ProductSection />
      <Testimonials />
      <FAQ />
      <ContactPage />
    </>
  );
}
