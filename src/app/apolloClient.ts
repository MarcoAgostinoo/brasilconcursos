import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // true para SSR
    link: new HttpLink({
      uri: 'https://us-west-2.cdn.hygraph.com/content/cm3hotuwz04y906uxd176ipwi/master',
    }),
    cache: new InMemoryCache(),
  });
};

export const client = createApolloClient();
