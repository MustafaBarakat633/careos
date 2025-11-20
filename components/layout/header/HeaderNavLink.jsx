import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderNavLink({ link, className = "" }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;

  return (
    <li>
      <Link
        href={link.href}
        className={`text-black hover:text-primary inline-block duration-200 ${
          isActive ? "text-primary" : ""
        } ${className}`}
      >
        {link.text}
      </Link>
    </li>
  );
}
