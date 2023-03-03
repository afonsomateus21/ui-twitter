import styled from "styled-components";

interface ButtonProps {
  width: string;
  padding: string;
}

export const Button = styled.button<ButtonProps>`
  background: var(--twitter-blue);
  border-radius: 9999px;
  padding: ${props => props.padding};
  display: flex;
  justify-content: center;
  width: ${props => props.width};
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 900;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }
`