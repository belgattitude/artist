'use client';

import { useRouter } from 'next/navigation';
import type { FC } from 'react';
import React, { Fragment } from 'react';
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
  const { push } = useRouter();

  const commonVideoCls = 'h-[300px] min-h-[220px] md:min-h-[300px]';

  return (
    <div
      className={`m-1 overflow-hidden p-5 font-family-elika-gorika font-normal md:m-5`}
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
            .filter((v) => v)
            .join(' Ⓒ ');
          const range = [previewVideo.start, previewVideo.end]
            .filter((v) => v)
            .join(',');

          const videoSrc =
            previewVideo.src !== ''
              ? `${previewVideo.src}#t=${range}`
              : previewVideo.src;
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
