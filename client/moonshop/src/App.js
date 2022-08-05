import React from "react";
import RouteApp from './routes/index';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const ShoppingApp = () => {
  return(
    <ApolloProvider client={client}>
      <RouteApp/>
    </ApolloProvider>
  )
}

export default React.memo(ShoppingApp);
