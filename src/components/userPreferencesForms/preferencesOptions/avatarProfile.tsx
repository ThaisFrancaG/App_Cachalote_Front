/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ThemeProvider } from "styled-components";
import books from "../../../assets/midiaOptions/books.png";
import mangas from "../../../assets/midiaOptions/manga.png";
import novels from "../../../assets/midiaOptions/novels.png";
import comics from "../../../assets/midiaOptions/comics.png";
import { useTheme } from "../../../context/theme";
import { supabase } from "../../../supabaseClient";
import * as style from "../style";

export default function ProfileImage(props: any) {
  const { theme } = useTheme();
  const { userPreferences, setPreferences } = props;
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [fileError, setFileError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [avatar, setAvatar] = useState(null);
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
      const filePath = "avatar";

      const { error: uploadError } = await supabase.storage
        .from("testing")
        .upload(filePath, file);

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
        <style.Form onSubmit={uploadAvatar}>
          <input type="file" value={selectedFile} onChange={checkAvatar} />
          <button type="submit" disabled={fileError} />
        </style.Form>
      </style.ReadingsContainer>
      <style.PageDescriptor>
        <p>
          Por favor, selecione quais seus tipos de mídia favoritos para leitura!
        </p>

        <p>
          Se tiver dúvidas sobre alguma categoria, confira nossa seção de saiba
          mais
        </p>
      </style.PageDescriptor>
    </ThemeProvider>
  );
}
