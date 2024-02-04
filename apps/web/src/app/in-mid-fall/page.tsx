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
        <div
          className={
            'flex max-w-[500px] flex-col bg-gradient-to-tr from-fuchsia-400 to-fuchsia-300'
          }
        >
          {/* title top */}
          <div
            className={
              'p-[150px] font-family-elika-gorika text-5xl text-fuchsia-50'
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
              matters when we’re looking at what drives love and care.
              <img
                className="mt-5"
                src={'https://media.failwell.be/alex/sel/alex-1.png'}
              />
            </div>
            <div>
              <b>Statement #2:</b> To give, to be, to face, to let go, to give
              up, to stand, to try inside and outside.
              <div
                className={clsx(
                  'mt-5 h-[120px] border-white',
                  'relative flex grow flex-col pt-[20px] drop-shadow'
                )}
              >
                <VideoBackground
                  src={
                    'https://media.failwell.be/alex/alex-experiment-one.m4v#t=117,118'
                  }
                  playbackRate={0.6}
                  playing={true}
                  loop={false}
                  className={'contrast-75 saturate-0'}
                  playbackStrategy={{
                    type: 'playOnMouseOver',
                  }}
                />
              </div>
            </div>
            <div>
              <b>In mid fall collective:</b> Sébastien Vanvelthem - Alexandra
              Morette - Ezra Fieremans and friends.
            </div>

            <div className={'border-[10px] border-white p-5'}>
              <div
                className={
                  'translate-x-0.5 translate-y-0.5 bg-gradient-to-tr from-amber-200 to-blue-500 p-2 font-family-elika-gorika text-3xl'
                }
              >
                Attempt #1
              </div>
              <div className={'mt-5 text-xl'}>
                Soon to be, but actually not started
              </div>
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
