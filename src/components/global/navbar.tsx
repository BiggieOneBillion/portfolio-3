import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleIsOpen = () => setIsOpen(true);
  const handleIsClose = () => setIsOpen(false);
  return (
    <header className="absolute top-0 w-full text-white z-[100000] py-5 text-sm">
      <main className="md:w-[700px] mx-auto flex items-center justify-between py-3 border px-5 rounded-2xl bg-zinc-900">
        <section>
          <h1 className="text-white">
            <Link to={"/"}>Chukwu Chinwendu</Link>
          </h1>
        </section>
        <nav className="hidden md:block">
          <ul className="flex gap-3 items-center">
            {/* <li className="px-3 py-2 rounded-xl bg-whitey border border-transparent hover:border-white hover:bg-zinc-200y transition-colors duration-300">
              <a href="#">About Me</a>
            </li> */}
            <Link
              to={"/works"}
              className="px-3 py-2 rounded-xl bg-whitey border border-transparent hover:border-white hover:bg-zinc-200y transition-colors duration-300"
            >
              My Projects
            </Link>
            {/* <li className='px-3 py-2 rounded-xl bg-whitey border border-transparent hover:border-white hover:bg-zinc-200y transition-colors duration-300'><a href="#">Blog</a></li> */}
            <Link
              to={"/contact-me"}
              className="px-3 py-2 rounded-xl bg-whitey border border-transparent hover:border-white hover:bg-zinc-200y transition-colors duration-300"
            >
              <a href="#">Contact Me</a>
            </Link>
          </ul>
        </nav>
        {/* <button className="hidden md:block">Get In Touch</button> */}
        {/* MOBILE MENU */}
        <nav className=" px-2 relative md:hidden">
          {/* hamburger menu */}
          <span
            onClick={handleIsOpen}
            className="border text-xl block p-1 border-white/10 rounded"
          >
            <RxHamburgerMenu />
          </span>
          {/* hidden menu */}
          {isOpen && (
            <div className="fixed top-0 right-0 w-[250px] border-l border-white/20 h-screen flex flex-col items-end py-5 gap-10 bg-zinc-900 px-4">
              {/* close button */}
              <span onClick={handleIsClose} className="text-2xl">
                <IoClose />
              </span>
              {/* side navigation */}
              <ul className="space-y-8">
                <li className="text-lg text-right">About Me</li>
                <li className="text-lg text-right">Work</li>
                <li className="text-lg text-right">Contact Me</li>
              </ul>
              <button className="group relative z-[1000] transition-transform duration-300 rounded-2xl px-3 py-2 border w-fit cursor-pointer flex items-center gap-2">
                <span>Get In Touch</span>

                <span className="-rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <FaCircleArrowRight />
                </span>
              </button>
            </div>
          )}
        </nav>
      </main>
    </header>
  );
};

export default Navbar;
