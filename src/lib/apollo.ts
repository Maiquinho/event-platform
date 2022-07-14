import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl5kecpia2vxr01ta5hh5fcm1/master',
    cache: new InMemoryCache()
})