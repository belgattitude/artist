import { isUrlRelativePath, type UrlRelativePath } from '@/lib/typeguards';

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export const getStrapiURL = (path: UrlRelativePath | string = ''): string => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL ?? '';
  if (!isUrlRelativePath(strapiUrl) && strapiUrl === '') {
    throw new Error(
      `Missing or invalid NEXT_PUBLIC_STRAPI_URL (${
        typeof strapiUrl === 'string' ? strapiUrl : 'unknown'
      })`
    );
  }
  return `${strapiUrl}${path}`;
};
