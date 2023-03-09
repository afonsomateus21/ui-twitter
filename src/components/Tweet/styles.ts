import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(NavLink)`
  padding: 1.5rem 1.25rem;
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 0.75rem;
  border-bottom: 1px solid var(--border-white);
  text-decoration: none;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  & > span {
    font-size: 0.875rem;
    color: var(--tweet-user-color);
  }
`

export const Content = styled.main`
  & > p {
    line-height: 1.25;
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 0.75rem;

  & > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: 0;
    font-size: 0.875rem;
    color: var(--tweet-user-color);

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    &:hover {
      color: var(--twitter-blue);
    }
  }
`