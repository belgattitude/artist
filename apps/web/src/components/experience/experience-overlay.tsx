import type {
  FC,
  MutableRefObject,
  PropsWithChildren,
  ReactComponentElement,
  ReactElement,
} from 'react';
import React, { forwardRef, Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { VideoPlayer } from '@/components/player/VideoPlayer';
import styles from './styles.module.css';

export type Experience = {
  title: string;
  description: string | ReactElement;
  img?: string;
  video?: string;
};

type ExperienceOverlayProps = {
  scroll: MutableRefObject<number>;
  experiences: Experience[];
};

export const ExperienceOverlay = forwardRef<
  HTMLDivElement,
  ExperienceOverlayProps
>(function Experience(props, ref) {
  const { experiences, scroll } = props;
  return (
    <>
      <div
        ref={ref}
        onScroll={(e) => {
          scroll.current =
            e.currentTarget.scrollTop /
            (e.currentTarget.scrollHeight - window.innerHeight);
        }}
      >
        {experiences.map(({ title, description, img, video }, idx) => (
          <Fragment key={`${title}`}>
            <div key={title} style={{ height: '200vh' }} className={'relative'}>
              <div className={styles.dot}>
                <h1>{title}</h1>
                <div>{description}</div>
                {img && (
                  <img src={img} style={{ width: '100%', marginTop: '15px' }} />
                )}
                {video && (
                  <VideoPlayer
                    url={video}
                    muted={true}
                    loop={false}
                    light={false}
                    playbackRate={1}
                    controls={true}
                    width={'100%'}
                    style={{ width: '100%', marginTop: '15px' }}
                    height={'100%'}
                  />
                )}
              </div>
            </div>
          </Fragment>
        ))}
        {/* <span className="caption">G-29</span> */}
      </div>
    </>
  );
});
