'use client';
import { motion } from 'motion/react';
import type { FC } from 'react';

import { cn } from '@/components/utils';
import type { BunnyStreamVideo } from '@/lib/bunny/bunny-api-videos';

import { EmbrosBgVideo } from './EmbrosBgVideo';
import { PerfGroupVideoList } from './PerfGroupVideoList';

type Props = {
  videos: BunnyStreamVideo[];
};

export const EmbrosPerfGroupPage: FC<Props> = (props) => {
  return (
    <div className={'w-full bg-black'}>
      <div
        className={
          // 'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
          cn('w-full', 'p-5 opacity-60', 'alex-noisy-bg')
        }
      >
        <span className={'text-2xl'}>Performance study group</span>
        <span className={'pl-2 text-sm italic'}>@collective</span>
      </div>
      <EmbrosBgVideo />
      <div className={'flex flex-col'}>
        <div className={'flex items-center justify-center gap-5'}>
          <div
            className={
              'mt-[100px] p-5 text-4xl font-extralight text-gray-300 mix-blend-difference lg:text-9xl'
            }
          >
            <div className={''}>
              <span>House</span>
              <span className={'text-clip text-sm'}>out of balance</span>
            </div>
            <div className={'mt-2 text-3xl'}>
              Exploring relation(s) to dance, movement, and the body.
            </div>
          </div>
        </div>
        <div className={cn('mt-[20vh] w-full rounded-t-xl', 'p-5', 'bg-black')}>
          <div className={'text-clip p-10 text-lg mix-blend-difference'}>
            <motion.div
              whileInView={{
                opacity: 1,
                transition: {
                  duration: 0.1,
                  delay: 1,
                  ease: 'easeInOut',
                  zoom: 10,
                  scale: 2,
                  opacity: 1,
                },
              }}
              animate={{
                rotateX: 0,
                animationDelay: '1s',
                x: 0,
                scaleX: 1,
                opacity: 1,
                /*
                transition: {
                  default: { type: 'spring' },
                  opacity: { ease: 'linear' },
                }, */
              }}
              transition={{
                type: 'spring',
                visualDuration: 3,
                bounce: 0.25,
              }}
              /*
              animate={{
                animationDelay: '1s',
                duration: 2,
                x: 0,
                opacity: 1,
                transition: {
                  default: { type: 'spring' },
                  opacity: { ease: 'linear' },
                },
              }} */
              viewport={{ once: true }}
              // whileHover={{ scale: 0.8, x: 10, rotate: 90 }}
              /*
              transition={{
                duration: 0.3,
                delay: 1,
                ease: 'easeInOut',
                zoom: 10,
                opacity: 1,
              }} */
              initial={{ opacity: 40, rotateX: 180, scaleX: 0.1 }}
            >
              Philip glass
            </motion.div>
          </div>

          <PerfGroupVideoList videos={props.videos} />
        </div>
      </div>
    </div>
  );
};
