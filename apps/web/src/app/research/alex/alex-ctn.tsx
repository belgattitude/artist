'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { VideoBackground } from '@/components/video/VideoBackground';
import { siteConfig } from '@/config/site.config';

const Poem = () => {
  return (
    <div
      className={
        'ml-5 mt-[35px] inline-block overflow-hidden font-family-elika-gorika text-7xl font-normal tracking-tight text-black'
      }
    >
      <p>Hello</p>
    </div>
  );
};

const mediaUrl = siteConfig.publicStorage.mediaBaseUrl;

const getVideoBackgroundAt = (
  type: 'effect' | 'no-effect',
  start: number,
  length: number
) => {
  const vid =
    type === 'effect'
      ? 'alex-research-one-with-effect-720p.m4v'
      : 'alex-experiment-one.m4v';
  return `${mediaUrl}/alex/${vid}#t=${start},${start + length}`;
};

const VidBg: FC<{ src: string; className?: string }> = ({ src, className }) => {
  return (
    <VideoBackground
      src={src}
      className={twMerge('relative h-full w-full', className)}
      // playbackRate={0.6}
      loop={true}
      playbackStrategy={{
        type: 'autoplay',
        inViewport: true,
      }}
    />
  );
};

export const AlexCtn: FC = () => {
  const { scrollYProgress } = useScroll();
  // const scaleY = useSpring(scrollYProgress, {});
  const translateElement = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    ['-150%', '0%']
  );
  return (
    <>
      <div className={''}>
        <div className={'min-w-[800px] border-8 text-black'}>..........</div>
        <div className={'flex h-screen w-full flex-col'}>
          {/*
          <motion.div
            initial={{}}
            style={
              {
                // y: translateElement,
                // scaleY: scrollYProgress,
              }
            }
          >
            <VidBg
              className={
                'z-1 rotate-0 border-8 border-black contrast-200 grayscale'
              }
              // src={getVideoBackgroundAt('no-effect', 110, 5)}
              src={getVideoBackgroundAt('no-effect', 82, 1)}
            />
          </motion.div> */}
          <motion.div
            className={'bg-black p-10 font-family-elika-gorika text-7xl'}
          >
            Architecture project
          </motion.div>
          <motion.div
            // initial="hidden"
            // whileInView="visible"
            // viewport={{ once: true }}
            // style={{ scaleY: scrollYProgress }}
            className={'hover:grayscale'}
          >
            <VidBg
              className={'z-1 grayscale-50 max-h-[25vh] rotate-180'}
              src={getVideoBackgroundAt('no-effect', 17, 3)}
            />
            <VidBg
              className={
                'z-1 grayscale-50 max-h-[25vh] rotate-0  brightness-150 contrast-100'
              }
              src={getVideoBackgroundAt('effect', 140, 3)}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};
