import type { InputHTMLAttributes } from 'react';
import './checkbox.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label?: string;
};

export function Checkbox({ className = '', label, id, ...props }: CheckboxProps) {
  const checkboxId = id ?? props.name;

  return (
    <label className={`kelvinward-checkbox ${className}`} htmlFor={checkboxId}>
      <input {...props} id={checkboxId} type="checkbox" className="kelvinward-checkbox__input" />
      <span className="kelvinward-checkbox__box" aria-hidden="true" />
      {label ? <span className="kelvinward-checkbox__label">{label}</span> : null}
    </label>
  );
}
