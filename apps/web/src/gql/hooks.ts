import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: unknown;
  DateTime: unknown;
  I18NLocaleCode: unknown;
  JSON: unknown;
  Long: unknown;
  Time: unknown;
  Upload: unknown;
};

export type IBooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains?: InputMaybe<Scalars['Boolean']>;
  containsi?: InputMaybe<Scalars['Boolean']>;
  endsWith?: InputMaybe<Scalars['Boolean']>;
  eq?: InputMaybe<Scalars['Boolean']>;
  eqi?: InputMaybe<Scalars['Boolean']>;
  gt?: InputMaybe<Scalars['Boolean']>;
  gte?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt?: InputMaybe<Scalars['Boolean']>;
  lte?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<IBooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']>;
  notContainsi?: InputMaybe<Scalars['Boolean']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']>;
};

export type IDateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  contains?: InputMaybe<Scalars['Date']>;
  containsi?: InputMaybe<Scalars['Date']>;
  endsWith?: InputMaybe<Scalars['Date']>;
  eq?: InputMaybe<Scalars['Date']>;
  eqi?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  not?: InputMaybe<IDateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']>;
  notContainsi?: InputMaybe<Scalars['Date']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  startsWith?: InputMaybe<Scalars['Date']>;
};

export type IDateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains?: InputMaybe<Scalars['DateTime']>;
  containsi?: InputMaybe<Scalars['DateTime']>;
  endsWith?: InputMaybe<Scalars['DateTime']>;
  eq?: InputMaybe<Scalars['DateTime']>;
  eqi?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  ne?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<IDateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']>;
  notContainsi?: InputMaybe<Scalars['DateTime']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']>;
};

export type IDiary = {
  __typename?: 'Diary';
  createdAt?: Maybe<Scalars['DateTime']>;
  introduction?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IDiaryEntity = {
  __typename?: 'DiaryEntity';
  attributes?: Maybe<IDiary>;
  id?: Maybe<Scalars['ID']>;
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
  introduction?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type IDiaryRelationResponseCollection = {
  __typename?: 'DiaryRelationResponseCollection';
  data: Array<IDiaryEntity>;
};

export type IError = {
  __typename?: 'Error';
  code: Scalars['String'];
  message?: Maybe<Scalars['String']>;
};

export type IFileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type IFloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains?: InputMaybe<Scalars['Float']>;
  containsi?: InputMaybe<Scalars['Float']>;
  endsWith?: InputMaybe<Scalars['Float']>;
  eq?: InputMaybe<Scalars['Float']>;
  eqi?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<IFloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']>;
  notContainsi?: InputMaybe<Scalars['Float']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith?: InputMaybe<Scalars['Float']>;
};

export type IGenericMorph = IDiary | II18NLocale | IProject | IRehearsal | IUploadFile | IUploadFolder | IUsersPermissionsPermission | IUsersPermissionsRole | IUsersPermissionsUser | IWord;

export type II18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type II18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<II18NLocale>;
  id?: Maybe<Scalars['ID']>;
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
  code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type II18NLocaleRelationResponseCollection = {
  __typename?: 'I18NLocaleRelationResponseCollection';
  data: Array<II18NLocaleEntity>;
};

export type IIdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains?: InputMaybe<Scalars['ID']>;
  containsi?: InputMaybe<Scalars['ID']>;
  endsWith?: InputMaybe<Scalars['ID']>;
  eq?: InputMaybe<Scalars['ID']>;
  eqi?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IIdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']>;
  notContainsi?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith?: InputMaybe<Scalars['ID']>;
};

export type IIntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains?: InputMaybe<Scalars['Int']>;
  containsi?: InputMaybe<Scalars['Int']>;
  endsWith?: InputMaybe<Scalars['Int']>;
  eq?: InputMaybe<Scalars['Int']>;
  eqi?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IIntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']>;
  notContainsi?: InputMaybe<Scalars['Int']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith?: InputMaybe<Scalars['Int']>;
};

export type IJsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains?: InputMaybe<Scalars['JSON']>;
  containsi?: InputMaybe<Scalars['JSON']>;
  endsWith?: InputMaybe<Scalars['JSON']>;
  eq?: InputMaybe<Scalars['JSON']>;
  eqi?: InputMaybe<Scalars['JSON']>;
  gt?: InputMaybe<Scalars['JSON']>;
  gte?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt?: InputMaybe<Scalars['JSON']>;
  lte?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  not?: InputMaybe<IJsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']>;
  notContainsi?: InputMaybe<Scalars['JSON']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith?: InputMaybe<Scalars['JSON']>;
};

export type ILongFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains?: InputMaybe<Scalars['Long']>;
  containsi?: InputMaybe<Scalars['Long']>;
  endsWith?: InputMaybe<Scalars['Long']>;
  eq?: InputMaybe<Scalars['Long']>;
  eqi?: InputMaybe<Scalars['Long']>;
  gt?: InputMaybe<Scalars['Long']>;
  gte?: InputMaybe<Scalars['Long']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt?: InputMaybe<Scalars['Long']>;
  lte?: InputMaybe<Scalars['Long']>;
  ne?: InputMaybe<Scalars['Long']>;
  not?: InputMaybe<ILongFilterInput>;
  notContains?: InputMaybe<Scalars['Long']>;
  notContainsi?: InputMaybe<Scalars['Long']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith?: InputMaybe<Scalars['Long']>;
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
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
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
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type IMutationCreateWordLocalizationArgs = {
  data?: InputMaybe<IWordInput>;
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type IMutationDeleteDiaryArgs = {
  id: Scalars['ID'];
};


export type IMutationDeleteProjectArgs = {
  id: Scalars['ID'];
};


export type IMutationDeleteRehearsalArgs = {
  id: Scalars['ID'];
};


export type IMutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type IMutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type IMutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type IMutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type IMutationDeleteWordArgs = {
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type IMutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type IMutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type IMutationLoginArgs = {
  input: IUsersPermissionsLoginInput;
};


export type IMutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};


export type IMutationRegisterArgs = {
  input: IUsersPermissionsRegisterInput;
};


export type IMutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type IMutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type IMutationUpdateDiaryArgs = {
  data: IDiaryInput;
  id: Scalars['ID'];
};


export type IMutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info?: InputMaybe<IFileInfoInput>;
};


export type IMutationUpdateProjectArgs = {
  data: IProjectInput;
  id: Scalars['ID'];
};


export type IMutationUpdateRehearsalArgs = {
  data: IRehearsalInput;
  id: Scalars['ID'];
};


export type IMutationUpdateUploadFileArgs = {
  data: IUploadFileInput;
  id: Scalars['ID'];
};


export type IMutationUpdateUploadFolderArgs = {
  data: IUploadFolderInput;
  id: Scalars['ID'];
};


export type IMutationUpdateUsersPermissionsRoleArgs = {
  data: IUsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type IMutationUpdateUsersPermissionsUserArgs = {
  data: IUsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type IMutationUpdateWordArgs = {
  data: IWordInput;
  id: Scalars['ID'];
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type IMutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<IFileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
};

export type IPagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type IPaginationArg = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type IProject = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<IProject>;
  id?: Maybe<Scalars['ID']>;
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
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
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
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryDiaryArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryI18NLocalesArgs = {
  filters?: InputMaybe<II18NLocaleFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryProjectsArgs = {
  filters?: InputMaybe<IProjectFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryRehearsalArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryRehearsalsArgs = {
  filters?: InputMaybe<IRehearsalFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryUploadFilesArgs = {
  filters?: InputMaybe<IUploadFileFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryUploadFoldersArgs = {
  filters?: InputMaybe<IUploadFolderFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<IUsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type IQueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<IUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IQueryWordArgs = {
  id?: InputMaybe<Scalars['ID']>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
};


export type IQueryWordsArgs = {
  filters?: InputMaybe<IWordFiltersInput>;
  locale?: InputMaybe<Scalars['I18NLocaleCode']>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IRehearsal = {
  __typename?: 'Rehearsal';
  createdAt?: Maybe<Scalars['DateTime']>;
  publishedAt?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  words?: Maybe<IWordRelationResponseCollection>;
};


export type IRehearsalWordsArgs = {
  filters?: InputMaybe<IWordFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IRehearsalEntity = {
  __typename?: 'RehearsalEntity';
  attributes?: Maybe<IRehearsal>;
  id?: Maybe<Scalars['ID']>;
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
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  words?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
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
  and?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  containsi?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  eq?: InputMaybe<Scalars['String']>;
  eqi?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<IStringFilterInput>;
  notContains?: InputMaybe<Scalars['String']>;
  notContainsi?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type ITimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  contains?: InputMaybe<Scalars['Time']>;
  containsi?: InputMaybe<Scalars['Time']>;
  endsWith?: InputMaybe<Scalars['Time']>;
  eq?: InputMaybe<Scalars['Time']>;
  eqi?: InputMaybe<Scalars['Time']>;
  gt?: InputMaybe<Scalars['Time']>;
  gte?: InputMaybe<Scalars['Time']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  lt?: InputMaybe<Scalars['Time']>;
  lte?: InputMaybe<Scalars['Time']>;
  ne?: InputMaybe<Scalars['Time']>;
  not?: InputMaybe<ITimeFilterInput>;
  notContains?: InputMaybe<Scalars['Time']>;
  notContainsi?: InputMaybe<Scalars['Time']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  notNull?: InputMaybe<Scalars['Boolean']>;
  null?: InputMaybe<Scalars['Boolean']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Time']>>>;
  startsWith?: InputMaybe<Scalars['Time']>;
};

export type IUploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<IGenericMorph>>>;
  size: Scalars['Float'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type IUploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<IUploadFile>;
  id?: Maybe<Scalars['ID']>;
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
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  ext?: InputMaybe<Scalars['String']>;
  folder?: InputMaybe<Scalars['ID']>;
  folderPath?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  size?: InputMaybe<Scalars['Float']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type IUploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<IUploadFileEntity>;
};

export type IUploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<IUploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']>;
  files?: Maybe<IUploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent?: Maybe<IUploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type IUploadFolderChildrenArgs = {
  filters?: InputMaybe<IUploadFolderFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IUploadFolderFilesArgs = {
  filters?: InputMaybe<IUploadFileFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IUploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<IUploadFolder>;
  id?: Maybe<Scalars['ID']>;
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
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['ID']>;
  path?: InputMaybe<Scalars['String']>;
  pathId?: InputMaybe<Scalars['Int']>;
};

export type IUploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<IUploadFolderEntity>;
};

export type IUsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type IUsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type IUsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Scalars['String'];
};

export type IUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: IUsersPermissionsMe;
};

export type IUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role?: Maybe<IUsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type IUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type IUsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type IUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  role?: Maybe<IUsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type IUsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<IUsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']>;
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
  action?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
};

export type IUsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<IUsersPermissionsPermissionEntity>;
};

export type IUsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type IUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<IUsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  users?: Maybe<IUsersPermissionsUserRelationResponseCollection>;
};


export type IUsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<IUsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IUsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<IUsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IUsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<IUsersPermissionsRole>;
  id?: Maybe<Scalars['ID']>;
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
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type IUsersPermissionsRoleRelationResponseCollection = {
  __typename?: 'UsersPermissionsRoleRelationResponseCollection';
  data: Array<IUsersPermissionsRoleEntity>;
};

export type IUsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type IUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<IUsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type IUsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<IUsersPermissionsUser>;
  id?: Maybe<Scalars['ID']>;
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
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type IUsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<IUsersPermissionsUserEntity>;
};

export type IWord = {
  __typename?: 'Word';
  cover?: Maybe<IUploadFileEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']>;
  definition?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  localizations?: Maybe<IWordRelationResponseCollection>;
  name: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  rehearsals?: Maybe<IRehearsalRelationResponseCollection>;
  slug: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
  video?: Maybe<IUploadFileEntityResponse>;
};


export type IWordLocalizationsArgs = {
  filters?: InputMaybe<IWordFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type IWordRehearsalsArgs = {
  filters?: InputMaybe<IRehearsalFiltersInput>;
  pagination?: InputMaybe<IPaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type IWordEntity = {
  __typename?: 'WordEntity';
  attributes?: Maybe<IWord>;
  id?: Maybe<Scalars['ID']>;
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
  cover?: InputMaybe<Scalars['ID']>;
  definition?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  rehearsals?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  slug?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<Scalars['ID']>;
};

export type IWordRelationResponseCollection = {
  __typename?: 'WordRelationResponseCollection';
  data: Array<IWordEntity>;
};

export type IFullWordFragmentFragment = { __typename?: 'Word', name: string, slug: string, definition?: string | null, cover?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, mime: string } | null } | null } | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, mime: string } | null } | null } | null };

export type ISearchWordsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
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