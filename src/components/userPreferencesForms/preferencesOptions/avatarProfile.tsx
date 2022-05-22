/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../../context/theme";
import { supabase } from "../../../supabaseClient";
import logoGrey from "../../../assets/visualIdentity/logoGrey.svg";
import * as style from "../style";
import { WaveSpinner } from "react-spinners-kit";

export default function ProfileImage(props: any) {
  const { theme } = useTheme();
  const { userInfo } = props;
  const { userPreferences, setPreferences } = props;
  const { preview, setPreview } = props;
  const [fileError, setFileError] = useState(true);
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [selectedPic, setSelectedPic] = useState("");
  const [uploading, setUploading] = useState(false);

  const checkAvatar = (event: any) => {
    const file = event.target.files[0];
    const fileExt = file.name.split(".").pop();

    if (fileExt !== "png" && fileExt !== "jpeg" && fileExt !== "jpg") {
      setErrorMessage(
        "Formato inválido! \n Por favor escolha uma imagem \n de formato .png ou.jpeg"
      );
    } else if (file.size > 2424610) {
      setErrorMessage(
        "Arquivo muito grande!\n Por favor, escolha uma imagem menor"
      );
    } else {
      setPreview(URL.createObjectURL(file));

      setErrorMessage("");
      setFileError(false);
      setAvatar(file);
      setSelectedPic(file.name);
    }
  };
  const uploadAvatar = async (event: any) => {
    event.preventDefault();
    try {
      setUploading(true);
      if (!avatar) {
        setErrorMessage("Por favor, selecione uma imagem para o upload!");
        throw new Error("You must select an image to upload.");
      }
      const file = avatar;
      const filePath = `${Math.random()}.${userInfo.id}`;
      const { error: uploadError } = await supabase.storage
        .from("user-profles")
        .upload(filePath, file);
      setFileError(false);
      setPreview(URL.createObjectURL(file));
      setSucessMessage("Imagem Enviada com Sucesso!");
      setPreferences({ ...userPreferences, ["avatar"]: filePath });

      if (uploadError) {
        setPreferences({ ...userPreferences, ["avatar"]: "" });

        setSubmitError(true);
        setErrorMessage(
          "Houve um erro durante o Upload,\n tente novamente mais tarde ou pule essa etapa!"
        );
        setUploading(false);
        return;
      }
    } catch (error: any) {
      setPreferences({ ...userPreferences, ["avatar"]: "" });

      setSubmitError(true);
      setErrorMessage(
        "Algo deu errado do nosso lado!\n Tente novamente mais tarde, ou pule essa etapa"
      );
    }

    setUploading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <style.ReadingsContainer>
        <style.AvatarForm
          theme={theme}
          status={fileError}
          onSubmit={uploadAvatar}
        >
          <label htmlFor="input-file">
            <input id="input-file" type="file" onChange={checkAvatar} hidden />
            <style.AvatarSelector>
              {preview.length === 0 ? (
                <span>Selecione uma imagem!</span>
              ) : selectedPic.length !== 0 ? (
                <span>{selectedPic}</span>
              ) : (
                <span>Imagem Selecionada! Confira Preview</span>
              )}
              {preview.length === 0 ? (
                <img src={logoGrey} />
              ) : (
                <img src={preview} />
              )}
            </style.AvatarSelector>
          </label>
          <div
            onClick={() =>
              fileError ? setErrorMessage("Escolha uma foto para enviar!") : ""
            }
          >
            <button type="submit" disabled={fileError}>
              {uploading ? (
                <>
                  <WaveSpinner /> <WaveSpinner />
                  <WaveSpinner />{" "}
                </>
              ) : (
                <span>Enviar</span>
              )}
            </button>
          </div>
          {fileError || submitError ? (
            <>{errorMessage}</>
          ) : (
            <>{sucessMessage}</>
          )}
        </style.AvatarForm>
      </style.ReadingsContainer>
      <style.PageDescriptor>
        <span>Esse será a imagem que outros verão ao entrar no seu perfil</span>
        <span>Lembre-se de usar formato .png ou .jpeg!</span>
        <span>Se preferir, pode pular essa etapa, ela não é essencial</span>
      </style.PageDescriptor>
    </ThemeProvider>
  );
}
