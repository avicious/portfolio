"use client";
import { About, Contact, Header, Navbar, Services, Work } from "@/components";

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
