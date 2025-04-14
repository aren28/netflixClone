// コンポネント
import Header from "./Components/Header/Header";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopMovie from "./Components/TopMovie/TopMovie";

const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: ['"Bebas Neue"', '"Noto Sans JP"', "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
});

function Root() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TopMovie />
      </ThemeProvider>
    </>
  );
}

export default Root;
