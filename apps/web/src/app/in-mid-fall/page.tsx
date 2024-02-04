import clsx from 'clsx';

import { DynamicIntroAnimatedText } from '@/components/sections/IntroAnimatedText';
import { VideoBackground } from '@/components/video/VideoBackground';

export const metadata = {
  title: 'Alex research one',
  description: 'Experiment',
};

const text = `
  We surrender because there is no fight and what we experience are
  constant changes, from lows to highs, from collapsing to catching
  up, as this creates dynamics in our relationships, dynamics in our
  choreographies. 
`;

export default function ResearchAlexPage() {
  return (
    <div>
      <div className={'flex w-full flex-row'}>
        {/* left sidebar */}
        <div className={'flex max-w-[500px] flex-col bg-fuchsia-400'}>
          {/* title top */}
          <div
            className={
              'p-[50px] font-family-elika-gorika text-5xl text-fuchsia-100'
            }
          >
            Surrender
          </div>
          {/* first grid */}
          <div
            className={
              'grid grid-cols-1 gap-5 p-[50px] md:grid-cols-2 lg:grid-cols-2'
            }
          >
            <div className={'text-3xl'}>{text}</div>

            <div className={''}>
              To give, to be, to face, to let go, to give up, to stand, to try.
              How to face the falls and rises of our fellows and trust them to
              receive ours too.
            </div>
            <div>
              “Surrender” experiences a abandonment of control in the form of a
              catch and fall. It’s also a way to reflect to what matters when
              we’re looking at what drives love and care. We might be naked, we
              might just dance what we love to dance, we might invite friends on
              stage to feel stronger Simple is a non statement, an ode to
              remember dreams.
            </div>
            <div
              className={clsx(
                'm-5 border-[10px] border-white bg-black p-5',
                'relative flex grow flex-col pt-[20px] drop-shadow'
              )}
            >
              <VideoBackground
                src={
                  'https://media.failwell.be/alex/alex-experiment-one.m4v#t=42,52'
                }
                playbackRate={0.3}
                playing={true}
                loop={true}
                className={'max-h-[80px] saturate-0'}
                // playbackStrategy={}
              />
            </div>
            <div>
              <img src={'https://media.failwell.be/alex/sel/alex-1.png'} />
            </div>

            <div className={'border-[10px] border-white p-5'}>
              <span
                className={
                  'translate-x-0.5 translate-y-0.5 bg-gradient-to-tr from-amber-200 to-blue-500 p-2 font-family-elika-gorika text-3xl'
                }
              >
                Attempt #1
              </span>
              <span className={'text-2xl'}>
                To give, to be, to face, to let go, to give up, to stand, to
                try. How to face the falls and rises of our fellows and trust
                them to receive ours too. We surrender because there is no fight
                and what we experience are constant changes, from lows to highs,
                from collapsing to catching up, as this creates dynamics in our
                relationships, dynamics in our choreographies.
              </span>
            </div>

            <div
              className={'m-5 hidden -rotate-1 border-[10px] border-white p-5'}
            >
              <DynamicIntroAnimatedText
                title1={'Beauty remains'}
                title2={'Stubborn'}
                long={`
              
          `}
              />
            </div>
          </div>
        </div>
        {/* end of left sidebar */}
        {/* start right */}
        <div className={'flex flex-1 grow flex-row gap-5'}>
          {/*
          <div>
            <img
              className="w-full"
              src={'https://media.failwell.be/alex/sel/alex-1.png'}
            />
          </div>
          */}

          <div
            className={clsx(
              'relative flex size-full max-h-[200px] w-full grow flex-col'
            )}
          >
            <VideoBackground
              src={
                'https://media.failwell.be/alex/alex-experiment-one.m4v#t=140,145'
              }
              playbackRate={1}
              playing={false}
              loop={false}
              className={'z-10 rotate-180 blur-sm hue-rotate-180 saturate-0'}
              playbackStrategy={{
                type: 'playOnMouseOver',
                // something: '',
              }}
            />
          </div>
        </div>
        {/* end of  right */}
      </div>

      <div
        className={clsx(
          'border-[10px] border-white bg-black p-5',
          'relative flex grow flex-col pt-[20px] drop-shadow'
        )}
      >
        <VideoBackground
          src={'https://media.failwell.be/alex/alse-ab.mp4#t=0,40'}
          playbackRate={1}
          playing={true}
          loop={true}
          className={'h-[400px] opacity-70 hue-rotate-180'}
          playbackStrategy={{
            type: 'autoplay',
            inViewport: true,
          }}
        />
      </div>

      <div className={'-rotate-1 border-[10px] p-5  text-5xl'}>
        The piece could be. Simple What you do when you’re running out of time.
        When you can’t control. “Simple” experiences the abandon of control in
        the form of a catch and fall. It’s also a way to reflect to what matters
        when we’re looking at what drives love and care. We might be naked, we
        might just dance what we love to dance, we might invite friends on stage
        to feel stronger Simple is a non statement, an ode to remember dreams.
      </div>
    </div>
  );
}
