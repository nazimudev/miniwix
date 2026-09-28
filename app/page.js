import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Projects from "./components/home/Projects";
import CustomSolution from "./components/home/CustomSolution";
import Technologies from "./components/home/Technologies";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-(--color-border)">
          <Projects />
        </div>
      </div>
      <CustomSolution />
      <Technologies />
      <CTA />
    </main>
  );
}
