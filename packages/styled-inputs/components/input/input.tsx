import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: React.HTMLInputTypeAttribute;
}

export const Input = ({ type, ...restProps }: InputProps) => {
  return <input type={type} {...restProps} />;
};
