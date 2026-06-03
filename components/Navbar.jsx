import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, setTheme }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full select-none pointer-events-none"
          loading="eager"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50  ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20" : ""}`}
      >
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 font-ovo ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"}`}
        >
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle theme={theme} setTheme={setTheme} />

          <button
            className="cursor-pointer block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image
              src={theme === "dark" ? assets.menu_white : assets.menu_black}
              alt="menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-ovo dark:bg-dark-hover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={theme === "dark" ? assets.close_white : assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
