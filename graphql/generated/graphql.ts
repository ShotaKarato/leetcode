/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: "Query";
  GetStats?: Maybe<Data>;
};

export type QueryGetStatsArgs = {
  username: Scalars["String"];
};

export type AcSubmissionNum = {
  __typename?: "acSubmissionNum";
  count?: Maybe<Scalars["Int"]>;
  difficulty?: Maybe<Scalars["String"]>;
  submissions?: Maybe<Scalars["String"]>;
};

export type Data = {
  __typename?: "data";
  matchedUser?: Maybe<MatchedUser>;
};

export type MatchedUser = {
  __typename?: "matchedUser";
  submitStats?: Maybe<SubmitStatsGlobal>;
  username?: Maybe<Scalars["String"]>;
};

export type SubmitStatsGlobal = {
  __typename?: Maybe<Scalars["String"]>;
  acSubmissionNum?: Maybe<Array<Maybe<AcSubmissionNum>>>;
};
