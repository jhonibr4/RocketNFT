import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes/AppRoutes.routes";

import { defaultTheme } from "./styles/defaultTheme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
