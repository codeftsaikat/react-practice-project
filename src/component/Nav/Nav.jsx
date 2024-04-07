import { useState } from "react";
import Link from "./Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose className="text-3xl"></AiOutlineClose>
        ) : (
          <AiOutlineMenu className="text-3xl"></AiOutlineMenu>
        )}
        {/* <AiOutlineMenu className="text-2xl "></AiOutlineMenu> */}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000
      ${open ? "top-8" : "-top-60"}`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
