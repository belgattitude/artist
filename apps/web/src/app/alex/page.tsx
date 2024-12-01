import { cn } from '@/components/utils';

import { AlexBgVideo } from './AlexBgVideo';
import { AlexVideos } from './AlexVideos';

export default function AlexPage() {
  return (
    <div className={'w-full'}>
      <div
        className={
          // 'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
          cn('w-full', 'p-5 opacity-60', 'alex-noisy-bg')
        }
      >
        <span className={'text-2xl'}>Improvised narratives</span>
        <span className={'pl-2 text-sm italic'}>with Alexandra Morette</span>
      </div>
      <AlexBgVideo />
      <div className={'flex flex-col'}>
        <div className={'flex items-center justify-center gap-5'}>
          <div
            className={
              'mt-[100px] p-5 text-4xl font-extralight text-gray-300 mix-blend-difference lg:text-9xl'
            }
          >
            <div className={''}>Exploring r(e)lations</div>
            <div className={'text-2xl'}>
              between a camera and an improvised dance.
            </div>
          </div>
        </div>
        <AlexVideos />
        <div className={'p-10 text-lg mix-blend-difference'}>
          The world soul. That ineffable presence rippling beneath the surface
          of reality, beckoning us to remember what we’ve always known but
          somehow forgot: that we’re not separate from the cosmic dance, but
          participants in it—dancers and dance, observer and observed,
          simultaneously.
        </div>
      </div>
    </div>
  );
}
