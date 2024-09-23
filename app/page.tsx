import Features from "@/components/Features";
import { BackgroundCellAnimation } from "@/components/Hero";
import { FloatingNavDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <FloatingNavDemo />
      <BackgroundCellAnimation />
      <Features />
    </div>
  );
}
