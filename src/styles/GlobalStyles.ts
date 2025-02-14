import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Arial, sans-serif;
  }

  html, body {
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  body.light-theme {
    background-color: #ffffff;
    color: ${props => props.theme.colors.text};
  }

  body.dark-theme {
    background-color: #000000;
    color: ${props => props.theme.colors.text};
  }

  #particles-js {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
  }

  #particles-js canvas {
    display: block;
    vertical-align: bottom;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    opacity: 1;
    -webkit-transition: opacity .8s ease, -webkit-transform 1.4s ease;
    transition: opacity .8s ease, transform 1.4s ease;
  }

  main {
    position: relative;
    z-index: 1;
    background-color: transparent;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  section {
    position: relative;
    transition: all 0.3s ease;
    background-color: transparent;
    color: inherit;
    z-index: 2;
  }
`; 