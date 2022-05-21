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
          {showPublicNotifications ? "" : <strong>NÃO</strong>} desejo exibir
          notificações ao público
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
          {showFriendsNotifications ? "" : <strong>NÃO</strong>} desejo exibir
          notificações aos meus amigos
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
          {getPublicNotifications ? "" : <strong>NÃO</strong>} desejo receber
          notificações públicas
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
          {getFriendsNotifications ? "" : <strong>NÃO</strong>} desejo receber
          notificações dos meus amigos
        </span>
      </style.SwitchContainer>
      <style.PageDescriptor>
        <span>
          Essas são as configurações de notificação, que envolvem novas
          leituras, leituras concluídas e metas atingidas
        </span>
        <span>Por padrão, nenhuma notificação é exibida ou recebida</span>
        <span>
          Não há pressão nem para acompanhar as leituras dos seus amigos nem
          para permitir que eles vejam as suas, o mais importante é se sentir
          confortável!
        </span>
      </style.PageDescriptor>
    </ThemeProvider>
  );
}
