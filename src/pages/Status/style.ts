import styled from "styled-components";

export const Container = styled.div`
  border-left: 1px solid var(--border-white);
  border-right: 1px solid var(--border-white);
`

export const Content = styled.main`
  form {
    padding: 1.5rem 1.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-bottom: 1px solid var(--border-white);

    label {
      display: flex;
      align-items: center;
      flex: 1;
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
        margin-top: 1.25rem;
        resize: none;
        
        &:focus {
          outline: none;
        }

        &::placeholder {
          color: var(--placeholder-grey);
        }

        @media (max-width: 780px) {
          font-size: 1rem;
        }
      }
    }
  }
`