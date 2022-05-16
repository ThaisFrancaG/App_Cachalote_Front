/* eslint-disable react/jsx-filename-extension */
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SignUp from "./pages/UserAuth/SignUp";
import ThemeProvider from "./context/theme";
import SignIn from "./pages/UserAuth/SignIn";
import MainPage from "./pages/Main/MainPage";
import { AlertProvider } from "./context/alert";
import Alert from "./components/AlertMessage";
import { AuthProvider } from "./context/auth";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AlertProvider>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
            <Alert />
          </AlertProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
