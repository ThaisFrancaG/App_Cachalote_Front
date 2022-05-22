/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../context/theme";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as style from "./style";
import Opening from "./preferencesOptions/opening";
import ReadingOptions from "./preferencesOptions/readingOptions";
import ProfileImage from "./preferencesOptions/avatarProfile";
import NotificationsPreferences from "./preferencesOptions/notifications";
import Ending from "./preferencesOptions/ending";
export default function UserPreferencesForm({ userInfo, setUserForm }: any) {
  const { theme } = useTheme();
  const [page, setPage] = React.useState(1);
  const [userPreferences, setPreferences] = useState({
    nickname: "",
    avatar: "",
    books: false,
    mangas: false,
    novels: false,
    comics: false,
    showPublicNotifications: false,
    showFriendsNotifications: false,
    getPublicNotifications: false,
    getFriendsNotifications: false,
  });
  const [preview, setPreview] = useState("");

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <ThemeProvider theme={theme}>
      <style.FormBack>
        <style.FormContainer>
          {page === 1 ? (
            <Opening
              userPreferences={userPreferences}
              setPreferences={setPreferences}
            />
          ) : page === 2 ? (
            <ReadingOptions
              userPreferences={userPreferences}
              setPreferences={setPreferences}
            />
          ) : page === 3 ? (
            <ProfileImage
              userInfo={userInfo}
              userPreferences={userPreferences}
              setPreferences={setPreferences}
              preview={preview}
              setPreview={setPreview}
            />
          ) : page === 4 ? (
            <NotificationsPreferences
              userPreferences={userPreferences}
              setPreferences={setPreferences}
            />
          ) : (
            <Ending
              userPreferences={userPreferences}
              setUSerForm={setUserForm}
            />
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
