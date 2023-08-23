import type { Metadata } from 'next';
import type { FC } from 'react';
import { IntroAnimatedText } from '@/components/sections/IntroAnimatedText';

export const metadata: Metadata = {};

const TestPage: FC = () => {
  return (
    <div>
      <h1>Cool</h1>
      <IntroAnimatedText />
    </div>
  );
};

export default TestPage;
