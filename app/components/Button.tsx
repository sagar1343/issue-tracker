import React, { ReactEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: ReactEventHandler;
}

function Button({
  children,
  disabled,
  type,
  className,
  onClick,
}: Props): React.JSX.Element {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={twMerge(
        "w-full whitespace-nowrap flex items-center justify-center gap-2 px-5 py-2 text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700 active:shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
