import { useState } from "react";

import { RiMenuAddFill } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-slate-100 ">
      <div className="container flex h-16 items-center justify-between">
        <a className="text-2xl font-bold" href="#">
          Logo
        </a>

        {/* nav links */}
        <ul
          className={`gap-8 md:flex
          ${
            isOpen
              ? "absolute left-0 top-0 z-10 flex h-screen w-screen flex-col bg-slate-800 p-10 text-white"
              : "hidden"
          } 
          `}
        >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* trigger menu mobile */}
        <button
          className="relative z-20 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RiMenuAddFill size={32} color={isOpen ? "white" : "black"} />
        </button>
      </div>
    </nav>
  );
}
