"use client";
import { About, Header, Navbar, Services } from "@/components";
import Contact from "@/components/Contact";
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
