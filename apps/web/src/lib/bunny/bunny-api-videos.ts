import ky from 'ky';

import {
  type BunnyStreamConfig,
  bunnyStreamConfig,
} from '@/config/bunny.config';
import type { BunnyListVideosResponse } from '@/lib/bunny/bunny-api.types';

export type BunnyStreamVideo = {
  id: string;
  title: string;
  url: {
    m3u8: string;
    mp4: string;
    direct: string;
  };
  date: string;
  poster: string;
  duration: number;
  preview: string;
  videoLibraryId: number;
  collectionId: string;
  size: {
    width: number;
    height: number;
  };
};

export class BunnyApiVideos {
  #config: BunnyStreamConfig;
  constructor(config: BunnyStreamConfig) {
    this.#config = config;
  }
  getVideoList = async (params: {
    collection: string;
  }): Promise<BunnyStreamVideo[]> => {
    const { videoLibraryId, baseUrl } = this.#config;
    const { collection } = params;
    const url = `https://video.bunnycdn.com/library/${videoLibraryId}/videos?page=1&itemsPerPage=500&collection=${collection}&orderBy=date`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        AccessKey: bunnyStreamConfig.embros.getAccessKey(),
      },
    };

    const response = await ky.get(url, options).json<BunnyListVideosResponse>();

    return response.items.map((item) => {
      return {
        id: item.guid,
        title: item.title,
        videoLibraryId: item.videoLibraryId,
        collectionId: item.collectionId,
        date: item.dateUploaded,
        duration: item.length,
        preview: `${baseUrl}/${item.guid}/preview.webp`,
        poster: `${baseUrl}/${item.guid}/${item.thumbnailFileName}`,
        url: {
          m3u8: `${baseUrl}/${item.guid}/playlist.m3u8`,
          mp4: `${baseUrl}/${item.guid}/play_720p.mp4`,
          direct: `https://iframe.mediadelivery.net/play/${videoLibraryId}/${item.guid}`,
        },
        size: {
          width: item.width,
          height: item.height,
        },
      };
    });
  };
}
