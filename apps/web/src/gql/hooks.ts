import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: unknown; output: unknown; }
  DateTime: { input: unknown; output: unknown; }
  I18NLocaleCode: { input: unknown; output: unknown; }
  JSON: { input: unknown; output: unknown; }
  Long: { input: unknown; output: unknown; }
  Time: { input: unknown; output: unknown; }
  Upload: { input: unknown; output: unknown; }
};

export type IBooleanFilterInput = {
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
  not?: InputMaybe<IBooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type IDateFilterInput = {
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
  not?: InputMaybe<IDateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type IDateTimeFilterInput = {
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
  not?: InputMaybe<IDateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IDiary = {
  __typename?: 'Diary';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  introduction?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IDiaryEntity = {
  __typename?: 'DiaryEntity';
  attributes?: Maybe<IDiary>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IDiaryEntityResponse = {
  __typename?: 'DiaryEntityResponse';
  data?: Maybe<IDiaryEntity>;
};

export type IDiaryEntityResponseCollection = {
  __typename?: 'DiaryEntityResponseCollection';
  data: Array<IDiaryEntity>;
  meta: IResponseCollectionMeta;
};

export type IDiaryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IDiaryFiltersInput>>>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  introduction?: InputMaybe<IStringFilterInput>;
  not?: InputMaybe<IDiaryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IDiaryFiltersInput>>>;
  publishedAt?: InputMaybe<IDateTimeFilterInput>;
  slug?: InputMaybe<IStringFilterInput>;
  title?: InputMaybe<IStringFilterInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
};

export type IDiaryInput = {
  introduction?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type IDiaryRelationResponseCollection = {
  __typename?: 'DiaryRelationResponseCollection';
  data: Array<IDiaryEntity>;
};

export type IError = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type IFileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type IFloatFilterInput = {
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
  not?: InputMaybe<IFloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type IGenericMorph = IDiary | II18NLocale | IProject | IRehearsal | IUploadFile | IUploadFolder | IUsersPermissionsPermission | IUsersPermissionsRole | IUsersPermissionsUser | IWord;

export type II18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type II18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<II18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type II18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<II18NLocaleEntity>;
};

export type II18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<II18NLocaleEntity>;
  meta: IResponseCollectionMeta;
};

export type II18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<II18NLocaleFiltersInput>>>;
  code?: InputMaybe<IStringFilterInput>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  name?: InputMaybe<IStringFilterInput>;
  not?: InputMaybe<II18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<II18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
};

export type II18NLocaleInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type II18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  data: Array<II18NLocaleEntity>;
};

export type IIdFilterInput = {
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
  not?: InputMaybe<IIdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IIntFilterInput = {
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
  not?: InputMaybe<IIntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type IJsonFilterInput = {
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
  not?: InputMaybe<IJsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type ILongFilterInput = {
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
  not?: InputMaybe<ILongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']['input']>;
  notContainsi?: InputMaybe<Scalars['Long']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith?: InputMaybe<Scalars['Long']['input']>;
};

export type IMutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<IUsersPermissionsLoginPayload>;
  createDiary?: Maybe<IDiaryEntityResponse>;
  createProject?: Maybe<IProjectEntityResponse>;
  createRehearsal?: Maybe<IRehearsalEntityResponse>;
  createUploadFile?: Maybe<IUploadFileEntityResponse>;
  createUploadFolder?: Maybe<IUploadFolderEntityResponse>;
  createUsersPermissionsRole?: Maybe<IUsersPermissionsCreateRolePayload>;
  createUsersPermissionsUser: IUsersPermissionsUserEntityResponse;
  createWord?: Maybe<IWordEntityResponse>;
  createWordLocalization?: Maybe<IWordEntityResponse>;
  deleteDiary?: Maybe<IDiaryEntityResponse>;
  deleteProject?: Maybe<IProjectEntityResponse>;
  deleteRehearsal?: Maybe<IRehearsalEntityResponse>;
  deleteUploadFile?: Maybe<IUploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<IUploadFolderEntityResponse>;
  deleteUsersPermissionsRole?: Maybe<IUsersPermissionsDeleteRolePayload>;
  deleteUsersPermissionsUser: IUsersPermissionsUserEntityResponse;
  deleteWord?: Maybe<IWordEntityResponse>;
  emailConfirmation?: Maybe<IUsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<IUsersPermissionsPasswordPayload>;
  login: IUsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<IUploadFileEntityResponse>>;
  register: IUsersPermissionsLoginPayload;
  removeFile?: Maybe<IUploadFileEntityResponse>;
  resetPassword?: Maybe<IUsersPermissionsLoginPayload>;
  updateDiary?: Maybe<IDiaryEntityResponse>;
  updateFileInfo: IUploadFileEntityResponse;
  updateProject?: Maybe<IProjectEntityResponse>;
  updateRehearsal?: Maybe<IRehearsalEntityResponse>;
  updateUploadFile?: Maybe<IUploadFileEntityResponse>;
  updateUploadFolder?: Maybe<IUploadFolderEntityResponse>;
  updateUsersPermissionsRole?: Maybe<IUsersPermissionsUpdateRolePayload>;
  updateUsersPermissionsUser: IUsersPermissionsUserEntityResponse;
  updateWord?: Maybe<IWordEntityResponse>;
  upload: IUploadFileEntityResponse;
};


export type IMutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IMutationCreateDiaryArgs = {
  data: IDiaryInput;
};


export type IMutationCreateProjectArgs = {
  data: IProjectInput;
};


export type IMutationCreateRehearsalArgs = {
  data: IRehearsalInput;
};


export type IMutationCreateUploadFileArgs = {
  data: IUploadFileInput;
};


export type IMutationCreateUploadFolderArgs = {
  data: IUploadFolderInput;
};


export type IMutationCreateUsersPermissionsRoleArgs = {
  data: IUsersPermissionsRoleInput;
};


export type IMutationCreateUsersPermissionsUserArgs = {
  data: IUsersPermissionsUserInput;
};


export type IMutationCreateWordArgs = {
  data: IWordInput;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IMutationCreateWordLocalizationArgs = {
  data?: InputMaybe<IWordInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IMutationDeleteDiaryArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteRehearsalArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationDeleteWordArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IMutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type IMutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type IMutationLoginArgs = {
  input: IUsersPermissionsLoginInput;
};


export type IMutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type IMutationRegisterArgs = {
  input: IUsersPermissionsRegisterInput;
};


export type IMutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type IMutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type IMutationUpdateDiaryArgs = {
  data: IDiaryInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<IFileInfoInput>;
};


export type IMutationUpdateProjectArgs = {
  data: IProjectInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateRehearsalArgs = {
  data: IRehearsalInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateUploadFileArgs = {
  data: IUploadFileInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateUploadFolderArgs = {
  data: IUploadFolderInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateUsersPermissionsRoleArgs = {
  data: IUsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateUsersPermissionsUserArgs = {
  data: IUsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type IMutationUpdateWordArgs = {
  data: IWordInput;
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IMutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<IFileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type IPagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IPaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type IProject = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<IProject>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<IProjectEntity>;
};

export type IProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<IProjectEntity>;
  meta: IResponseCollectionMeta;
};

export type IProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IProjectFiltersInput>>>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  name?: InputMaybe<IStringFilterInput>;
  not?: InputMaybe<IProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IProjectFiltersInput>>>;
  slug?: InputMaybe<IStringFilterInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
};

export type IProjectInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type IProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<IProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type IQuery = {
  __typename?: 'Query';
  diaries?: Maybe<IDiaryEntityResponseCollection>;
  diary?: Maybe<IDiaryEntityResponse>;
  i18NLocale?: Maybe<II18NLocaleEntityResponse>;
  i18NLocales?: Maybe<II18NLocaleEntityResponseCollection>;
  me?: Maybe<IUsersPermissionsMe>;
  project?: Maybe<IProjectEntityResponse>;
  projects?: Maybe<IProjectEntityResponseCollection>;
  rehearsal?: Maybe<IRehearsalEntityResponse>;
  rehearsals?: Maybe<IRehearsalEntityResponseCollection>;
  uploadFile?: Maybe<IUploadFileEntityResponse>;
  uploadFiles?: Maybe<IUploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<IUploadFolderEntityResponse>;
  uploadFolders?: Maybe<IUploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<IUsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<IUsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<IUsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<IUsersPermissionsUserEntityResponseCollection>;
  word?: Maybe<IWordEntityResponse>;
  words?: Maybe<IWordEntityResponseCollection>;
};


export type IQueryDiariesArgs = {
  filters?: InputMaybe<IDiaryFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryDiaryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryI18NLocalesArgs = {
  filters?: InputMaybe<II18NLocaleFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryProjectsArgs = {
  filters?: InputMaybe<IProjectFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryRehearsalArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryRehearsalsArgs = {
  filters?: InputMaybe<IRehearsalFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryUploadFilesArgs = {
  filters?: InputMaybe<IUploadFileFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryUploadFoldersArgs = {
  filters?: InputMaybe<IUploadFolderFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<IUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type IQueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<IUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IQueryWordArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
};


export type IQueryWordsArgs = {
  filters?: InputMaybe<IWordFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']['input']>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IRehearsal = {
  __typename?: 'Rehearsal';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  words?: Maybe<IWordRelationResponseCollection>;
};


export type IRehearsalWordsArgs = {
  filters?: InputMaybe<IWordFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IRehearsalEntity = {
  __typename?: 'RehearsalEntity';
  attributes?: Maybe<IRehearsal>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IRehearsalEntityResponse = {
  __typename?: 'RehearsalEntityResponse';
  data?: Maybe<IRehearsalEntity>;
};

export type IRehearsalEntityResponseCollection = {
  __typename?: 'RehearsalEntityResponseCollection';
  data: Array<IRehearsalEntity>;
  meta: IResponseCollectionMeta;
};

export type IRehearsalFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IRehearsalFiltersInput>>>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  not?: InputMaybe<IRehearsalFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IRehearsalFiltersInput>>>;
  publishedAt?: InputMaybe<IDateTimeFilterInput>;
  slug?: InputMaybe<IStringFilterInput>;
  title?: InputMaybe<IStringFilterInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
  words?: InputMaybe<IWordFiltersInput>;
};

export type IRehearsalInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  words?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IRehearsalRelationResponseCollection = {
  __typename?: 'RehearsalRelationResponseCollection';
  data: Array<IRehearsalEntity>;
};

export type IResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: IPagination;
};

export type IStringFilterInput = {
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
  not?: InputMaybe<IStringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type ITimeFilterInput = {
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
  not?: InputMaybe<ITimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']['input']>;
  notContainsi?: InputMaybe<Scalars['Time']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']['input']>>>;
  startsWith?: InputMaybe<Scalars['Time']['input']>;
};

export type IUploadFile = {
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
  related?: Maybe<Array<Maybe<IGenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type IUploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<IUploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IUploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<IUploadFileEntity>;
};

export type IUploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<IUploadFileEntity>;
  meta: IResponseCollectionMeta;
};

export type IUploadFileFiltersInput = {
  alternativeText?: InputMaybe<IStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IUploadFileFiltersInput>>>;
  caption?: InputMaybe<IStringFilterInput>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  ext?: InputMaybe<IStringFilterInput>;
  folder?: InputMaybe<IUploadFolderFiltersInput>;
  folderPath?: InputMaybe<IStringFilterInput>;
  formats?: InputMaybe<IJsonFilterInput>;
  hash?: InputMaybe<IStringFilterInput>;
  height?: InputMaybe<IIntFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  mime?: InputMaybe<IStringFilterInput>;
  name?: InputMaybe<IStringFilterInput>;
  not?: InputMaybe<IUploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IUploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<IStringFilterInput>;
  provider?: InputMaybe<IStringFilterInput>;
  provider_metadata?: InputMaybe<IJsonFilterInput>;
  size?: InputMaybe<IFloatFilterInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
  url?: InputMaybe<IStringFilterInput>;
  width?: InputMaybe<IIntFilterInput>;
};

export type IUploadFileInput = {
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

export type IUploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<IUploadFileEntity>;
};

export type IUploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<IUploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<IUploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<IUploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type IUploadFolderChildrenArgs = {
  filters?: InputMaybe<IUploadFolderFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IUploadFolderFilesArgs = {
  filters?: InputMaybe<IUploadFileFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IUploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<IUploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IUploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<IUploadFolderEntity>;
};

export type IUploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<IUploadFolderEntity>;
  meta: IResponseCollectionMeta;
};

export type IUploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IUploadFolderFiltersInput>>>;
  children?: InputMaybe<IUploadFolderFiltersInput>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  files?: InputMaybe<IUploadFileFiltersInput>;
  id?: InputMaybe<IIdFilterInput>;
  name?: InputMaybe<IStringFilterInput>;
  not?: InputMaybe<IUploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IUploadFolderFiltersInput>>>;
  parent?: InputMaybe<IUploadFolderFiltersInput>;
  path?: InputMaybe<IStringFilterInput>;
  pathId?: InputMaybe<IIntFilterInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
};

export type IUploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type IUploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<IUploadFolderEntity>;
};

export type IUsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IUsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IUsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type IUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: IUsersPermissionsMe;
};

export type IUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<IUsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type IUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type IUsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type IUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<IUsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IUsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<IUsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IUsersPermissionsPermissionEntityResponse = {
  __typename?: 'UsersPermissionsPermissionEntityResponse';
  data?: Maybe<IUsersPermissionsPermissionEntity>;
};

export type IUsersPermissionsPermissionEntityResponseCollection = {
  __typename?: 'UsersPermissionsPermissionEntityResponseCollection';
  data: Array<IUsersPermissionsPermissionEntity>;
  meta: IResponseCollectionMeta;
};

export type IUsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<IStringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<IUsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  not?: InputMaybe<IUsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IUsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<IUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
};

export type IUsersPermissionsPermissionInput = {
  action?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
};

export type IUsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<IUsersPermissionsPermissionEntity>;
};

export type IUsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type IUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<IUsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<IUsersPermissionsUserRelationResponseCollection>;
};


export type IUsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<IUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IUsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<IUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IUsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<IUsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IUsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<IUsersPermissionsRoleEntity>;
};

export type IUsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<IUsersPermissionsRoleEntity>;
  meta: IResponseCollectionMeta;
};

export type IUsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IUsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  description?: InputMaybe<IStringFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  name?: InputMaybe<IStringFilterInput>;
  not?: InputMaybe<IUsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IUsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<IUsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<IStringFilterInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
  users?: InputMaybe<IUsersPermissionsUserFiltersInput>;
};

export type IUsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IUsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  data: Array<IUsersPermissionsRoleEntity>;
};

export type IUsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type IUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<IUsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type IUsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<IUsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IUsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<IUsersPermissionsUserEntity>;
};

export type IUsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<IUsersPermissionsUserEntity>;
  meta: IResponseCollectionMeta;
};

export type IUsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IUsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<IBooleanFilterInput>;
  confirmationToken?: InputMaybe<IStringFilterInput>;
  confirmed?: InputMaybe<IBooleanFilterInput>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  email?: InputMaybe<IStringFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  not?: InputMaybe<IUsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IUsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<IStringFilterInput>;
  provider?: InputMaybe<IStringFilterInput>;
  resetPasswordToken?: InputMaybe<IStringFilterInput>;
  role?: InputMaybe<IUsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
  username?: InputMaybe<IStringFilterInput>;
};

export type IUsersPermissionsUserInput = {
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

export type IUsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<IUsersPermissionsUserEntity>;
};

export type IWord = {
  __typename?: 'Word';
  cover?: Maybe<IUploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  definition?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  localizations?: Maybe<IWordRelationResponseCollection>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  rehearsals?: Maybe<IRehearsalRelationResponseCollection>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  video?: Maybe<IUploadFileEntityResponse>;
};


export type IWordLocalizationsArgs = {
  filters?: InputMaybe<IWordFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type IWordRehearsalsArgs = {
  filters?: InputMaybe<IRehearsalFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IWordEntity = {
  __typename?: 'WordEntity';
  attributes?: Maybe<IWord>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type IWordEntityResponse = {
  __typename?: 'WordEntityResponse';
  data?: Maybe<IWordEntity>;
};

export type IWordEntityResponseCollection = {
  __typename?: 'WordEntityResponseCollection';
  data: Array<IWordEntity>;
  meta: IResponseCollectionMeta;
};

export type IWordFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<IWordFiltersInput>>>;
  createdAt?: InputMaybe<IDateTimeFilterInput>;
  definition?: InputMaybe<IStringFilterInput>;
  id?: InputMaybe<IIdFilterInput>;
  locale?: InputMaybe<IStringFilterInput>;
  localizations?: InputMaybe<IWordFiltersInput>;
  name?: InputMaybe<IStringFilterInput>;
  not?: InputMaybe<IWordFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<IWordFiltersInput>>>;
  publishedAt?: InputMaybe<IDateTimeFilterInput>;
  rehearsals?: InputMaybe<IRehearsalFiltersInput>;
  slug?: InputMaybe<IStringFilterInput>;
  updatedAt?: InputMaybe<IDateTimeFilterInput>;
};

export type IWordInput = {
  cover?: InputMaybe<Scalars['ID']['input']>;
  definition?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  rehearsals?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  video?: InputMaybe<Scalars['ID']['input']>;
};

export type IWordRelationResponseCollection = {
  __typename?: 'WordRelationResponseCollection';
  data: Array<IWordEntity>;
};

export type IFullWordFragmentFragment = { __typename?: 'Word', name: string, slug: string, definition?: string | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, mime: string } | null } | null } | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, mime: string } | null } | null } | null };

export type ISearchWordsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type ISearchWordsQuery = { __typename?: 'Query', words?: { __typename?: 'WordEntityResponseCollection', data: Array<{ __typename?: 'WordEntity', id?: string | null, attributes?: { __typename?: 'Word', name: string, slug: string, definition?: string | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, mime: string } | null } | null } | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, mime: string } | null } | null } | null } | null }> } | null };

export const FullWordFragmentFragmentDoc = gql`
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
    `;
export const SearchWordsDocument = gql`
    query searchWords($limit: Int = 100, $publicationState: PublicationState = LIVE) {
  words(
    sort: ["name:ASC", "publishedAt:ASC"]
    pagination: {page: 1, pageSize: $limit}
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
    ${FullWordFragmentFragmentDoc}`;

export function useSearchWordsQuery(options?: Omit<Urql.UseQueryArgs<ISearchWordsQueryVariables>, 'query'>) {
  return Urql.useQuery<ISearchWordsQuery, ISearchWordsQueryVariables>({ query: SearchWordsDocument, ...options });
};