/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import * as api from "../../services/api";
import { RiErrorWarningFill } from "react-icons/ri";
import Footer from "../../components/Footer";
import { useTheme } from "../../context/theme";
import { AxiosError } from "axios";
import { WaveSpinner } from "react-spinners-kit";
import useAlert from "../../context/alert";

import "react-toastify/dist/ReactToastify.css";

export default function MainPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const { setMessage } = useAlert();

  useEffect(() => {
    const session = localStorage.getItem("cachalote-token");
    if (!session) {
      setMessage({ type: "error", text: "Por favor, faça login!" });
      navigate("/sign-in");
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      CACHALOTE
      <Footer />
    </ThemeProvider>
  );
}
