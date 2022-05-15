/* eslint-disable react/jsx-filename-extension */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/UserAuth/SignUp";
import ThemeProvider from "./context/theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
