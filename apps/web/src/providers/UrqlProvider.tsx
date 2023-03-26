'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import { createClient, Provider } from 'urql';
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
    });
  });
  return <Provider value={urqlClient}>{children}</Provider>;
}
