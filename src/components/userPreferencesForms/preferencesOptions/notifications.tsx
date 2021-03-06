/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import clsx from "clsx";
import { styled } from "@mui/system";
import { useSwitch, UseSwitchProps } from "@mui/base/SwitchUnstyled";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../../context/theme";
import { supabase } from "../../../supabaseClient";
import logoGrey from "../../../assets/visualIdentity/logoGrey.svg";
import * as style from "../style";
import { Root } from "../style";
export default function NotificationsPreferences(props: any) {
  const { theme } = useTheme();
  const { userInfo, setUserInfo } = props;
  const { userPreferences, setPreferences } = props;
  const { preview, setPreview } = props;
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [fileError, setFileError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [selectedPic, setSelectedPic] = useState("");
  const [uploading, setUploading] = useState(false);

  const label = { componentsProps: { input: { "aria-label": "Demo switch" } } };

  const {
    showPublicNotifications,
    showFriendsNotifications,
    getPublicNotifications,
    getFriendsNotifications,
  } = userPreferences;

  function handleSwitch(toHandle: any) {
    userPreferences[toHandle]
      ? setPreferences({ ...userPreferences, [toHandle]: false })
      : setPreferences({ ...userPreferences, [toHandle]: true });
  }

  return (
    <ThemeProvider theme={theme}>
      <style.SwitchContainer
        onClick={() => handleSwitch("showPublicNotifications")}
      >
        <SwitchUnstyled
          component={Root}
          {...label}
          checked={showPublicNotifications}
        />
        <span>
          {showPublicNotifications ? "" : <strong>N??O</strong>} desejo exibir
          notifica????es ao p??blico
        </span>
      </style.SwitchContainer>
      <style.SwitchContainer
        onClick={() => handleSwitch("showFriendsNotifications")}
      >
        <SwitchUnstyled
          component={Root}
          {...label}
          checked={showFriendsNotifications}
        />
        <span>
          {showFriendsNotifications ? "" : <strong>N??O</strong>} desejo exibir
          notifica????es aos meus amigos
        </span>
      </style.SwitchContainer>
      <style.SwitchContainer
        onClick={() => handleSwitch("getPublicNotifications")}
      >
        <SwitchUnstyled
          component={Root}
          {...label}
          checked={getPublicNotifications}
        />
        <span>
          {getPublicNotifications ? "" : <strong>N??O</strong>} desejo receber
          notifica????es p??blicas
        </span>
      </style.SwitchContainer>
      <style.SwitchContainer
        onClick={() => handleSwitch("getFriendsNotifications")}
      >
        <SwitchUnstyled
          component={Root}
          {...label}
          checked={getFriendsNotifications}
        />
        <span>
          {getFriendsNotifications ? "" : <strong>N??O</strong>} desejo receber
          notifica????es dos meus amigos
        </span>
      </style.SwitchContainer>
      <style.PageDescriptor>
        <span>
          Essas s??o as configura????es de notifica????o, que envolvem novas
          leituras, leituras conclu??das e metas atingidas
        </span>
        <span>Por padr??o, nenhuma notifica????o ?? exibida ou recebida</span>
        <span>
          N??o h?? press??o nem para acompanhar as leituras dos seus amigos nem
          para permitir que eles vejam as suas, o mais importante ?? se sentir
          confort??vel!
        </span>
      </style.PageDescriptor>
    </ThemeProvider>
  );
}
