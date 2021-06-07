import {
  InMemoryCache,
  NormalizedCacheObject
} from 'apollo-cache-inmemory';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';



const __client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://candidate-api-2020-03.ironforge.co/graphql'
  })
});



export function getClient() {
  return __client;
}
