import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import client from "./apollo";
import GlobalStyle from "./GlobalStyle";
import PrivateRouter from "./routers/privateRouter";
import PublicRouter from "./routers/pubilcRouter";
import { darkTheme, lightTheme } from "./themes";
import { useThemeVar, useTokenVar } from "./variables";

function App() {
  const theme = useThemeVar();
  const token = useTokenVar();
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        {token ? <PrivateRouter /> : <PublicRouter />}
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

