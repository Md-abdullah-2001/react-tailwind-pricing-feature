import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Links from "../Links/Links";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routs = [
    { id: 1, name: "Home", path: "/Home" },
    { id: 2, name: "products", path: "/Home" },
    { id: 3, name: "Services", path: "/Home" },
    { id: 4, name: "Contact", path: "/Home" },
    { id: 5, name: "About", path: "/Home" },
  ];
  return (
    <nav className="bg-green-500 md:mt-0 w-full">
      <div
        onClick={() => setOpen(!open)}
        className="h-8 w-8 text-blue-500 md:hidden"
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul
        className={`w-full md:flex justify-center mt-8 md:static bg-green-500 absolute duration-700 ease-in  ${
          open ? "top-0" : "top-[-100%] "
        } `}
      >
        {routs.map((rout) => (
          <Links key={rout.id} rout={rout}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
