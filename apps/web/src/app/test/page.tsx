import type { Metadata } from 'next';
import type { FC } from 'react';

import { DynamicIntroAnimatedText } from '@/components/sections/IntroAnimatedText';

export const metadata: Metadata = {};

const TestPage: FC = () => {
  return (
    <div>
      <h1>Cool</h1>
      <DynamicIntroAnimatedText
        title1={'Beauty remains'}
        title2={'Stubborn'}
        long={`
              Standing in the center of a circle. Long waves hearing a sound
              that breathe across the space. Now lying outside far against the
              walls. Hands handing hopes Wishing musical scores By swiftly
              crossing lines of thoughts. Cause at the very present instant has
              gone distant memories. They've let space to the extinction of
              will.
          `}
      />
    </div>
  );
};

export default TestPage;
