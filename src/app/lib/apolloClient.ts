// apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://us-west-2.cdn.hygraph.com/content/cm3hotuwz04y906uxd176ipwi/master',
  cache: new InMemoryCache(),
});

export default client;
