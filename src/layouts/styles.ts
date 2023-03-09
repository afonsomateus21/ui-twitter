import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 300px 1fr;

  @media (max-width: 780px) {
    grid-template-columns: 80px 1fr;
  }
`