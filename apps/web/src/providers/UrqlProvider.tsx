'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import {
  createClient,
  Provider,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql';
import { getStrapiURL } from '@/config/strapi.config';

type UrqlClient = ReturnType<typeof createClient>;

export function UrqlProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [urqlClient] = useState((): UrqlClient => {
    return createClient({
      url: getStrapiURL('/graphql'),
      // disabled suspense: buggy as of nextjs 13.3.1, infinite requests, need to understand why ?
      suspense: false,
      exchanges: [dedupExchange, cacheExchange, fetchExchange],
      fetchOptions: () => {
        // const token = getToken();;
        return {
          // headers: { authorization: token ? `Bearer ${token}` : '' },
        };
      },
    });
  });
  return <Provider value={urqlClient}>{children}</Provider>;
}
