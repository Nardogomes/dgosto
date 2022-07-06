import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  :root {
    --gray-100: #F5F5F5;
    --yellow-100: #f9e4cb;
    --yellow-500: #f2ae30;
    --blue-500: #048abf;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  input,
  textarea,
  button,
  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
