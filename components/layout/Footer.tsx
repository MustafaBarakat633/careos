import Link from "next/link";
import Logo from "./Logo";
import NavLink from "../ui/NavLink";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const socialMediaLinks = [
  {
    href: "/",
    icon: <FaFacebookF size={20} />,
  },
  {
    href: "/",
    icon: <FaTwitter size={20} />,
  },
  {
    href: "/",
    icon: <FaLinkedinIn size={20} />,
  },
  {
    href: "/",
    icon: <FaInstagram size={20} />,
  },
];

const linksGroups = [
  {
    groupTitle: "Mobile apps",
    links: [
      { text: "Features", href: "/" },
      { text: "Live share", href: "/" },
      { text: "Video record", href: "/" },
    ],
  },
  {
    groupTitle: "Community",
    links: [
      { text: "Featured artists", href: "/" },
      { text: "The Portal", href: "/" },
      { text: "Live eventss", href: "/" },
    ],
  },
  {
    groupTitle: "Company",
    links: [
      { text: "About us", href: "/about-us" },
      { text: "Contact us", href: "/" },
      { text: "History", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="text-white bg-footer-bg py-16">
      <div className="container">
        <div className=" grid grid-cols-1 sm:grid-cols-3 mg:grid-col-5 lg:grid-cols-7 gap-6">
          <div className="md:col-span-2 lg:col-span-3">
            <Logo light />
          </div>

          {linksGroups.map((group) => (
            <div key={group.groupTitle}>
              <h4 className="font-semibold mb-3">{group.groupTitle}</h4>
              <ul>
                {group.links.map((link) => (
                  <li
                    key={link.text}
                    className="mb-1 last:mb-0 flex items-center gap-2"
                  >
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:underline"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-3 items-start *:w-[120px]">
            <NavLink>Register</NavLink>
            <NavLink className="bg-white text-primary! hover:text-white!">
              Log in
            </NavLink>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3 border-t-2 border-primary mt-6 pt-6">
          <p>© Photo, Inc. 2019. We love our users!</p>
          <div className="flex gap-x-8 gap-y-3 items-center flex-wrap">
            <p>Follow us:</p>
            <div className="flex gap-4 flex-wrap">
              {socialMediaLinks.map((link, i) => (
                <NavLink key={i} className="p-3! rounded-full!">
                  {link.icon}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
