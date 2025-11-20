// import { FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/Button";

export default function MobileNav({ links, onClose }) {
  const pathname = usePathname();

  return (
    <RemoveScroll>
      <div
        className="absolute w-screen h-screen inset-0 bg-black/30 z-9 overflow-hidden"
        onClick={onClose}
      />
      <motion.div
        initial={{
          x: "100%",
        }}
        animate={{
          x: 0,
        }}
        transition={{
          type: "tween",
          duration: 0.15,
        }}
        exit={{
          x: "100%",
        }}
        className="absolute top-0 right-0 z-10 w-64 min-h-dvh h-full overflow-auto bg-white shadow-2xl border-l border-l-gray-300 rounded-l-xl"
      >
        <div className="flex justify-end items-center m-4">
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 p-1 rounded-lg text-gray-600 cursor-pointer border border-gray-400"
          >
            <FaXmark />
          </button>
        </div>

        <div className="m-4">
          <Button className="w-full">Order Now</Button>
        </div>

        <nav>
          <ul>
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    onClick={onClose}
                    href={link.href}
                    className={`text-black block px-6 py-2 hover:bg-gray-100 hover:text-primary duration-150 ${
                      isActive ? "bg-gray-100 text-primary border-l-2" : ""
                    }`}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </RemoveScroll>
  );
}
