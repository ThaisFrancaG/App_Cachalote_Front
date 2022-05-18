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
export default function Opening(props: any) {
  const { theme } = useTheme();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return <ThemeProvider theme={theme}>oi</ThemeProvider>;
}
