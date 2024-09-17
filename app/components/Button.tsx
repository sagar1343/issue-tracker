import React from "react";

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

function Button({ children, disabled, type }: Props): React.JSX.Element {
  return (
    <button
      disabled={disabled}
      type={type}
      className="inline-flex items-center gap-2 px-5 py-2 text-white duration-150 bg-indigo-600 rounded-md hover:bg-indigo-700 active:shadow-lg"
    >
      {children}
    </button>
  );
}

export default Button;
