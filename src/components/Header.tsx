/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line react/jsx-filename-extension
import { useEffect, useState } from "react";
import themes from "../style/themes";
import styled from "styled-components";
import { useTheme } from "../context/theme";
import useAlert from "../context/alert";
import { useNavigate } from "react-router";
import * as api from "../services/api";
import { supabase } from "../supabaseClient";

function Header({ userInfo }: any) {
  const { theme, setTheme } = useTheme();
  const { setMessage } = useAlert();
  const navigate = useNavigate();

  //a ideia É SALVAR O NOME DO ARQUIVO DE IMAGEM NO BANCO DE DADOS,M E RECUPERAR ESSE NOME PRO DISPLAY
  const storageFolder = "/storage/v1/object/public/testing/";
  const storageBucket = process.env.REACT_APP_SUPABASE_URL;
  const fileName = userInfo.avatar;
  const avatarUrl = `${storageBucket}${storageFolder}${fileName}`;

  return (
    <Main>
      <span>Em Construção!</span>
    </Main>
  );
}

export default Header;

const Main = styled.header(
  ({ theme }) => `
position:fixed;
z-index:900;
top:0;
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
