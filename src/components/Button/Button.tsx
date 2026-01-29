import type { ButtonHTMLAttributes } from "react";
import "./button.css";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className = "", children, ...props }: ButtonProps) {
  return (
    <button {...props} className={`kelvinward-btn ${className}`}>
      {children}
    </button>
  );
}
