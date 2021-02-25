// Core
import ApolloClient from "apollo-boost";

// GQL Server
const uri = "https://funded-pet-library.moonhighway.com/";

export const client = new ApolloClient({ uri });
