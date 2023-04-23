import { Lenis as ReactLenis, useLenis } from '@studio-freight/react-lenis';
import Image from 'next/image';
import type { FC, MutableRefObject, ReactElement } from 'react';
import React, { forwardRef, Fragment } from 'react';
import { VideoPlayer } from '@/components/player/VideoPlayer';
import styles from './styles.module.css';

export type Experience = {
  title: string;
  description: string | ReactElement;
  img?: string | string[];
  video?: string;
};

type ExperienceOverlayProps = {
  scroll: MutableRefObject<number>;
  experiences: Experience[];
};

const Images: FC<{ images: string[] | string }> = (props) => {
  const { images } = props;
  if (typeof images === 'string') {
    return (
      <Image src={images} alt="" style={{ width: '100%', marginTop: '15px' }} />
    );
  }
  return (
    <div className={'flex flex-col md:flex-row '}>
      {images.map((img) => {
        return (
          <img
            key={img}
            src={img}
            style={{ width: '100%', marginTop: '15px' }}
          />
        );
      })}
    </div>
  );
};

export const ExperienceOverlay2 = forwardRef<
  HTMLDivElement,
  ExperienceOverlayProps
>(function Experience(props, ref) {
  const { experiences, scroll } = props;
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <>
      <ReactLenis root options={{}}>
        <div ref={ref}>
          {experiences.map((props) => {
            const { title, description, img, video } = props;
            const images = typeof img === 'string' ? [img] : img;
            return (
              <Fragment key={`${title}`}>
                <div
                  key={title}
                  style={{ height: '200vh' }}
                  className={'relative'}
                >
                  <div className={styles.dot}>
                    <h1>{title}</h1>
                    <div>{description}</div>
                    {images !== undefined ? <Images images={images} /> : null}
                    {video && (
                      <VideoPlayer
                        url={video}
                        muted={false}
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
            );
          })}
        </div>
      </ReactLenis>
    </>
  );
});

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
        {experiences.map((props) => {
          const { title, description, img, video } = props;
          const images = typeof img === 'string' ? [img] : img;
          return (
            <Fragment key={`${title}`}>
              <div
                key={title}
                style={{ height: '200vh' }}
                className={'relative'}
              >
                <div className={styles.dot}>
                  <h1>{title}</h1>
                  <div>{description}</div>
                  {images !== undefined ? <Images images={images} /> : null}
                  {video && (
                    <VideoPlayer
                      url={video}
                      muted={false}
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
          );
        })}
        {/* <span className="caption">G-29</span> */}
      </div>
    </>
  );
});
