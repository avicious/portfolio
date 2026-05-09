import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="">
        <Image
          src={assets.profile_img}
          alt="Shubham"
          className="rounded-full w-32"
        />
      </div>
      <h1 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'm Shubham{" "}
        <Image src={assets.hand_icon} alt="hand" className="w-6" />
      </h1>
      <p className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        full stack web developer
      </p>
      <p className="max-w-2xl mx-auto font-ovo">
        I am a full stack web developer with 5 years of experience.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          My Resume{" "}
          <Image src={assets.download_icon} alt="download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
