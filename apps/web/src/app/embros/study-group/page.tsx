import { cn } from '@/components/utils';

import { EmbrosBgVideo } from './EmbrosBgVideo';
import { EmbrosStudyGroupVideos } from './EmbrosStudyGroupVideos';

export default function EmbrosStudyGroupPage() {
  return (
    <div className={'w-full'}>
      <div
        className={
          // 'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
          cn('w-full', 'p-5 opacity-60', 'alex-noisy-bg')
        }
      >
        <span className={'text-2xl'}>Embros study group</span>
        <span className={'pl-2 text-sm italic'}>& Body narratives</span>
      </div>
      <EmbrosBgVideo />
      <div className={'flex flex-col'}>
        <div className={'flex items-center justify-center gap-5'}>
          <div
            className={
              'mt-[100px] p-5 text-3xl font-extralight text-gray-300 mix-blend-difference lg:text-9xl'
            }
          >
            <div className={''}>Exploring r(e)lations</div>
            <div className={'text-2xl'}>
              between a camera and an improvised dance
            </div>
          </div>
        </div>

        <EmbrosStudyGroupVideos />
      </div>
    </div>
  );
}
