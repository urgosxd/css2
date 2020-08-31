import React from "react"
import "./main.css"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./theme"

const Globalstyle = createGlobalStyle`
   *{
    box-sizing: border;
    margin:0;
    padding: 0;
    
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    position:relative;

  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <Globalstyle />
    {element}
  </ThemeProvider>
)
