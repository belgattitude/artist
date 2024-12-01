import { cn } from '@/components/utils';

import { EmbrosBgVideo } from './EmbrosBgVideo';
import { EmbrosStudyGroupVideos } from './EmbrosStudyGroupVideos';

export default function EmbrosStudyGroupPage() {
  return (
    <div className={'w-full'}>
      <div
        className={
          // 'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
          cn(
            'w-full',
            'p-5 text-2xl opacity-90 font-[--font-family-staatliches]',
            'alex-noisy-bg'
          )
        }
      >
        @Embros study group
      </div>
      <EmbrosBgVideo />
      <div className={'flex flex-col'}>
        <div className={'flex items-center justify-center gap-5'}>
          <div
            className={
              'mt-[100px] text-3xl font-[--font-family-staatliches] mix-blend-difference lg:text-9xl'
            }
          >
            What says stories
          </div>
        </div>
        <div className={'p-5 '}>
          Ah, the Weltseele. The world soul. That ineffable presence rippling
          beneath the surface of reality, beckoning us to remember what we’ve
          always known but somehow forgot: that we’re not separate from the
          cosmic dance, but participants in it—dancers and dance, observer and
          observed, simultaneously.
        </div>
        <div className={'p-5'}>
          You see, this concept isn’t some metaphysical mumbo-jumbo; it’s a
          whisper from the deepest recesses of the psychedelic mindscape, a
          reminder that our destinies are not isolated threads but luminous
          strands in a galactic spider web of being. The real trick is to step
          beyond language. Language, for all its beauty and intricacy, is a
          double-edged sword. It carves out distinctions, draws lines in the
          sand. But the Weltseele cannot be contained by these categories.
        </div>
        <div className={'p-5'}>
          It’s the vast, shimmering other that lurks just beyond the reach of
          syntax and semantics. It’s what spills through the cracks when we let
          go of the need to explain and surrender to direct experience. Imagine
          shedding your cultural conditioning like a snake shedding its skin,
          only to find that beneath it all, we are the same pulsating life
          force. As Alan Watts might put it, we’re not skin-encapsulated egos,
          but shimmering nodes in an endless field of consciousness.
        </div>
        <div className={'p-5 text-xl tracking-wide'}>
          The Weltseele isn’t just some airy-fairy notion for philosophers to
          debate over. It’s what’s humming at the core of your being when you
          sit in silence. It’s the light in your lover’s eyes, the rustling of
          the trees, the resonance of a Tibetan singing bowl. It’s both the
          source and the destination, the alpha and the omega, beckoning us to
          wake up, step outside the consensual hallucination we call reality,
          and remember that we’re already home.
        </div>
        <EmbrosStudyGroupVideos />
      </div>
    </div>
  );
}
