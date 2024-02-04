import clsx from 'clsx';

import { VideoBackground } from '@/components/video/VideoBackground';

export const metadata = {
  title: 'In mid fall',
  description: 'Experiment',
};

const text = `
 We surrender because there is no fight and what we experience are
 constant changes, from lows to highs, from collapsing to catching
 up, as this creates dynamics in our relationships, dynamics in our
 choreographies. 
`;

export default function InMidFallPage() {
  return (
    <div>
      <div className={'flex w-full flex-row'}>
        {/* left sidebar */}
        <div className={'flex max-w-[500px] flex-col bg-fuchsia-400'}>
          {/* title top */}
          <div
            className={
              'p-[150px] font-family-elika-gorika text-5xl text-fuchsia-100'
            }
          >
            In mid fall
            <span className={'text-xs'}>Work in progress</span>
          </div>
          {/* first grid */}
          <div
            className={
              'grid grid-cols-1 gap-5 p-[50px] md:grid-cols-2 lg:grid-cols-2'
            }
          >
            <div className={'text-3xl'}>{text}</div>

            <div>
              <b>Statement #1:</b> Experiences an abandonment of control in the
              form of a catch and fall. It’s also a way to reflect to what
              matters when we’re looking at what drives love and care. We might
              be naked, we might just dance what we love to dance, we might
              invite friends on stage to feel stronger
              <img
                className="mt-5"
                src={'https://media.failwell.be/alex/sel/alex-1.png'}
              />
            </div>
            <div>
              <b>Statement #2:</b> To give, to be, to face, to let go, to give
              up, to stand, to try.
              <div
                className={clsx(
                  'mt-5 border-white',
                  'relative flex grow flex-col pt-[20px] drop-shadow'
                )}
              >
                <VideoBackground
                  src={
                    'https://media.failwell.be/alex/alex-experiment-one.m4v#t=17,28'
                  }
                  playbackRate={0.6}
                  playing={true}
                  loop={true}
                  className={' '}
                  // playbackStrategy={}
                />
              </div>
            </div>

            <div className={'border-[10px] border-white p-5'}>
              <div
                className={
                  'translate-x-0.5 translate-y-0.5 bg-gradient-to-tr from-amber-200 to-blue-500 p-2 font-family-elika-gorika text-3xl'
                }
              >
                Attempt #1
              </div>
              <div className={'mt-5 text-xl'}>Soon to become</div>
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
    </div>
  );
}
