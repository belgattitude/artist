/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment FullWordFragment on Word {\n    name\n    slug\n    definition\n    cover {\n      data {\n        attributes {\n          url\n          alternativeText\n          mime\n        }\n      }\n    }\n    video {\n      data {\n        attributes {\n          url\n          mime\n        }\n      }\n    }\n  }\n": types.FullWordFragmentFragmentDoc,
    "\n  query searchWords(\n    $limit: Int = 100\n    $publicationState: PublicationState = LIVE\n  ) {\n    words(\n      sort: [\"name:ASC\", \"publishedAt:ASC\"]\n      pagination: { page: 1, pageSize: $limit }\n      publicationState: $publicationState\n    ) {\n      data {\n        id\n        attributes {\n          ...FullWordFragment\n        }\n      }\n    }\n  }\n": types.SearchWordsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment FullWordFragment on Word {\n    name\n    slug\n    definition\n    cover {\n      data {\n        attributes {\n          url\n          alternativeText\n          mime\n        }\n      }\n    }\n    video {\n      data {\n        attributes {\n          url\n          mime\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment FullWordFragment on Word {\n    name\n    slug\n    definition\n    cover {\n      data {\n        attributes {\n          url\n          alternativeText\n          mime\n        }\n      }\n    }\n    video {\n      data {\n        attributes {\n          url\n          mime\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query searchWords(\n    $limit: Int = 100\n    $publicationState: PublicationState = LIVE\n  ) {\n    words(\n      sort: [\"name:ASC\", \"publishedAt:ASC\"]\n      pagination: { page: 1, pageSize: $limit }\n      publicationState: $publicationState\n    ) {\n      data {\n        id\n        attributes {\n          ...FullWordFragment\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query searchWords(\n    $limit: Int = 100\n    $publicationState: PublicationState = LIVE\n  ) {\n    words(\n      sort: [\"name:ASC\", \"publishedAt:ASC\"]\n      pagination: { page: 1, pageSize: $limit }\n      publicationState: $publicationState\n    ) {\n      data {\n        id\n        attributes {\n          ...FullWordFragment\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;