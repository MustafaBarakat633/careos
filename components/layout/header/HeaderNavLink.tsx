import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderNavLinkProps = {
  link: {
    text: string;
    href: string;
  };
  className?: string;
};

export default function HeaderNavLink({ link, className }: HeaderNavLinkProps) {
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
