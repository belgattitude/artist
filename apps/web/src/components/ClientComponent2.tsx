'use client';

import type { Variants } from 'framer-motion';
import { motion, useAnimation, useInView } from 'framer-motion';
import type { FC } from 'react';
import { useRef } from 'react';
import { SplitText } from '@/components/text/SplitText';

export const ClientComponent2: FC = () => {
  const app = useRef<HTMLDivElement>(null);

  const test = useRef<HTMLDivElement>(null);
  const test2 = useRef<HTMLDivElement>(null);
  const test3 = useRef<HTMLDivElement>(null);

  const ctrls = useAnimation();

  const isInView = useInView(test, {
    margin: '0px 100px -50px 0px',
  });

  const characterAnimation: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      z: 100,
      rotateX: '90deg',
      scale: 5.4,
      skewY: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      z: 0,
      skewY: 0,
      scale: 1,
      rotateX: '0deg',
      transition: {
        duration: 1,
        ease: 'easeIn',
        // delayChildren: 0.8,
        // staggerChildren: 1.1,
      },
    },
  };

  const text =
    `Taking a wrong turn allows to see landscapes that wouldn't otherwise have seen.`.repeat(
      4
    );

  return (
    <div ref={app} className={'mt-[500px]'}>
      <div
        aria-label={text}
        style={{ perspective: '1000px' }}
        className={'max-w-[800px] overflow-hidden will-change-transform'}
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              key={index}
              className={
                'ml-5 overflow-hidden font-family-elika-gorika text-8xl text-fuchsia-700'
              }
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
            >
              {word.split('').map((character, index) => {
                return (
                  <motion.span
                    aria-hidden="true"
                    key={index}
                    className={'mr-1'}
                    variants={characterAnimation}
                  >
                    {character}
                  </motion.span>
                );
              })}
            </motion.span>
          );
        })}
      </div>

      <div className={'w-100 flex flex-col'}>
        <div
          ref={test}
          className={'m-5 mx-auto flex max-w-[600px] flex-col p-5 text-2xl'}
        >
          <div className={'content font-family-elika-gorika text-8xl '}>
            <motion.span
              animate={ctrls}
              variants={characterAnimation}
              whileHover={{ scale: 1.2 }}
              initial={{
                visibility: 'hidden',
              }}
              whileInView={{
                visibility: 'visible',
              }}
              transition={{
                delayChildren: 4.25,
                staggerChildren: 0.8,
              }}
            >
              <SplitText>Beauty Remains</SplitText>
            </motion.span>
          </div>
        </div>

        <div
          ref={test2}
          className={'m-5 mx-auto flex max-w-[600px] flex-col p-5 text-2xl'}
        >
          <div className={'content font-family-elika-gorika text-8xl '}>
            <h2>
              <SplitText>Stubborn</SplitText>
            </h2>
          </div>
        </div>

        <div
          ref={test3}
          className={
            'container mx-auto mt-[180px] flex max-w-[600px] flex-col p-5 text-2xl'
          }
        >
          <div
            className={
              'relative font-family-elika-gorika text-7xl drop-shadow '
            }
          >
            <SplitText>
              Standing in the center of a circle. Long waves hearing a sound
              that breathe across the space. Now lying outside far against the
              walls. Hands handing hopes Wishing musical scores By swiftly
              crossing lines of thoughts. Cause at the very present instant has
              gone distant memories. They've let space to the extinction of
              will.
            </SplitText>
          </div>
        </div>
      </div>
    </div>
  );
};
