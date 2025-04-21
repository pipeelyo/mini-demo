// src/lib/apolloClient.ts
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://graphql.contentful.com/content/v1/spaces/w4hosymzan98`,
    headers: {
      Authorization: `Bearer xRNb9JoL_lcI2tKwx4E54JKbIs4f0TjM_HnEDo33MR8`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;