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

import * as style from "../style";
export default function ReadingOptions(props: any) {
  const { theme } = useTheme();
  const { userPreferences, setPreferences } = props;
  function handleSelection(selected: string) {
    console.log(selected);
    const value = userPreferences[selected];
    console.log(value);
    if (value === true) {
      setPreferences({ ...userPreferences, [selected]: false });
    } else {
      setPreferences({ ...userPreferences, [selected]: true });
    }
  }
  console.log(userPreferences);
  const options = "../../../../public/assets";
  return (
    <ThemeProvider theme={theme}>
      <style.ReadingsContainer>
        <style.ReadingsSelector
          id="books"
          selected={userPreferences.books}
          theme={theme}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            handleSelection(event.currentTarget.id);
          }}
        >
          <figure>
            <img src={books} alt={"books"} />
          </figure>
          <span className="title">Livros</span>
          <span>Moby Dick</span>
        </style.ReadingsSelector>
        <style.ReadingsSelector
          id="mangas"
          selected={userPreferences.mangas}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            handleSelection(event.currentTarget.id);
          }}
        >
          <figure>
            <img src={mangas} alt={"mangas"} />
          </figure>
          <span className="title">Mangas</span>
          <span>Os Filhos Da Baleia</span>
        </style.ReadingsSelector>

        <style.ReadingsSelector
          id="novels"
          selected={userPreferences.novels}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            handleSelection(event.currentTarget.id);
          }}
        >
          <figure>
            <img src={novels} alt={"novels"} />
          </figure>
          <span className="title">Novels</span>
          <span>No Game No Life</span>
        </style.ReadingsSelector>

        <style.ReadingsSelector
          id="comics"
          selected={userPreferences.comics}
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            handleSelection(event.currentTarget.id);
          }}
        >
          <figure>
            <img src={comics} alt={"comics"} />
          </figure>
          <span className="title">Quadrinhos</span>
          <span>Cachalote</span>
        </style.ReadingsSelector>
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
