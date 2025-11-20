"use client";

import { useState } from "react";

import Logo from "../Logo";
import HeaderNavLink from "./HeaderNavLink";
import MobileNav from "./MobileNav";
import Button from "@/components/ui/Button";

import { AnimatePresence } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDebouncedResize } from "@/hooks/useDebouncedResize";

const links = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
  {
    text: "Cars",
    href: "/cars",
  },
  {
    text: "Services",
    href: "/services",
  },
];

export default function Header() {
  const [isMobileNavShown, setIsMobileNavShown] = useState(false);

  function handleOpenMobileNav() {
    setIsMobileNavShown(true);
  }

  function handleCloseMobileNav() {
    setIsMobileNavShown(false);
  }

  useDebouncedResize(handleCloseMobileNav);

  return (
    <>
      <div className="h-15" />
      <header className="h-15 bg-background fixed top-0 z-10 w-full border-b border-b-gray-200 shadow">
        <div className="container mx-auto h-full flex justify-between items-center gap-2">
          <Logo />

          <nav className="hidden md:block">
            <ul className="flex gap-x-5">
              {links.map((link) => (
                <HeaderNavLink key={link.href} link={link} />
              ))}
            </ul>
          </nav>

          <AnimatePresence>
            {isMobileNavShown && (
              <MobileNav links={links} onClose={handleCloseMobileNav} />
            )}
          </AnimatePresence>

          <div className="flex items-center gap-4">
            <Button className="max-[400px]:hidden">Order Now</Button>
            <button
              onClick={handleOpenMobileNav}
              className={`hover:text-primary cursor-pointer text-gray-600 duration-200 md:hidden`}
            >
              <RxHamburgerMenu size={25} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
