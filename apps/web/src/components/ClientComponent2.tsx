'use client';

import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { useRef } from 'react';
import { SplitText } from '@/components/text/SplitText';

export const ClientComponent2: FC = () => {
  const app = useRef<HTMLDivElement>(null);

  const test = useRef<HTMLDivElement>(null);
  const test2 = useRef<HTMLDivElement>(null);
  const test3 = useRef<HTMLDivElement>(null);

  // const ctrls = useAnimation();

  // const isInView = useInView(test, {
  //   margin: '0px 100px -50px 0px',
  // });

  const getCharAnimVariants = (): Variants => {
    return {
      hidden: {
        opacity: 0,
        y: 0,
        z: 0,
        rotate: 90,
        // scale: getRandomInt(3, 12),
        scale: 10,
        skewY: 10,
      },
      visible: {
        opacity: 1,
        y: 0,
        z: 0,
        skewY: 0,
        // scale: getRandomInt(10, 18) / 10,
        scale: 1,

        rotate: 0,
        transition: {
          duration: 1,
          ease: 'easeIn',
          // delayChildren: 0.8,
          // staggerChildren: 1.1,
        },
      },
    };
  };

  const text = `C'est là, à cet endroit précis, suspendu entre deux cîmes d'arbres que
     la couleur prends forme conique, sphérique, scénique.
     Puis un autre jour, différenciation par le sourire d'un soleil levant.
             Il y a un souffle divin caché entre les lignes du destin en courbe et
     prolongations, le décor enseveli, redécoré en quadrillages symétriques
        semble se courber afin de former un lit de rivière.
        Elle emprunte, l'eau, les dessins fermentés d'un angle contrarié.
        Au sommet d'un souterrain.
        Transfiguration déraisonnée de sagesse aux accents de tendresse
        délibérée.

     `;

  return (
    <div ref={app} className={'mt-[10px]'}>
      <div
        aria-label={text}
        style={{ perspective: '1000px' }}
        className={'max-w-[600px] overflow-hidden will-change-transform'}
      >
        {text.split(' ').map((word, index) => {
          return (
            <motion.span
              key={index}
              className={
                'ml-5 inline-block overflow-hidden font-family-elika-gorika text-7xl font-normal text-fuchsia-500'
              }
              initial="hidden"
              whileInView="visible"
              transition={{
                type: 'tween',
                ease: 'easeInOut',
                staggerChildren: 0.15,
                delayChildren: 0.05,
              }}
              viewport={{ once: true }}
            >
              {word.split('').map((character, index) => {
                return (
                  <motion.span
                    aria-hidden="true"
                    key={index}
                    className={'mr-1 inline-block select-none'}
                    variants={getCharAnimVariants()}
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
              // animate={ctrls}
              variants={getCharAnimVariants()}
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
