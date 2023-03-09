import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --twitter-blue: #1da1f2;
    --border-white: #ebeef0;
    --white: #fff;
    --placeholder-grey: #5b7083;
    --tweet-user-color: #89a2b8;
  }

  body {
    color: #0f1419;
    -webkit-font-smoothing: antialised;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
  }
`

