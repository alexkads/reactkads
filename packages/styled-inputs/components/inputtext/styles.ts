import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 0.8rem;
  padding-bottom: 0.3rem;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  background: var(--bg-white-glass-primary);
  backdrop-filter: blur(0.5rem);
  padding: var(--input-padding);
  border: var(--input-border);
  border-radius: var(--input-border-radius);
  box-shadow: var(--box-shadow);
  font-size: var(--text);
  transition-duration: var(--input-transition-duration);

  &:focus {
    background-color: var(--input-focus);
    box-shadow: var(--input-box-shadow-focus);
    transform: scale(1.01);
  }

  &:hover {
    border: var(--input-border-hover);
  }
`;

export { Container, Label, Input };
