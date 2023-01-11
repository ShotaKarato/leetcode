export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AcSubmissionNum = {
  __typename?: 'AcSubmissionNum';
  count?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['String']>;
  submissions?: Maybe<Scalars['String']>;
};

export type MatchedUser = {
  __typename?: 'MatchedUser';
  submitStats?: Maybe<SubmitStatsGlobal>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  matchedUser?: Maybe<MatchedUser>;
};


export type QueryMatchedUserArgs = {
  username: Scalars['String'];
};

export type SubmitStatsGlobal = {
  __typename?: 'SubmitStatsGlobal';
  acSubmissionNum?: Maybe<Array<Maybe<AcSubmissionNum>>>;
};

export type Schema = {
  __typename?: 'schema';
  query?: Maybe<Query>;
};

export type GetUserStatsQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetUserStatsQuery = { __typename?: 'Query', matchedUser?: { __typename?: 'MatchedUser', username?: string | null, submitStats?: { __typename?: 'SubmitStatsGlobal', acSubmissionNum?: Array<{ __typename?: 'AcSubmissionNum', difficulty?: string | null, count?: number | null, submissions?: string | null } | null> | null } | null } | null };
