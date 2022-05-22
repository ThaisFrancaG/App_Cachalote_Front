/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import * as api from "../../services/api";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useTheme } from "../../context/theme";
import { AxiosError } from "axios";
import useAlert from "../../context/alert";
import "react-toastify/dist/ReactToastify.css";
import UserPreferencesForm from "../../components/userPreferencesForms/UserPreferencesForm";

export default function MainPage() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState(false);
  const [userForm, setUserForm] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { setMessage } = useAlert();

  useEffect(() => {
    const session = localStorage.getItem("cachalote-token");
    if (!session) {
      setMessage({ type: "error", text: "Por favor, faça login!" });
      navigate("/sign-in");
    }
    const fetchData = async (session: string) => {
      const response = await getUserInfo(session);
    };
    fetchData(session as string);
  }, []);

  async function getUserInfo(session: string) {
    try {
      const response = await api.getUserData(session);
      if (response.nickName.length === 0 && response.avatar.length === 0) {
        setUserForm(true);
      }

      setUserInfo(response);
    } catch (error: Error | AxiosError | any) {
      if (error.response.status === 444 || error.response.status === 401) {
        localStorage.removeItem("cachalote-user");
        setMessage({ type: "error", text: "Por favor, faça login!" });
        navigate("/sign-in");
      }
      setMessage({
        type: "error",
        text: "Algo deu errado! Tente novamente mais tarde",
      });
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header userInfo={userInfo} />
      {userForm ? (
        <UserPreferencesForm userInfo={userInfo} setUserForm={setUserForm} />
      ) : (
        <></>
      )}
      CACHALOTE CACHALOTE
      <Footer />
    </ThemeProvider>
  );
}
