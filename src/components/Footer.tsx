/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from "react";
import themes from "../style/themes";
import styled from "styled-components";
import { GiWhaleTail } from "react-icons/gi";
function Footer() {
  const [theme, setTheme] = useState(themes.firstTheme);
  console.log(theme);
  // eslint-disable-next-line react/jsx-filename-extension

  return (
    <Main>
      <span>Se quiser, clique para mudar as cores!</span>
      <Icon>
        <GiWhaleTail
          color="#115986"
          onClick={() => setTheme(themes.firstTheme)}
        />
      </Icon>
      <Icon>
        <GiWhaleTail
          color="#f1faeeff"
          onClick={() => setTheme(themes.secondTheme)}
        />
      </Icon>
    </Main>
  );
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
justify-content:start;
padding-right:50px;
box-sizing:border-box;
color:${theme.textSecondary};
font-size:15px;
letter-spacing: 3px;
font-family:"Fredoka One";
`
);

const Icon = styled.div(
  ({ theme }) => `
display:flex;
align-items:center;
justify-content:start;
margin-left:30px;
box-sizing:border-box;
font-size:15px;
letter-spacing: 3px;
font-family:"Fredoka One";

::hover{
  pointer:click;
}
`
);
