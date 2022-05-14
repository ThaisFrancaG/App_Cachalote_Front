/* eslint-disable react/jsx-filename-extension */
import { useState } from "react";
import themes from "../style/themes";
import styled from "styled-components";
import { GiWhaleTail } from "react-icons/gi";
import { useTheme } from "../context/theme";

function Footer() {
  // eslint-disable-next-line react/jsx-filename-extension
  const { theme, setTheme } = useTheme();

  function changeTheme(newTheme: string) {
    const current = localStorage.getItem("theme");
    if (current !== newTheme) {
      if (theme == themes.firstTheme) {
        localStorage.setItem("theme", "secondTheme");
        setTheme(themes.secondTheme);
      } else if (theme == themes.secondTheme) {
        localStorage.setItem("theme", "firstTheme");
        setTheme(themes.firstTheme);
      }
    }
  }
  return (
    <Main>
      <span>Se quiser, clique para mudar as cores!</span>
      <Icon>
        <GiWhaleTail
          color="#115986"
          onClick={() => changeTheme("secondTheme")}
        />
      </Icon>
      <Icon>
        <GiWhaleTail
          color="#f1faeeff"
          onClick={() => changeTheme("firstTheme")}
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
