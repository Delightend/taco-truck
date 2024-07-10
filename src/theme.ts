import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#344051",
    },
    secondary: {
      main: "#60c40d",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
