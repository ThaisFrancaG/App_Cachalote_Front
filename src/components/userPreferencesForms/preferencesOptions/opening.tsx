/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";

import * as api from "../../../services/api";
import { RiErrorWarningFill } from "react-icons/ri";
import { useTheme } from "../../../context/theme";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AxiosError } from "axios";
import { WaveSpinner } from "react-spinners-kit";
import useAuth from "../../../context/auth";
import * as style from "../style";
import * as formStyle from "../../../pages/UserAuth/style";
export default function Opening(props: any) {
  const { theme } = useTheme();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const { userPreferences, setPreferences } = props;
  const [sucessMessage, setMessage] = useState("");
  console.log(userPreferences.nickname);

  function handleChange(changed: React.ChangeEvent<HTMLInputElement>) {
    setPreferences({ ...userPreferences, ["nickname"]: changed.target.value });
  }

  async function handleSubmission(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    setMessage(
      `É um prazer te ter aqui,${userPreferences.nickname}!
      \n
      Use o navegador abaixo para continuar`
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <style.PageDescriptor>
        <span>Parece que esse é seu primeiro login! Bem-vindo(a)</span>
        <span>
          Antes de prosseguir, gostariamos de algumas informações suas
        </span>
        <span>
          Mas, se preferir, pode pular essa etapa, e nós te daremos o padrão
        </span>
        <span>Você pode personalizar suas preferências depois!</span>
      </style.PageDescriptor>

      <style.FormNickName>
        <span>Escolha seu Nome!</span>
        <input
          name="nickName"
          placeholder="Apelido/Nome de Usuário"
          type="text"
          value={userPreferences.nickname}
          onChange={(e) => handleChange(e)}
          required
        />
        <style.Button
          onKeyPress={(e) => handleSubmission(e)}
          onClick={(e) => handleSubmission(e)}
        >
          salvar
        </style.Button>
      </style.FormNickName>
      <style.PageDescriptor>
        {sucessMessage.length === 0 ? <></> : <span>{sucessMessage}</span>}
      </style.PageDescriptor>
    </ThemeProvider>
  );
}
