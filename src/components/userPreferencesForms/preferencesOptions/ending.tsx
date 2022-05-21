/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import logoFirst from "../../../assets/visualIdentity/logoFirst.svg";
import logoSecond from "../../../assets/visualIdentity/logoSecond.svg";
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
export default function Ending(props: any) {
  const { theme } = useTheme();
  const { token } = useAuth();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const { userPreferences, setPreferences } = props;
  const [sucessMessage, setMessage] = useState("");
  const [loading, setLoading] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);

  async function handleSubmission(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);
    try {
      await api.sendPreferences(token as string, userPreferences);
      setSubmitSuccess(true);
    } catch (error: Error | AxiosError | any) {
      console.log(error.message);
      setSubmitError(true);
      setSubmitSuccess(false);
      setLoading(false);
    }
  }

  const currentTheme = localStorage.getItem("theme");

  return (
    <ThemeProvider theme={theme}>
      <style.PageDescriptor>
        <style.Logo>
          <img
            src={currentTheme === "secondTheme" ? logoSecond : logoFirst}
            alt="logo"
          />
        </style.Logo>
        <span>
          Você chegou no fim do formulário! Se quiser, volte as páginas para
          conferir suas informações. Se estiver tudo ok, pode clicar no botâo
          abaixo para as enviar!
        </span>
        <span>
          Lembrando que essas escolhas não são definitivas, e você terá chances
          de as mudar - ou atualizar - no futuro!
        </span>
        <style.FormButton
          disabled={loading}
          onKeyPress={(e) => handleSubmission(e)}
          onClick={(e) => handleSubmission(e)}
        >
          {loading ? (
            <>
              <WaveSpinner /> <WaveSpinner />
              <WaveSpinner />{" "}
            </>
          ) : (
            <span>enviar</span>
          )}
        </style.FormButton>
      </style.PageDescriptor>
    </ThemeProvider>
  );
}
