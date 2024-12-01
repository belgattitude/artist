'use client';
import { motion } from 'motion/react';

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
        <span className={'text-2xl'}>Performance study group</span>
        <span className={'pl-2 text-sm italic'}>@Christos Sta Maria</span>
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
              <span>Unfolding</span>
              <span className={'text-lg'}>landscapes</span>
            </div>
            <div className={'mt-3 text-sm'}>
              Inclusive / collective steps - Crossing artistic disciplines -
              Bringing the movement as a source for inclusion. Observing the
              world while it changes.
            </div>
          </div>
        </div>
        <div
          className={cn(
            'mt-[20vh] w-full rounded-t-xl',
            'p-5',
            'alex-noisy-bg'
          )}
        >
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
              The world soul. That ineffable presence rippling beneath the
              surface of reality, beckoning us to remember what we’ve always
              known but somehow forgot: that we’re not separate from the cosmic
              dance, but participants in it—dancers and dance, observer and
              observed, simultaneously.
            </motion.div>
          </div>

          <EmbrosStudyGroupVideos />
        </div>
      </div>
    </div>
  );
}
