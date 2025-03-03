const defaultBunnyPullZone = 'vz-a7c17ef9-09c';
const defaultBunnyBaseUrl = `https://${defaultBunnyPullZone}.b-cdn.net`;

export type BunnyStreamConfig = {
  pullZone: string;
  baseUrl: string;
  videoLibraryId: number;
};

export const bunnyStreamConfig = {
  embros: {
    pullZone: defaultBunnyPullZone,
    baseUrl: defaultBunnyBaseUrl,
    videoLibraryId: 345_450,
  },
} as const satisfies Record<string, BunnyStreamConfig>;
