import { createMuiTheme } from "@material-ui/core/styles";

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#7986cb",
      main: "#4589f4",
      dark: "#2571f6",
      contrastText: "#FFF",
    },
  },
});

export default CustomTheme;
