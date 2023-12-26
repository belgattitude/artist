import { stringToFloat } from '@/lib/convert';

type VideoUrlTimeRange = {
  start: number;
  end: number | null;
};
export const getVideoUrlTimeRange = (url: string): VideoUrlTimeRange => {
  const parsedUrl = new URL(url);
  const parsed = parsedUrl.hash.match(
    // eslint-disable-next-line regexp/no-unused-capturing-group
    /t=(?<parsedStart>\d{1,9}\.?\d{1,4})(,(?<parsedEnd>\d{1,9}\.?\d{1,4}))?/
  );
  const { parsedStart, parsedEnd } = parsed?.groups ?? {};
  const end = stringToFloat(parsedEnd) ?? null;
  return {
    start: stringToFloat(parsedStart) ?? 0,
    end: end,
  };
};
