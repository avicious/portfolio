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
import { useTheme } from "next-themes";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />
      <Toaster />
      <Header />
      <About theme={theme} />
      <Services />
      <Work theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </>
  );
}
