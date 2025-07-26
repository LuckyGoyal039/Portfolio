import { useState } from "react";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const copyMail = () => {
    setShow(true);
    navigator.clipboard.writeText("luckygoyalconnect@gmail.com")
    setTimeout(() => setShow(false), 2000)
  }
  return (
    <nav className="flex items-center justify-end py-6 mx-2">
      <div className="flex items-center justify-center gap-4">
        <div className="">
          <SocialIcon
            className="hover:bg-zinc-700 rounded-full hover:scale-115 duration-200 cursor-pointer"
            onClick={copyMail}
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          <div className={`absolute ${!show && "hidden"}`}>
            <p className="bg-black px-2 py-1 rounded-3xl relative -left-3 before:w-0 before:h-0 before:border-x-[10px] before:border-solid before:border-x-transparent before:border-b-[10px] before:border-b-black before:-top-2 before:left-7 before:absolute">
              Copied!
            </p>
          </div>
        </div>
        <SocialIcon
          className="hover:bg-zinc-700 rounded-full hover:scale-115 duration-200 cursor-pointer"
          url="https://x.com/Lucky_goyal_039"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:bg-zinc-700 rounded-full hover:scale-115 duration-200 cursor-pointer"
          url="https://www.linkedin.com/in/lucky-goyal-57b1461b4/ "
          target="_blank"
          rel="noopener noreferrer"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          className="hover:bg-zinc-700 rounded-full hover:scale-115 duration-200 cursor-pointer"
          url="https://github.com/LuckyGoyal039"
          target="_blank"
          rel="noopener noreferrer"
          fgColor="white"
          bgColor="transparent"
        />
      </div>
    </nav>
  );
};
export default Navbar;
