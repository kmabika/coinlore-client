import {
    ApolloClient,
    NormalizedCacheObject,
  } from '@apollo/client';
import { cache } from './cache';
import { typeDefs } from './schema';

const client: ApolloClient<NormalizedCacheObject>= new ApolloClient({
  cache,
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  typeDefs,
});

export default client;