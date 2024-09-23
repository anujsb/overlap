import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { BackgroundCellAnimation } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNavDemo />
      <BackgroundCellAnimation />
      <Features />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
