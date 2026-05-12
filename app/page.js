"use client";
import { Header, Navbar } from "@/components";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
