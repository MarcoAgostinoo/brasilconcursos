'use client';

import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { client } from './apolloClient'; // Certifique-se de que o caminho está correto

interface Props {
  children: ReactNode;
}

export default function ApolloWrapper({ children }: Props) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
