import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://countries.trevorblades.com", // process.env.GRAPHQL_API,
    cache: new InMemoryCache()
});

export default client;