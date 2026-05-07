import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="">
          <Image
            src={assets.logo}
            alt="Shubham"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
      </nav>
    </>
  );
};

export default Navbar;
