'use client';

import { useRouter } from 'next/navigation';
import { type FC, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';

import { VideoCard } from '@/components/video/VideoCard';
import type { InteractionData } from '@/data/interactions';

export type InteractionsProps = {
  title: string;
  items: InteractionData[];
  className?: string;
};

export const Interactions: FC<InteractionsProps> = (props) => {
  const { title, items, className = '' } = props;
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { push } = useRouter();

  const commonVideoCls = 'aspect-16/10';

  return (
    <div
      className={`m-1 grow overflow-hidden p-5 font-family-elika-gorika font-normal md:m-5`}
    >
      <h1 className={twMerge('mb-5 py-10 text-2xl md:text-3xl', className)}>
        {title}
      </h1>
      <div className={'mx-auto flex flex-col flex-wrap gap-5 lg:flex-row'}>
        {items.map((data) => {
          const { previewVideo } = data;
          const key = `${data.title}/${data.previewVideo.src}`;
          const shortText =
            typeof data.shortText === 'string'
              ? data.shortText
              : (data?.shortText ?? []).map((line) => {
                  return (
                    <Fragment key={line}>
                      <p>{line}</p>
                    </Fragment>
                  );
                });
          const text = [`${data.authors.join(' / ')}`, data.year]
            .filter(Boolean)
            .join(' Ⓒ ');
          const range = [previewVideo.start, previewVideo.end]
            .filter(Boolean)
            .join(',');

          const videoSrc =
            previewVideo.src === ''
              ? previewVideo.src
              : `${previewVideo.src}#t=${range}`;
          return (
            <VideoCard
              handleClick={() => {
                if (data.link) {
                  push(data.link);
                }
              }}
              key={key}
              className={commonVideoCls}
              title={data.title}
              text={text}
              video={{
                src: videoSrc,
                playbackRate: previewVideo.playbackRate,
                loop: true,
                className: previewVideo.className,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
