"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Experience />
      <Projects />
    </div>
  );
}
