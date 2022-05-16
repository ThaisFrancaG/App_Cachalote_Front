/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import { createContext, useState, useContext, ReactNode } from "react";

interface AlertMessage {
  type: "success" | "error";
  text: string;
}

interface IAlertContext {
  message: AlertMessage | null;
  setMessage: (newMessage: AlertMessage | null) => void;
  handleClose: () => void;
}

export const AlertContext = createContext<IAlertContext | null>(null);

interface Props {
  children: React.ReactNode;
}

export function AlertProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<AlertMessage | null>(null);

  function handleClose() {
    setMessage(null);
  }

  return (
    <AlertContext.Provider value={{ message, setMessage, handleClose }}>
      {children}
    </AlertContext.Provider>
  );
}

export default function useAlert() {
  const alertContext = useContext(AlertContext);
  if (!alertContext) {
    throw new Error("useAlert must be used inside a AlertContext Provider");
  }

  return alertContext;
}
