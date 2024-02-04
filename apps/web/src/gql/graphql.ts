/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: unknown; output: unknown; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** A string used to identify an i18n locale */
  I18NLocaleCode: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  Long: { input: unknown; output: unknown; }
  /** A time string with format HH:mm:ss.SSS */
  Time: { input: unknown; output: unknown; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: unknown; output: unknown; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease';
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction';
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entry?: Maybe<GenericMorph>;
  locale?: Maybe<Scalars['String']['output']>;
  release?: Maybe<ContentReleasesReleaseEntityResponse>;
  type: Enum_Contentreleasesreleaseaction_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity';
  attributes?: Maybe<ContentReleasesReleaseAction>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse';
  data?: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  release?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity';
  attributes?: Maybe<ContentReleasesRelease>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse';
  data?: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ContentReleasesReleaseRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseRelationResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Diary = {
  __typename?: 'Diary';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  introduction?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type DiaryEntity = {
  __typename?: 'DiaryEntity';
  attributes?: Maybe<Diary>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type DiaryEntityResponse = {
  __typename?: 'DiaryEntityResponse';
  data?: Maybe<DiaryEntity>;
};

export type DiaryEntityResponseCollection = {
  __typename?: 'DiaryEntityResponseCollection';
  data: Array<DiaryEntity>;
  meta: ResponseCollectionMeta;
};

export type DiaryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<DiaryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  introduction?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<DiaryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<DiaryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type DiaryInput = {
  introduction?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type DiaryRelationResponseCollection = {
  __typename?: 'DiaryRelationResponseCollection';
  data: Array<DiaryEntity>;
};

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = ContentReleasesRelease | ContentReleasesReleaseAction | Diary | I18NLocale | Project | Rehearsal | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser | Word;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type I18NLocaleInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type I18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  data: Array<I18NLocaleEntity>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains?: InputMaybe<Scalars['Long']['input']>;
  containsi?: InputMaybe<Scalars['Long']['input']>;
  endsWith?: InputMaybe<Scalars['Long']['input']>;
  eq?: InputMaybe<Scalars['Long']['input']>;
  eqi?: InputMaybe<Scalars['Long']['input']>;
  gt?: InputMaybe<Scalars['Long']['input']>;
  gte?: InputMaybe<Scalars['Long']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt?: InputMaybe<Scalars['Long']['input']>;
  lte?: InputMaybe<Scalars['Long']['input']>;
  ne?: InputMaybe<Scalars['Long']['input']>;
  nei?: InputMaybe<Scalars['Long']['input']>;
  not?: InputMaybe<LongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  createDiary?: Maybe<DiaryEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createRehearsal?: Maybe<RehearsalEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  createWord?: Maybe<WordEntityResponse>;
  createWordLocalization?: Maybe<WordEntityResponse>;
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  deleteDiary?: Maybe<DiaryEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteRehearsal?: Maybe<RehearsalEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteWord?: Maybe<WordEntityResponse>;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  updateDiary?: Maybe<DiaryEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateRehearsal?: Maybe<RehearsalEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateWord?: Maybe<WordEntityResponse>;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationCreateDiaryArgs = {
  data: DiaryInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
};


export type MutationCreateRehearsalArgs = {
  data: RehearsalInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationCreateWordArgs = {
  data: WordInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationCreateWordLocalizationArgs = {
  data?: InputMaybe<WordInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDiaryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRehearsalArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteWordArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateDiaryArgs = {
  data: DiaryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRehearsalArgs = {
  data: RehearsalInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateWordArgs = {
  data: WordInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  diaries?: Maybe<DiaryEntityResponseCollection>;
  diary?: Maybe<DiaryEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  project?: Maybe<ProjectEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  rehearsal?: Maybe<RehearsalEntityResponse>;
  rehearsals?: Maybe<RehearsalEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  word?: Maybe<WordEntityResponse>;
  words?: Maybe<WordEntityResponseCollection>;
};


export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDiariesArgs = {
  filters?: InputMaybe<DiaryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryDiaryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRehearsalArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRehearsalsArgs = {
  filters?: InputMaybe<RehearsalFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryWordArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type QueryWordsArgs = {
  filters?: InputMaybe<WordFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Rehearsal = {
  __typename?: 'Rehearsal';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  words?: Maybe<WordRelationResponseCollection>;
};


export type RehearsalWordsArgs = {
  filters?: InputMaybe<WordFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RehearsalEntity = {
  __typename?: 'RehearsalEntity';
  attributes?: Maybe<Rehearsal>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RehearsalEntityResponse = {
  __typename?: 'RehearsalEntityResponse';
  data?: Maybe<RehearsalEntity>;
};

export type RehearsalEntityResponseCollection = {
  __typename?: 'RehearsalEntityResponseCollection';
  data: Array<RehearsalEntity>;
  meta: ResponseCollectionMeta;
};

export type RehearsalFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RehearsalFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RehearsalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RehearsalFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  words?: InputMaybe<WordFiltersInput>;
};

export type RehearsalInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  words?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type RehearsalRelationResponseCollection = {
  __typename?: 'RehearsalRelationResponseCollection';
  data: Array<RehearsalEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type TimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  contains?: InputMaybe<Scalars['Time']['input']>;
  containsi?: InputMaybe<Scalars['Time']['input']>;
  endsWith?: InputMaybe<Scalars['Time']['input']>;
  eq?: InputMaybe<Scalars['Time']['input']>;
  eqi?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  ne?: InputMaybe<Scalars['Time']['input']>;
  nei?: InputMaybe<Scalars['Time']['input']>;
  not?: InputMaybe<TimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionEntityResponse = {
  __typename?: 'UsersPermissionsPermissionEntityResponse';
  data?: Maybe<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsPermissionEntityResponseCollection = {
  __typename?: 'UsersPermissionsPermissionEntityResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type Word = {
  __typename?: 'Word';
  cover?: Maybe<UploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  definition?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<WordRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rehearsals?: Maybe<RehearsalRelationResponseCollection>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  video?: Maybe<UploadFileEntityResponse>;
};


export type WordLocalizationsArgs = {
  filters?: InputMaybe<WordFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type WordRehearsalsArgs = {
  filters?: InputMaybe<RehearsalFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type WordEntity = {
  __typename?: 'WordEntity';
  attributes?: Maybe<Word>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type WordEntityResponse = {
  __typename?: 'WordEntityResponse';
  data?: Maybe<WordEntity>;
};

export type WordEntityResponseCollection = {
  __typename?: 'WordEntityResponseCollection';
  data: Array<WordEntity>;
  meta: ResponseCollectionMeta;
};

export type WordFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<WordFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  definition?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  localizations?: InputMaybe<WordFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<WordFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<WordFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  rehearsals?: InputMaybe<RehearsalFiltersInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type WordInput = {
  cover?: InputMaybe<Scalars['ID']['input']>;
  definition?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rehearsals?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};

export type WordRelationResponseCollection = {
  __typename?: 'WordRelationResponseCollection';
  data: Array<WordEntity>;
};

export type FullWordFragmentFragment = { __typename?: 'Word', name: string, slug: string, definition?: string | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, mime: string } | null } | null } | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, mime: string } | null } | null } | null } & { ' $fragmentName'?: 'FullWordFragmentFragment' };

export type SearchWordsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type SearchWordsQuery = { __typename?: 'Query', words?: { __typename?: 'WordEntityResponseCollection', data: Array<{ __typename?: 'WordEntity', id?: string | null, attributes?: (
        { __typename?: 'Word' }
        & { ' $fragmentRefs'?: { 'FullWordFragmentFragment': FullWordFragmentFragment } }
      ) | null }> } | null };

export const FullWordFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullWordFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"definition"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FullWordFragmentFragment, unknown>;
export const SearchWordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchWords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"100"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PublicationState"}},"defaultValue":{"kind":"EnumValue","value":"LIVE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"words"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ListValue","values":[{"kind":"StringValue","value":"name:ASC","block":false},{"kind":"StringValue","value":"publishedAt:ASC","block":false}]}},{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"1"}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageSize"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"publicationState"},"value":{"kind":"Variable","name":{"kind":"Name","value":"publicationState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullWordFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullWordFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Word"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"definition"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alternativeText"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"mime"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchWordsQuery, SearchWordsQueryVariables>;