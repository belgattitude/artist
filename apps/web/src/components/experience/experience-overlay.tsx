import type { FC, MutableRefObject, PropsWithChildren } from 'react';
import React, { forwardRef, Fragment } from 'react';
import { VideoPlayer } from '@/components/player/VideoPlayer';
import styles from './styles.module.css';

export type Experience = {
  title: string;
  description: string;
  img?: string;
  video?: string;
};

type ExperienceOverlayProps = {
  scroll: MutableRefObject<number>;
  experiences: Experience[];
};

const Letter: FC<PropsWithChildren> = ({ children }) => (
  <span
    className={
      'mx-3 rounded border border-white p-2 text-5xl text-white opacity-100'
    }
  >
    {children}
  </span>
);

const Txt: FC<PropsWithChildren> = ({ children }) => (
  <span className={'text-2xl text-white opacity-50'}>{children}</span>
);

const Intro: FC = () => {
  return (
    <div
      className="
          translate-5 bg- m-5 p-5 text-2xl text-white opacity-100"
    >
      <Txt>Being</Txt>
      <Letter>what's dance ?</Letter>
      <Txt>Being a</Txt>
      <Letter>question</Letter>
      <Txt>Being</Txt>
      <Letter>Casual</Letter>
      <Txt>with a touch of</Txt>
      <Letter>Crispness</Letter>
      <Txt>Simply</Txt>
      <Letter>Make</Letter>
      <Letter>Let</Letter>

      <Txt>it</Txt>
      <Letter>Happen</Letter>
      <Txt>Still need to figure out the</Txt>
      <Letter>Meaning</Letter>
      <Txt>Placing the condition of</Txt>
      <Letter>Trust</Letter>
    </div>
  );
};

export const ExperienceOverlay = forwardRef<
  HTMLDivElement,
  ExperienceOverlayProps
>(function Experience(props, ref) {
  const { experiences, scroll } = props;
  return (
    <>
      <Intro />
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
            <div key={title} style={{ height: '200vh' }}>
              <div className={styles.dot}>
                <h1>{title}</h1>
                <p>{description}</p>
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
              {idx % 4 && <Intro />}
            </div>
          </Fragment>
        ))}
        {/* <span className="caption">G-29</span> */}
      </div>
    </>
  );
});
