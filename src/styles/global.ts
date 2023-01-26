import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${(props) => props.theme.baseBackground};
    color: ${(props) => props.theme.baseText};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 1rem;
  }
`
