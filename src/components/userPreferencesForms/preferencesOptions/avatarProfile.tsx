/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { useTheme } from "../../../context/theme";
import { supabase } from "../../../supabaseClient";
import logoGrey from "../../../assets/visualIdentity/logoGrey.svg";
import * as style from "../style";
export default function ProfileImage(props: any) {
  const { theme } = useTheme();
  const { userInfo } = props;
  const { userPreferences, setPreferences } = props;
  const { preview, setPreview } = props;
  const [selectedFile, setSelectedFile] = useState();

  const [fileError, setFileError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [selectedPic, setSelectedPic] = useState("");
  const [uploading, setUploading] = useState(false);

  const checkAvatar = (event: any) => {
    const file = event.target.files[0];
    const fileExt = file.name.split(".").pop();

    if (fileExt !== "png" && fileExt !== "jpeg") {
      setErrorMessage(
        "Formato inválido! \n Por favor escolha uma imagem \n de formato .png ou.jpeg"
      );
    } else if (file.size > 2424610) {
      setErrorMessage(
        "Arquivo muito grande!\n Por favor, escolha uma imagem menor"
      );
    } else {
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
        .from("testing")
        .upload(filePath, file);
      setFileError(false);
      setPreview(URL.createObjectURL(file));

      setSucessMessage("Imagem Enviada com Sucesso!");
      //se o upload der certo, vou salvar o nome da imagem e associar ao usuário
      setPreferences({ ...userPreferences, ["avatar"]: filePath });
      if (uploadError) {
        setErrorMessage(
          "Houve um erro durante o Upload,\n tente novamente mais tarde!"
        );
        throw uploadError;
      }
    } catch (error: any) {
      console.log(error.message);
    }
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
            <input
              id="input-file"
              type="file"
              value={selectedFile}
              onChange={checkAvatar}
              hidden
            />
            <style.AvatarSelector>
              {preview.length === 0 ? (
                <span>Selecione uma imagem!</span>
              ) : selectedPic.length !== 0 ? (
                <span>{selectedPic}</span>
              ) : (
                <span>Imagem Enviada! Confira Preview</span>
              )}
              {preview.length === 0 ? (
                <img src={logoGrey} />
              ) : (
                <img src={preview} />
              )}
            </style.AvatarSelector>
          </label>
          <button type="submit" disabled={fileError}>
            Enviar Foto
          </button>
          {fileError ? <>{errorMessage}</> : <>{sucessMessage}</>}
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
