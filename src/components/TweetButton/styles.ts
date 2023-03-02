import styled from "styled-components";

export const Button = styled.button`
  background: var(--twitter-blue);
  border-radius: 9999px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  /* width: 100%; */
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 900;
  border: 0;

  &:hover {
    filter: brightness(0.9);
  }
`