import Link from "next/link";
import React from "react";

type NavLinkProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function NavLink({
  children,
  href = "/",
  className = "",
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-block text-center bg-primary hover:bg-primary-hover text-white rounded-md px-7 py-1.5 cursor-pointer text-sm duration-200 border-2 border-primary ${className}`}
    >
      {children}
    </Link>
  );
}
