'use client';

import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { FC } from 'react';
import React, { useLayoutEffect, useRef } from 'react';
import { SplitText } from '@/components/text/SplitText';
import { VideoCard } from '@/components/video/VideoCard';
import styles from './styles.module.scss';

const wrapElements = <K extends keyof HTMLElementTagNameMap>(
  elems: HTMLElement[],
  wrapType: K,
  wrapClass: unknown
) => {
  elems.forEach((char: HTMLElement) => {
    const wrapEl = document.createElement(wrapType);
    if (wrapEl) {
      // wrapEl.classList = wrapClass;
      char.parentNode?.appendChild(wrapEl);
      wrapEl.appendChild(char);
    }
  });
};
export const ClientComponent: FC = () => {
  const app = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);
  const test = useRef<HTMLDivElement>(null);
  const test2 = useRef<HTMLDivElement>(null);
  const test3 = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true,
    });

    const initSmoothScrolling = () => {
      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);
    };

    const ctx = gsap.context(() => {
      // use scoped selectors
      gsap.to('#box', { rotation: 360 });
      // or refs
      if (circle.current) {
        gsap.to(circle.current, { rotation: 360 });
      }

      // console.log('test.current.id', test.current.id);
      // const fx1Titles = [...document.querySelectorAll(test.current.id)];
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
              end: '+=50%',
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
          scale: 1,
          rotateX: 0,
          z: 0,
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

      initSmoothScrolling();
      scroll();
    }, app);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className={'w-100 flex flex-col'}>
      <div ref={app} className="flex font-family-elika-gorika text-2xl">
        <div id="box" className={`${styles.box} m-5 p-5`}>
          selector
        </div>
        <div className={styles.circle} ref={circle}>
          Ref
        </div>
      </div>
      <div>
        <VideoCard
          className={'aspect-16/9  min-h-[250px]'}
          title="Interstices"
          text={
            <>
              <p>Typhen Rocchia Ⓒ 2023</p>
            </>
          }
          video={{
            // src: 'https://media.failwell.be/roz/roz-markten-trio.m4v#t=24,29.1',
            // src: 'https://media.failwell.be/roz/Roz2.mp4',
            src: 'https://media.reflective-resonance.be/typhen/INTERSTICES_typhen-light.mp4#t=0,44',
            playbackRate: 0.3,
            loop: true,
            className:
              // 'transition duration-1000 grayscale-[100] contrast-[1.5] invert-[1] hover:blur-[0px] hover:invert-0',
              'transition duration-1000 ',
          }}
        />
      </div>

      <div
        ref={test}
        className={
          'm-5 mx-auto mt-[120px] flex max-w-[600px] flex-col border-2 p-5 text-2xl'
        }
      >
        <div className={'content font-family-elika-gorika text-8xl '}>
          <h2>
            <SplitText text={'Beauty Remains'} />
          </h2>
        </div>
      </div>

      <div
        ref={test2}
        className={
          'm-5 mx-auto mt-[120px] flex max-w-[600px] flex-col border-2 p-5 text-2xl'
        }
      >
        <div className={'content font-family-elika-gorika text-8xl '}>
          <h2>
            <SplitText text={'Stubborn'} />
          </h2>
        </div>
      </div>

      <div
        ref={test3}
        className={
          'm-5 mx-auto mt-[120px] flex max-w-[600px] flex-col border-2 p-5 text-2xl'
        }
      >
        <div className={'content font-family-elika-gorika text-8xl '}>
          <h2>
            <SplitText
              text={
                'Studying texts and stiff meditation can make you lose your Original\n' +
                'Mind. A solitary tune by a fisherman, though, can be an invaluable\n' +
                'treasure. Dusk rain on the river, the moon peeking in and out of the\n' +
                'clouds; Elegant beyond words, he chants his songs night after night.\n' +
                'This treasure was discovered in a bamboo thicket &mdash; I washed the\n' +
                'bowl in a spring and then mended it. After morning meditation, I take\n' +
                'my gruel in it; At night, it serves me soup or rice. Cracked, worn,\n' +
                'weather-beaten, and misshapen But still of noble stock!'
              }
            />
          </h2>
        </div>
      </div>

      <div className="content">
        <h2 className="content__title content__title--small">
          <span>Beyond</span>
          <span className="font-3xl">meaning</span>
        </h2>
        <p>
          Studying texts and stiff meditation can make you lose your Original
          Mind. A solitary tune by a fisherman, though, can be an invaluable
          treasure. Dusk rain on the river, the moon peeking in and out of the
          clouds; Elegant beyond words, he chants his songs night after night.
        </p>
        <p>
          This treasure was discovered in a bamboo thicket &mdash; I washed the
          bowl in a spring and then mended it. After morning meditation, I take
          my gruel in it; At night, it serves me soup or rice. Cracked, worn,
          weather-beaten, and misshapen But still of noble stock!
        </p>
      </div>
    </div>
  );
};
