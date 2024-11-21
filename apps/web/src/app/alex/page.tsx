import { twMerge } from 'tailwind-merge';

import { VideoPlayer } from '@/components/player/VideoPlayer';
import { VideoBackground } from '@/components/video/VideoBackground';

export default function AlexPage() {
  const videos = [
    {
      url: 'https://media.reflective-resonance.be/alex/alex-utopia-lab-web-rf25.mp4',
    },
    {
      url: 'https://media.reflective-resonance.be/alex/lowres/alex-reel-public-stadium-720.mp4',
    },
    {
      url: 'https://media.reflective-resonance.be/alex/alex-research-one-with-effect-720p.m4v',
    },
  ] as const;

  const background = {
    url: 'https://media.reflective-resonance.be/alex/alex-utopia-lab-web-rf25.mp4#t=92,102.5',
    // className: 'contrast-100 brightness-150 hue-rotate-180',
    className: 'contrast-100 brightness-150 grayscale',
  };

  return (
    <div>
      <VideoBackground
        src={background.url}
        className={twMerge(
          'fixed h-full w-full object-cover',
          background.className
        )}
        playbackRate={0.4}
        loop={true}
        // poster={background.poster}
        playbackStrategy={{
          type: 'autoplay',
          inViewport: false,
        }}
      />

      <div
        className={
          'm-2 mt-[600px] grid bg-black/70 p-4 md:m-5 md:mt-10 md:p-10'
        }
      >
        <div
          className={
            'grid grid-cols-1 gap-4 md:max-w-[60vw] md:grid-cols-2 2xl:max-w-[50vw]'
          }
        >
          {videos.map((video) => {
            return (
              <div
                key={video.url}
                className={
                  'flex aspect-16/9 border-4 border-amber-300 bg-black drop-shadow-2xl'
                }
              >
                <VideoPlayer
                  url={video.url}
                  muted={false}
                  loop={false}
                  light={false}
                  playbackRate={1}
                  controls={true}
                  config={{
                    file: {
                      attributes: {
                        //                                poster: video.cover,
                      },
                    },
                  }}
                  width={'100%'}
                  style={{ width: '100%' }}
                  height={'100%'}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
