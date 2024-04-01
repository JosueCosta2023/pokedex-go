import {createGlobalStyle } from 'styled-components';
import './fonts.css'

const Reset = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  /* Remove default padding */
  body,
  figure,
  p {
    padding: 0;
  }

  /* Set core root defaults */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  /* Remove border on all elements */
  button,
  input,
  select,
  textarea {
    border: 0;
    outline: 0;
  }

  /* Typography */
  body {
    font-family: Arial, sans-serif;
  }

  /* Remove focus outline for mouse users */
  body :focus:not(:focus-visible) {
    outline: none;
  }

  /* Clear button styles */
  button {
    background: transparent;
    padding: 0;
    cursor:pointer;
  }
`;

export default Reset;
