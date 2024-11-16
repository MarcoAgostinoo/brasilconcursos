import { ApolloClient, InMemoryCache, ApolloProvider as ApolloHooksProvider } from '@apollo/client';
import { ReactNode } from 'react';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: 'https://your-graphql-endpoint.com/graphql',
    cache: new InMemoryCache(),
  });
};

const client = createApolloClient();

export default function ApolloProvider({ children }: { children: ReactNode }) {
  return <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>;
}
