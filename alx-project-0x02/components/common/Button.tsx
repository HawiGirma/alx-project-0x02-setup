import React from "react";
import { type ButtonProps } from "@/interfaces";
import clsx from "clsx"; // Optional: for cleaner class logic

const sizeClasses = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-6 py-3 text-lg",
};

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "bg-blue-600 text-white font-medium hover:bg-blue-700",
        sizeClasses[size],
        shape
      )}
    >
      {children}
    </button>
  );
};

export default Button;
