import { VideoPlayer } from '@/components/player/VideoPlayer';

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

  return (
    <div className={'grid p-10'}>
      <div className={'grid grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3'}>
        {videos.map((video) => {
          return (
            <div
              key={video.url}
              className={'flex aspect-16/9 rounded border-4 border-amber-300'}
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
  );
}
