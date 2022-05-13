/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import * as style from "./style";
import themes from "../../style/themes";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/theme";

export default function SignUp() {
  const { theme } = useTheme();
  const [loading, setLoading] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [submitError, setSubmitError] = React.useState(true);
  const [signInfo, setSignInfo] = useState({
    name: "",
    email: "",
    checkEmail: "",
    password: "",
  });

  function handleChange(changed: React.ChangeEvent<HTMLInputElement>) {
    console.log(signInfo);
    setSignInfo({ ...signInfo, [changed.target.name]: changed.target.value });
  }

  async function handleSubmission() {
    setLoading(true);
    setSubmitError(false);
  }
  return (
    <ThemeProvider theme={theme}>
      <style.MainAuth>
        <style.Banner>oi</style.Banner>

        <style.Form>
          <style.Title> CADASTRE-SE</style.Title>
          <input
            name="name"
            placeholder="Nome Completo"
            type="text"
            value={signInfo.name}
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            name="email"
            placeholder="E-mail"
            type="e-mail"
            value={signInfo.email}
            onChange={(e) => handleChange(e)}
            required
          />

          <input
            name="checkEmail"
            placeholder="Confirme seu E-mail"
            type="e-mail"
            value={signInfo.checkEmail}
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
          <style.Alert submitError={submitError}>{alertMessage}</style.Alert>
          <style.Button onClick={() => handleSubmission()}>Enviar</style.Button>
        </style.Form>
        <Footer />
      </style.MainAuth>
    </ThemeProvider>
  );
}
