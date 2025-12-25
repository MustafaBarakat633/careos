// import { usePathname } from "next/navigation";

type HeaderNavLinkProps = {
  link: {
    text: string;
    href: string;
  };
  className?: string;
};

export default function HeaderNavLink({ link, className }: HeaderNavLinkProps) {
  // const pathname = usePathname();
  // const isActive = pathname === link.href;
  // className={`${isActive ? "text-primary" : ""}`}

  return (
    <li>
      <a
        href={link.href}
        className={`text-black hover:text-primary inline-block duration-200 ${className}`}
      >
        {link.text}
      </a>
    </li>
  );
}
