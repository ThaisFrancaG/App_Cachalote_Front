/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import * as api from "../../services/api";
import { RiErrorWarningFill } from "react-icons/ri";
import { useTheme } from "../../context/theme";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AxiosError } from "axios";
import { WaveSpinner } from "react-spinners-kit";
import useAuth from "../../context/auth";
import * as style from "./style";
import Opening from "./preferencesOptions/opening";
import ReadingOptions from "./preferencesOptions/readingOptions";
import ProfileImage from "./preferencesOptions/avatarProfile";
export default function UserPreferencesForm() {
  const { theme } = useTheme();
  const [page, setPage] = React.useState(1);
  const [userPreferences, setPreferences] = useState({
    nickname: "",
    books: false,
    mangas: false,
    novels: false,
    comics: false,
  });
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log(userPreferences);
  return (
    <ThemeProvider theme={theme}>
      <style.FormBack>
        <style.FormContainer>
          {page === 1 ? (
            <Opening />
          ) : page === 2 ? (
            <ReadingOptions
              userPreferences={userPreferences}
              setPreferences={setPreferences}
            />
          ) : page === 3 ? (
            <ProfileImage />
          ) : page === 4 ? (
            <>Pagina4</>
          ) : (
            <>Pagina5</>
          )}
          <style.FormProgress>
            <Stack spacing={2}>
              <Typography></Typography>
              <Pagination count={5} page={page} onChange={handleChange} />
            </Stack>
          </style.FormProgress>
        </style.FormContainer>
      </style.FormBack>
    </ThemeProvider>
  );
}
