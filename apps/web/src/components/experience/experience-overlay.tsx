import type { FC, MutableRefObject, ReactElement } from 'react';
import React, { forwardRef, Fragment } from 'react';
import { VideoPlayer } from '@/components/player/VideoPlayer';
import styles from './experience-overlay.module.scss';

export type ExperienceSection = {
  title: string;
  description: string | ReactElement;
  img?: string | string[];
  video?: {
    src: string;
    cover?: string;
  };
};

type ExperienceOverlayProps = {
  scroll: MutableRefObject<number>;
  sections: ExperienceSection[];
};

const Images: FC<{ images: string[] | string; lazy?: boolean }> = (props) => {
  const { images: imgs, lazy = true } = props;
  const images = typeof imgs === 'string' ? [imgs] : imgs;
  if (images.length === 1) {
    return (
      <img
        loading={lazy ? 'lazy' : undefined}
        src={images[0]}
        style={{ width: '100%', marginTop: '15px' }}
      />
    );
  }
  return (
    <div
      className={
        'grid grid-cols-1 gap-1 md:w-[80vw] md:grid-cols-3 lg:w-[90vw]'
      }
    >
      {images.map((img) => {
        return (
          <img
            key={img}
            loading={lazy ? 'lazy' : undefined}
            src={img}
            style={{ width: '100%' }}
          />
        );
      })}
    </div>
  );
};

export const ExperienceOverlay = forwardRef<
  HTMLDivElement,
  ExperienceOverlayProps
>(function Experience(props, ref) {
  const { sections, scroll } = props;
  return (
    <div
      ref={ref}
      className={[styles.scroll].join(' ')}
      onScroll={(e) => {
        scroll.current =
          e.currentTarget.scrollTop /
          (e.currentTarget.scrollHeight - window.innerHeight);
      }}
    >
      {sections.map((props, idx) => {
        const { title, description, img, video } = props;
        const images = typeof img === 'string' ? [img] : img;
        return (
          <Fragment key={`${title}`}>
            <div key={title} className={'relative h-[200vh]'}>
              <div className={[styles.dot, 'p-[15px] md:p-[80px]'].join(' ')}>
                <h1 className={'font-family-elika-gorika'}>{title}</h1>
                <div className={'mb-[25px]'}>{description}</div>
                {images !== undefined ? (
                  <Images images={images} lazy={idx > 1} />
                ) : null}
                {video && (
                  <div className={'aspect-16/9 bg-black'}>
                    <VideoPlayer
                      url={video.src}
                      muted={false}
                      loop={false}
                      light={false}
                      playbackRate={1}
                      controls={true}
                      config={{
                        file: {
                          attributes: {
                            poster: video.cover,
                          },
                        },
                      }}
                      width={'100%'}
                      style={{ width: '100%' }}
                      height={'100%'}
                    />
                  </div>
                )}
              </div>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
});
