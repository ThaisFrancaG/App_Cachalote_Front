/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import * as style from "./style";
import * as api from "../../services/api";
import { RiErrorWarningFill } from "react-icons/ri";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/theme";
import CheckForm from "./CheckFormUtil";
import { AxiosError } from "axios";
import { WaveSpinner } from "react-spinners-kit";

export default function SignIn() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [signInfo, setSignInfo] = useState({
    email: "",
    password: "",
  });

  function handleChange(changed: React.ChangeEvent<HTMLInputElement>) {
    setSignInfo({ ...signInfo, [changed.target.name]: changed.target.value });
  }

  async function handleSubmission(
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    setLoading(true);
    setSubmitError(false);
    const checkSubmition = CheckForm(signInfo);
    if (checkSubmition.length > 0) {
      setSubmitError(true);
      setLoading(false);
      setAlertMessage(checkSubmition);
      return;
    }

    try {
      await api.signIn(signInfo);
      setSubmitSuccess(true);
      navigate("/");
    } catch (error: Error | AxiosError | any) {
      console.log(error.message);
      setAlertMessage(error.response.data);
      setSubmitError(true);
      setSubmitSuccess(false);
      setLoading(false);
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <style.MainAuth>
        <style.Success>{successMessage}</style.Success>

        <style.FormLogin>
          <style.Title> FAÇA LOGIN!</style.Title>

          <input
            name="email"
            placeholder="E-mail"
            type="email"
            value={signInfo.email}
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            name="password"
            placeholder="Senha"
            type="password"
            value={signInfo.password}
            onChange={(e) => handleChange(e)}
            required
          />
          <style.Alert submitError={submitError}>
            <RiErrorWarningFill color="#D82841" />
            <span>{alertMessage}</span>
          </style.Alert>
          <style.Button
            name="submit"
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
              <span>Enviar</span>
            )}
          </style.Button>
          <style.Navigation to="/sign-up">
            Ainda não tem conta? Faça cadastro!
          </style.Navigation>
        </style.FormLogin>
        <style.BannerLogin>oi</style.BannerLogin>

        <Footer />
      </style.MainAuth>
    </ThemeProvider>
  );
}
