import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className = "" }: ButtonProps) {
  return (
    <button
      className={`bg-primary hover:bg-primary-hover text-white rounded-md px-7 py-1.5 cursor-pointer text-sm duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
