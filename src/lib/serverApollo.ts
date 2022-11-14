import { ApolloClient, InMemoryCache } from "@apollo/client";

const serverApollo = new ApolloClient({
    uri: "https://countries.trevorblades.com", // process.env.GRAPHQL_API,
    cache: new InMemoryCache(),
    ssrMode: true,
});

export default serverApollo;