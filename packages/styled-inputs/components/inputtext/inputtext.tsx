import React, { InputHTMLAttributes } from "react";
import { Container, Label, Input } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  CSSStyled?: React.CSSProperties;
  lightMode?: boolean;
}

export const InputText = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, CSSStyled, lightMode, ...rest }, ref) => {
    return (
      <Container style={CSSStyled}>
        <Label htmlFor={name}>{label}</Label>
        <Input ref={ref} type="text" name={name} autoComplete="off" {...rest} />
      </Container>
    );
  },
);
