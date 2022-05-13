import React, { useState } from "react";
import themes from "../style/themes";
import styled from "styled-components";

function Footer() {
  const [theme, setTheme] = useState(themes.firstTheme);

  // eslint-disable-next-line react/jsx-filename-extension
  return <Main>Se quiser, clique para mudar as cores!</Main>;
}

export default Footer;

const Main = styled.footer(
  ({ theme }) => `
position:fixed;
z-index:100;
bottom:0;
background-color:${theme.accent};
width:100vw;
heigth:10vh;
display:flex;
align-items:center;
justify-content:end;
padding-right:50px;
box-sizing:border-box;
color:${theme.textSecondary}
`
);
