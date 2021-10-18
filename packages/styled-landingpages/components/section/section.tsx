import React, { HTMLAttributes } from "react";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const CSSStyle: React.CSSProperties = {
  display: "flex",
  backgroundColor: "blue",
  color: "brown",
  padding: "10rem",
};

export const Section = ({ style, children, ...restProps }: SectionProps) => {
  return (
    <section style={CSSStyle} {...restProps}>
      {children}
    </section>
  );
};
