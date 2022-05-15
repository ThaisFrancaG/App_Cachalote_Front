/* eslint-disable react/jsx-filename-extension */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/UserAuth/SignUp";
import ThemeProvider from "./context/theme";
import SignIn from "./pages/UserAuth/SignIn";
import MainPage from "./pages/Main/MainPage";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
