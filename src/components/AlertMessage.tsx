/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
// import { Alert as MUIAlert, Snackbar } from "@mui/material";
import { Alert as MUIAlert, Snackbar } from "@mui/material";
import useAlert from "../context/alert";
import { useTheme } from "../context/theme";
export default function Alert() {
  const { message, handleClose } = useAlert();
  const { theme } = useTheme();
  return (
    <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose}>
      <MUIAlert
        onClose={handleClose}
        severity={message?.type || "error"}
        sx={{
          width: "100%",
          backgroundColor: `${theme.secondary}`,
          color: `${theme.primary}`,
        }}
      >
        {message?.text}
      </MUIAlert>
    </Snackbar>
  );
}
