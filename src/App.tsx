import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import client from "./apollo";
import Router from "./routers/router";
import { darkTheme, lightTheme } from "./themes";
import { useThemeVar } from "./variables";

function App() {
  const theme = useThemeVar();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

