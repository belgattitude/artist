import type { Metadata } from 'next';
import type { FC } from 'react';

import { ClientComponent2 } from '@/components/ClientComponent2';

export const metadata: Metadata = {};

const TestPage: FC = () => {
  return (
    <div>
      <h1>Cool</h1>
      <ClientComponent2 />
    </div>
  );
};

export default TestPage;
