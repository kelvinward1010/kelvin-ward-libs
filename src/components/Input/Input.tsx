import type { InputHTMLAttributes } from "react";
import "./input.css";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`kelvinward-input ${className}`}
    />
  );
}
