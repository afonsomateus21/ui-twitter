import styled from "styled-components";

export const Container = styled.aside`
  padding: 1.5rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 2rem;
    height: 2rem;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & > a {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;

      svg {
        width: 2rem;
        height: 2rem;
      }

      &.active {
        color: var(--twitter-blue);
      }

      @media (max-width: 780px) {
        & > span {
          display: none;
        }
      }
    }
  }

  @media (max-width: 780px) {
    padding: 1.5rem 0.75rem;
    align-items: center;
  }
`