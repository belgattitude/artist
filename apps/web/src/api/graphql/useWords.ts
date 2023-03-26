import { useQuery } from 'urql';
import { graphql } from '@/gql/gql';

const fullWordFragment = graphql(/* GraphQL */ `
  fragment FullWordFragment on Word {
    name
    slug
    definition
    cover {
      data {
        attributes {
          url
          alternativeText
          mime
        }
      }
    }
    video {
      data {
        attributes {
          url
          mime
        }
      }
    }
  }
`);

export const useWords = () => {
  const searchWords = graphql(/* GraphQL */ `
    query searchWords(
      $limit: Int = 100
      $publicationState: PublicationState = LIVE
    ) {
      words(
        sort: ["name:ASC", "publishedAt:ASC"]
        pagination: { page: 1, pageSize: $limit }
        publicationState: $publicationState
      ) {
        data {
          id
          attributes {
            ...FullWordFragment
          }
        }
      }
    }
  `);
  return useQuery({
    query: searchWords,
  });
};
