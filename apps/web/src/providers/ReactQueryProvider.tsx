'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type JSX, type ReactNode, useState } from 'react';

import { queryClientConfig } from '@/config/query-client.config';

export function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [queryClient] = useState((): QueryClient => {
    return new QueryClient(queryClientConfig);
  });
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
