import React, { ButtonHTMLAttributes } from "react";

type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
};

export default function IconButton({ icon, ...props }: IconButtonProps) {
  return (
    <button
      className="border-primary border-2 p-2 rounded-md text-primary duration-200 hover:text-white hover:bg-primary cursor-pointer"
      {...props}
    >
      {icon}
    </button>
  );
}
