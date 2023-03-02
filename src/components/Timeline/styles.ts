import styled from "styled-components";

export const Container = styled.div`
  border-left: 1px solid var(--border-white);
  border-right: 1px solid var(--border-white);
`

export const Content = styled.main`
  div {
    padding: 1.5rem 1.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid var(--border-white);

    svg {
      width: 1.25rem;
      height: 1.25rem;
      color: var(--twitter-blue);
    }
  }

  form {
    padding: 1.5rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      display: flex;
      gap: 0.75rem;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 9999px;
      }

      textarea {
        flex: 1;
        border: 0;
        font-size: 1.25rem;
        font-weight: 500;
        margin-top: 0.75rem;
        resize: none;
        
        &:focus {
          outline: none;
        }

        &::placeholder {
          color: var(--placeholder-grey);
        }
      }
    }
  }
`