/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import books from "../../../assets/midiaOptions/books.png";
import mangas from "../../../assets/midiaOptions/manga.png";
import novels from "../../../assets/midiaOptions/novels.png";
import comics from "../../../assets/midiaOptions/comics.png";

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
export default function ReadingOptions(props: any) {
  const { theme } = useTheme();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const options = "../../../../public/assets";
  return (
    <ThemeProvider theme={theme}>
      <style.ReadingsContainer>
        <style.ReadingsSelector id="books">
          <figure>
            <img src={books} alt={"books"} />
          </figure>
          <span>Livros</span>
        </style.ReadingsSelector>
        <style.ReadingsSelector id="manga">
          <figure>
            <img src={mangas} alt={"mangas"} />
          </figure>
          <span>Mangas</span>
        </style.ReadingsSelector>

        <style.ReadingsSelector id="novel">
          <figure>
            <img src={novels} alt={"novels"} />
          </figure>
          <span>Novels</span>
        </style.ReadingsSelector>

        <style.ReadingsSelector id="comics">
          <figure>
            <img src={comics} alt={"comics"} />
          </figure>
          <span>Quadrinhos</span>
        </style.ReadingsSelector>
      </style.ReadingsContainer>
    </ThemeProvider>
  );
}
