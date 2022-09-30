import * as dotenv from "dotenv";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

dotenv.config();
console.log(process.env.NODE_ENV);
const httpLink = createHttpLink({
  uri:
    process.env.NODE_ENV === "production"
      ? "https://cake-nomadcoffee-backend.herokuapp.com/graphql"
      : "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      "x-token": token || "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
