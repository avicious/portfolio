"use client";
import { About, Header, Navbar, Services, Work } from "@/components";
import Contact from "@/components/Contact";

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
