import clsx from 'clsx';

import { DynamicIntroAnimatedText } from '@/components/sections/IntroAnimatedText';
import { VideoBackground } from '@/components/video/VideoBackground';

export const metadata = {
  title: 'Alex research one',
  description: 'Experiment',
};

export default function ResearchAlexPage() {
  return (
    <div
      className={
        'm-[50px] grid grid-cols-1 bg-[#FDE047]/0 md:grid-cols-2 lg:rotate-1 lg:grid-cols-2'
      }
    >
      <div className={''}>
        We surrender because there is no fight and what we experience are
        constant changes, from lows to highs, from collapsing to catching up, as
        this creates dynamics in our relationships, dynamics in our
        choreographies.
      </div>
      <div
        className={clsx(
          'm-5 border-[10px] border-white bg-black p-5',
          'relative flex grow flex-col pt-[20px] drop-shadow'
        )}
      >
        <VideoBackground
          src={'https://media.failwell.be/alex/alex-experiment-one.m4v#t=42,52'}
          playbackRate={0.3}
          playing={true}
          loop={true}
          className={'max-h-[80px] saturate-0'}
          // playbackStrategy={}
        />
      </div>

      <div className={'m-5 border-[10px] border-white p-5 text-3xl'}>
        <h1>Statement</h1>
        To give, to be, to face, to let go, to give up, to stand, to try. How to
        face the falls and rises of our fellows and trust them to receive ours
        too. We surrender because there is no fight and what we experience are
        constant changes, from lows to highs, from collapsing to catching up, as
        this creates dynamics in our relationships, dynamics in our
        choreographies.
      </div>

      <div
        className={clsx(
          'm-5 max-h-[80px] border-[10px] border-white bg-black p-5',
          'relative flex grow flex-col pt-[20px] drop-shadow'
        )}
      >
        <VideoBackground
          src={'https://media.failwell.be/alex/alse-ab.mp4#t=4,6'}
          playbackRate={0.1}
          playing={true}
          loop={true}
          className={'max-h-[80px] opacity-70'}
          playbackStrategy={{
            type: 'autoplay',
            inViewport: true,
          }}
        />
      </div>

      <div className={'m-5 -rotate-1 border-[10px] p-5  text-2xl'}>
        The piece could be. Simple What you do when you’re running out of time.
        When you can’t control. “Simple” experiences the abandon of control in
        the form of a catch and fall. It’s also a way to reflect to what matters
        when we’re looking at what drives love and care. We might be naked, we
        might just dance what we love to dance, we might invite friends on stage
        to feel stronger Simple is a non statement, an ode to remember dreams.
      </div>

      <div
        className={clsx(
          'm-5  border-[10px] border-white bg-black p-5',
          'relative flex grow flex-col pt-[20px] drop-shadow'
        )}
      >
        <h1>Fashion</h1>A wall, 2.2 meters high, 7.82 meters long. Hands painted
        on it's surface. Simple handprints in a crescent dark blue showing
        different directions. It's like a lot of different persons left marks on
        their passages. Only hands seems the same. Roads never ends.
        <VideoBackground
          src={'https://media.failwell.be/alex/alse-ab.mp4#t=4,6'}
          playbackRate={0.1}
          playing={true}
          loop={true}
          className={'opacity-70'}
          playbackStrategy={{
            type: 'autoplay',
            inViewport: true,
          }}
        />
      </div>

      <div className={'m-5 border-[10px] border-black p-5'}>
        "In the whisper of the falls" "Amidst the cascade's silence" "In the
        tranquility of the falls" "Within the falls' calm" "In the hush of the
        waterfall" "Amidst the falls' stillness" "In the quiet of the falls"
        "Within the falls' serenity" "In the peacefulness of the falls" "Amidst
        the falls' quietness" "In the whisper of the falls" "Amidst the
        cascade's silence" "In the tranquility of the falls" "Within the falls'
        calm" "In the hush of the waterfall" "Amidst the falls' stillness" "In
        the quiet of the falls" "Within the falls' serenity" "In the
        peacefulness of the falls" "Amidst the falls' quietness"
      </div>
      <div className={'m-5 -rotate-1 border-[10px] p-5'}>
        <h1>Connect deep</h1>I'm so fed up with food. A wall, 2.2 meters high,
        7.82 meters long. Hands painted on it's surface. Simple handprints in a
        crescent dark blue showing different directions. It's like a lot of
        different persons left marks on their passages. Only hands seems the
        same. Roads never ends.
      </div>

      <div className={'m-5 -rotate-1 border-[10px] border-white p-5'}>
        <h1>Be silly</h1>Sitting in the center sits on the knees with a naked
        torso. A hammer in his left hand. In a furious move, attempts to break a
        bag filled with charcoal or plaster. Repeated shocks ends up breaking
        the skin and the wind blows everything. What remains is flying around
        the space. Can I be silly today while non sense happens.
      </div>

      <div className={'m-5 -rotate-1 border-[10px] border-white p-5'}>
        <DynamicIntroAnimatedText
          title1={'Beauty remains'}
          title2={'Stubborn'}
          long={`
              
          `}
        />
      </div>
    </div>
  );
}
