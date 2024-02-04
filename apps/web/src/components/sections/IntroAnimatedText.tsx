'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';
import { type FC, useLayoutEffect, useRef } from 'react';

import { SplitText } from '@/components/text/SplitText';

import styles from './IntroAnimatedText.module.scss';

type Props = {
  title1: string;
  title2: string;
  long: string;
};

export const IntroAnimatedText: FC<Props> = (props) => {
  const app = useRef<HTMLDivElement>(null);

  const { title1, title2, long } = props;

  const test = useRef<HTMLDivElement>(null);
  const test2 = useRef<HTMLDivElement>(null);
  const test3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scroll = () => {
        const chars = test.current?.querySelectorAll('span.char') ?? [];
        gsap.fromTo(
          chars,
          {
            'will-change': 'opacity, transform',
            opacity: 0,
            scale: 0.6,
            rotationZ: () => gsap.utils.random(-20, 20),
          },
          {
            ease: 'power4',
            opacity: 1,
            scale: 1,
            rotation: 0,
            stagger: 0.4,
            scrollTrigger: {
              trigger: test.current,
              start: 'center+=5% bottom',
              end: '+=50%',
              scrub: true,
            },
          }
        );

        const chars2 = test2.current?.querySelectorAll('span.char') ?? [];

        gsap.fromTo(
          chars2,
          {
            'will-change': 'opacity, transform',
            opacity: 0,
            scale: () => gsap.utils.random(1.8, 2.5),
            rotateX: () => gsap.utils.random(-120, 120),
            z: () => gsap.utils.random(-500, 500),
          },
          {
            ease: 'none',
            opacity: 1,
            scale: 1,
            rotateX: 0,
            z: 0,
            stagger: 0.02,
            scrollTrigger: {
              trigger: test2.current,
              // start: 'top bottom',
              // end: 'bottom top',
              start: 'center+=20% bottom',
              end: '+=40%',
              scrub: true,
            },
          }
        );
      };

      const chars3 = test3.current?.querySelectorAll('span.char') ?? [];

      gsap.fromTo(
        chars3,
        {
          opacity: 0,
          scale: () => gsap.utils.random(1.4, 2.8),
          rotateX: () => gsap.utils.random(-120, 120),
          z: () => gsap.utils.random(-500, 500),
        },
        {
          ease: 'none',
          opacity: 1,
          // scale: 1,
          // rotateX: 0,
          // z: 0,
          scale: () => gsap.utils.random(1.01, 1.05),
          rotateX: () => gsap.utils.random(0, 5),
          z: () => gsap.utils.random(1, 100),
          stagger: 0.001,
          scrollTrigger: {
            trigger: test3.current,
            // start: 'top bottom',
            // end: 'bottom top',
            start: 'center-=30% bottom',
            end: '+=40%',
            scrub: true,
          },
        }
      );

      // initSmoothScrolling();
      scroll();
    }, app);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={app}
      className={'mt-[150px] font-family-elika-gorika text-fuchsia-500'}
    >
      <div className={`${styles.ctn} w-100 flex flex-col`}>
        <div
          ref={test}
          className={'m-5 mx-auto flex max-w-[600px] flex-col p-5'}
        >
          <div className={'content text-6xl md:text-8xl'}>
            <SplitText>{title1}</SplitText>
          </div>
        </div>

        <div
          ref={test2}
          className={
            'm-5 mx-auto flex max-w-[600px] flex-col text-7xl md:text-8xl'
          }
        >
          <div className={'content'}>
            <SplitText>{title2}</SplitText>
          </div>
        </div>

        <div
          ref={test3}
          className={
            'container mx-auto mt-[90px] flex max-w-[700px] flex-col p-5 text-2xl'
          }
        >
          <div className={'relative text-5xl md:text-7xl '}>
            <SplitText>{long ?? ''}</SplitText>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DynamicIntroAnimatedText = dynamic(
  () =>
    import('@/components/sections/IntroAnimatedText').then(
      (mod) => mod.IntroAnimatedText
    ),
  {
    ssr: false,
  }
);
