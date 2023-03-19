import type { Meta, StoryObj } from '@storybook/react';
import { VideoBackground } from './VideoBackground';

const meta: Meta<typeof VideoBackground> = {
  title: 'VideoBackground',
  component: VideoBackground,

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof VideoBackground>;

export const Default: Story = {
  args: {
    // url: 'https://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v',
    // url: 'https://media.failwell.be/roz/Roz2.mp4',
    sources: [
      {
        url: 'https://media.failwell.be/roz/roz-markten-trio.m4v',
        type: 'video/mp4',
      },
    ],
    playbackRate: 0.1,
  },
};
