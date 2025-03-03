import { bunnyStreamConfig } from '@/config/bunny.config';
import { BunnyApiVideos } from '@/lib/bunny/bunny-api-videos';

import { EmbrosPerfGroupPage } from './PerfGroupVideoPage';

export const dynamic = 'force-dynamic';

export default async function EmbrosPerfGroupRoute() {
  const api = new BunnyApiVideos(bunnyStreamConfig.embros);
  const videos = await api.getVideoList({
    collection: 'd0784b24-f6fe-41db-a7e9-02ac2ee4805d',
  });
  return <EmbrosPerfGroupPage videos={videos} />;
}
