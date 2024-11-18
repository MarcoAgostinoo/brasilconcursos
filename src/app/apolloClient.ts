  import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

  const createApolloClient = () => {
    const uri = process.env.NEXT_PUBLIC_API_URL;
    if (!uri) {
      throw new Error('NEXT_PUBLIC_API_URL is not defined');
    }

    return new ApolloClient({
      ssrMode: typeof window === 'undefined', // true para SSR
      link: new HttpLink({
        uri, // Utiliza a variável de ambiente
      }),
      cache: new InMemoryCache(),
    });
  };

  export const client = createApolloClient();
