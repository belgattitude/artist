import type { Metadata } from 'next';
import type { FC } from 'react';
import React from 'react';
import { ClientComponent } from '@/components/ClientComponent';

export const metadata: Metadata = {};

const TestPage: FC = () => {
  return (
    <div>
      <h1>Cool</h1>
      <ClientComponent />
    </div>
  );
};

export default TestPage;
