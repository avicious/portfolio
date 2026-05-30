"use client";
import {
  About,
  Contact,
  Footer,
  Header,
  Navbar,
  Services,
  Work,
} from "@/components";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Navbar />
      <Toaster />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}
