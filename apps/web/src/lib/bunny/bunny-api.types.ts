export interface BunnyListVideosResponse {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  items: Item[];
}

export interface Item {
  videoLibraryId: number;
  guid: string;
  title: string;
  description: null;
  dateUploaded: string;
  views: number;
  isPublic: boolean;
  length: number;
  status: number;
  framerate: number;
  rotation: number;
  width: number;
  height: number;
  availableResolutions: AvailableResolutions;
  outputCodecs: OutputCodecs;
  thumbnailCount: number;
  encodeProgress: number;
  storageSize: number;
  captions: unknown[];
  hasMP4Fallback: boolean;
  collectionId: string;
  thumbnailFileName: ThumbnailFileName;
  averageWatchTime: number;
  totalWatchTime: number;
  category: string;
  chapters: unknown[];
  moments: unknown[];
  metaTags: unknown[];
  transcodingMessages: TranscodingMessage[];
  jitEncodingEnabled: boolean;
}

export type AvailableResolutions = string;
/*
  | '360p,480p,720p,240p'
  | '480p,720p,240p,360p'
  | '360p,480p,240p';
*/
export type OutputCodecs = 'x264';

export type ThumbnailFileName = 'thumbnail.jpg';

export interface TranscodingMessage {
  timeStamp: Date;
  level: number;
  issueCode: number;
  message: string;
  value: string;
}
