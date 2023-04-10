'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { FC } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { SplitText } from '@/components/text/SplitText';

export const ClientComponent: FC = () => {
  const app = useRef<HTMLDivElement>(null);

  const test = useRef<HTMLDivElement>(null);
  const test2 = useRef<HTMLDivElement>(null);
  const test3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const scroll = () => {
        const chars = test.current?.querySelectorAll('.char') ?? [];
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
              start: 'center+=20% bottom',
              end: '+=30%',
              scrub: true,
            },
          }
        );

        const chars2 = test2.current?.querySelectorAll('.char') ?? [];

        chars2.forEach((char) =>
          gsap.set(char.parentNode, { perspective: 1000 })
        );

        gsap.fromTo(
          chars2,
          {
            'will-change': 'opacity, transform',
            opacity: 0,
            scale: () => gsap.utils.random(1.4, 2.1),
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
              end: '+=20%',
              scrub: true,
            },
          }
        );
      };

      const chars3 = test3.current?.querySelectorAll('.char') ?? [];
      chars3.forEach((char) =>
        gsap.set(char.parentNode, { perspective: 1000 })
      );
      gsap.fromTo(
        chars3,
        {
          'will-change': 'opacity, transform',
          opacity: 0,
          scale: () => gsap.utils.random(1.4, 2.1),
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
            start: 'center-=40% bottom',
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
    <div ref={app} className={'mt-[500px]'}>
      <div className={'w-100 flex flex-col'}>
        <div
          ref={test}
          className={
            'm-5 mx-auto mt-[120px] flex max-w-[600px] flex-col p-5 text-2xl'
          }
        >
          <div className={'content font-family-elika-gorika text-8xl '}>
            <h2>
              <SplitText>Beauty Remains</SplitText>
            </h2>
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
