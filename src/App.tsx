import { BrowserRouter } from "react-router-dom";

import { ApolloProvider } from "@apollo/client";

import { ContextProvider } from "./contexts";
import { client } from "./lib/apollo";
import { Router } from "./router";

export function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <ContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ContextProvider>
      </ApolloProvider>
    </div>
  );
}
