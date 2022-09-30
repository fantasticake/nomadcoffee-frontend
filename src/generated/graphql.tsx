import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  shops?: Maybe<Array<Maybe<CoffeeShop>>>;
  slug: Scalars['String'];
  totalShops: Scalars['Int'];
};

export type CoffeeShop = {
  __typename?: 'CoffeeShop';
  categories?: Maybe<Array<Maybe<Category>>>;
  id: Scalars['Int'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  photos?: Maybe<Array<Maybe<CoffeeShopPhoto>>>;
  user: User;
};

export type CoffeeShopPhoto = {
  __typename?: 'CoffeeShopPhoto';
  id: Scalars['Int'];
  shop: CoffeeShop;
  url: Scalars['String'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: SharedOutput;
  createCoffeeShop: SharedOutput;
  deleteCoffeeShop: SharedOutput;
  editCoffeeShop: SharedOutput;
  editProfile: SharedOutput;
  follow: SharedOutput;
  login: LoginOutput;
  unfollow: SharedOutput;
};


export type MutationCreateAccountArgs = {
  avatarURL?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  githubUsername?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  photos?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type MutationDeleteCoffeeShopArgs = {
  shopId: Scalars['Int'];
};


export type MutationEditCoffeeShopArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Array<InputMaybe<Scalars['Upload']>>>;
};


export type MutationEditProfileArgs = {
  avatarURL?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};


export type MutationFollowArgs = {
  userId: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUnfollowArgs = {
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  searchUsers: SearchUsersOutput;
  seeCategories: SeeCategoriesOutput;
  seeCategory: SeeCategoryOutput;
  seeCoffeeShop: SeeCoffeeShopOutput;
  seeCoffeeShops: SeeCoffeeShopsOutput;
  seeProfile: SeeProfileOutput;
  seeUser: SeeUserOutput;
};


export type QuerySearchUsersArgs = {
  key: Scalars['String'];
};


export type QuerySeeCategoriesArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeCategoryArgs = {
  page?: InputMaybe<Scalars['Int']>;
  slug: Scalars['String'];
};


export type QuerySeeCoffeeShopArgs = {
  shopId: Scalars['Int'];
};


export type QuerySeeCoffeeShopsArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeUserArgs = {
  userId: Scalars['Int'];
};

export type SeeCategoriesOutput = {
  __typename?: 'SeeCategoriesOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Array<Maybe<Category>>>;
};

export type SeeCategoryOutput = {
  __typename?: 'SeeCategoryOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Array<Maybe<CoffeeShop>>>;
};

export type SeeCoffeeShopOutput = {
  __typename?: 'SeeCoffeeShopOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<CoffeeShop>;
};

export type SeeCoffeeShopsOutput = {
  __typename?: 'SeeCoffeeShopsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Array<Maybe<CoffeeShop>>>;
};

export type SeeProfileOutput = {
  __typename?: 'SeeProfileOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<User>;
};

export type SeeUserOutput = {
  __typename?: 'SeeUserOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<User>;
};

export type SharedOutput = {
  __typename?: 'SharedOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  avatarURL?: Maybe<Scalars['String']>;
  coffeeShop?: Maybe<CoffeeShop>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  githubUsername?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};


export type UserFollowersArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type UserFollowingArgs = {
  page?: InputMaybe<Scalars['Int']>;
};

export type SearchUsersOutput = {
  __typename?: 'searchUsersOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  result?: Maybe<Array<Maybe<User>>>;
};

export type SeeCoffeeShopQueryVariables = Exact<{
  shopId: Scalars['Int'];
}>;


export type SeeCoffeeShopQuery = { __typename?: 'Query', seeCoffeeShop: { __typename?: 'SeeCoffeeShopOutput', ok: boolean, error?: string | null, result?: { __typename?: 'CoffeeShop', id: number, name: string } | null } };

export type CreateCoffeeShopMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateCoffeeShopMutation = { __typename?: 'Mutation', createCoffeeShop: { __typename?: 'SharedOutput', ok: boolean, error?: string | null } };

export type DeleteCoffeeShopMutationVariables = Exact<{
  shopId: Scalars['Int'];
}>;


export type DeleteCoffeeShopMutation = { __typename?: 'Mutation', deleteCoffeeShop: { __typename?: 'SharedOutput', ok: boolean, error?: string | null } };

export type EditCoffeeShopMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
}>;


export type EditCoffeeShopMutation = { __typename?: 'Mutation', editCoffeeShop: { __typename?: 'SharedOutput', ok: boolean, error?: string | null } };

export type SeeCoffeeShopsQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeCoffeeShopsQuery = { __typename?: 'Query', seeCoffeeShops: { __typename?: 'SeeCoffeeShopsOutput', ok: boolean, error?: string | null, result?: Array<{ __typename?: 'CoffeeShop', id: number, name: string, photos?: Array<{ __typename?: 'CoffeeShopPhoto', id: number, url: string } | null> | null } | null> | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginOutput', ok: boolean, token?: string | null, error?: string | null } };

export type CreateAccountMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount: { __typename?: 'SharedOutput', ok: boolean, error?: string | null } };

export type SeeProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeProfileQuery = { __typename?: 'Query', seeProfile: { __typename?: 'SeeProfileOutput', ok: boolean, error?: string | null, result?: { __typename?: 'User', id: number, username: string, email: string, coffeeShop?: { __typename?: 'CoffeeShop', id: number } | null } | null } };


export const SeeCoffeeShopDocument = gql`
    query SeeCoffeeShop($shopId: Int!) {
  seeCoffeeShop(shopId: $shopId) {
    ok
    error
    result {
      id
      name
    }
  }
}
    `;

/**
 * __useSeeCoffeeShopQuery__
 *
 * To run a query within a React component, call `useSeeCoffeeShopQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeCoffeeShopQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeCoffeeShopQuery({
 *   variables: {
 *      shopId: // value for 'shopId'
 *   },
 * });
 */
export function useSeeCoffeeShopQuery(baseOptions: Apollo.QueryHookOptions<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>(SeeCoffeeShopDocument, options);
      }
export function useSeeCoffeeShopLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>(SeeCoffeeShopDocument, options);
        }
export type SeeCoffeeShopQueryHookResult = ReturnType<typeof useSeeCoffeeShopQuery>;
export type SeeCoffeeShopLazyQueryHookResult = ReturnType<typeof useSeeCoffeeShopLazyQuery>;
export type SeeCoffeeShopQueryResult = Apollo.QueryResult<SeeCoffeeShopQuery, SeeCoffeeShopQueryVariables>;
export const CreateCoffeeShopDocument = gql`
    mutation CreateCoffeeShop($name: String!) {
  createCoffeeShop(name: $name) {
    ok
    error
  }
}
    `;
export type CreateCoffeeShopMutationFn = Apollo.MutationFunction<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;

/**
 * __useCreateCoffeeShopMutation__
 *
 * To run a mutation, you first call `useCreateCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCoffeeShopMutation, { data, loading, error }] = useCreateCoffeeShopMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>(CreateCoffeeShopDocument, options);
      }
export type CreateCoffeeShopMutationHookResult = ReturnType<typeof useCreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationResult = Apollo.MutationResult<CreateCoffeeShopMutation>;
export type CreateCoffeeShopMutationOptions = Apollo.BaseMutationOptions<CreateCoffeeShopMutation, CreateCoffeeShopMutationVariables>;
export const DeleteCoffeeShopDocument = gql`
    mutation DeleteCoffeeShop($shopId: Int!) {
  deleteCoffeeShop(shopId: $shopId) {
    ok
    error
  }
}
    `;
export type DeleteCoffeeShopMutationFn = Apollo.MutationFunction<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>;

/**
 * __useDeleteCoffeeShopMutation__
 *
 * To run a mutation, you first call `useDeleteCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCoffeeShopMutation, { data, loading, error }] = useDeleteCoffeeShopMutation({
 *   variables: {
 *      shopId: // value for 'shopId'
 *   },
 * });
 */
export function useDeleteCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>(DeleteCoffeeShopDocument, options);
      }
export type DeleteCoffeeShopMutationHookResult = ReturnType<typeof useDeleteCoffeeShopMutation>;
export type DeleteCoffeeShopMutationResult = Apollo.MutationResult<DeleteCoffeeShopMutation>;
export type DeleteCoffeeShopMutationOptions = Apollo.BaseMutationOptions<DeleteCoffeeShopMutation, DeleteCoffeeShopMutationVariables>;
export const EditCoffeeShopDocument = gql`
    mutation EditCoffeeShop($name: String) {
  editCoffeeShop(name: $name) {
    ok
    error
  }
}
    `;
export type EditCoffeeShopMutationFn = Apollo.MutationFunction<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>;

/**
 * __useEditCoffeeShopMutation__
 *
 * To run a mutation, you first call `useEditCoffeeShopMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCoffeeShopMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCoffeeShopMutation, { data, loading, error }] = useEditCoffeeShopMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useEditCoffeeShopMutation(baseOptions?: Apollo.MutationHookOptions<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>(EditCoffeeShopDocument, options);
      }
export type EditCoffeeShopMutationHookResult = ReturnType<typeof useEditCoffeeShopMutation>;
export type EditCoffeeShopMutationResult = Apollo.MutationResult<EditCoffeeShopMutation>;
export type EditCoffeeShopMutationOptions = Apollo.BaseMutationOptions<EditCoffeeShopMutation, EditCoffeeShopMutationVariables>;
export const SeeCoffeeShopsDocument = gql`
    query SeeCoffeeShops {
  seeCoffeeShops {
    ok
    error
    result {
      id
      name
      photos {
        id
        url
      }
    }
  }
}
    `;

/**
 * __useSeeCoffeeShopsQuery__
 *
 * To run a query within a React component, call `useSeeCoffeeShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeCoffeeShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeCoffeeShopsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeeCoffeeShopsQuery(baseOptions?: Apollo.QueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
      }
export function useSeeCoffeeShopsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>(SeeCoffeeShopsDocument, options);
        }
export type SeeCoffeeShopsQueryHookResult = ReturnType<typeof useSeeCoffeeShopsQuery>;
export type SeeCoffeeShopsLazyQueryHookResult = ReturnType<typeof useSeeCoffeeShopsLazyQuery>;
export type SeeCoffeeShopsQueryResult = Apollo.QueryResult<SeeCoffeeShopsQuery, SeeCoffeeShopsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    ok
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateAccountDocument = gql`
    mutation CreateAccount($username: String!, $email: String!, $password: String!) {
  createAccount(username: $username, email: $email, password: $password) {
    ok
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const SeeProfileDocument = gql`
    query SeeProfile {
  seeProfile {
    ok
    result {
      id
      username
      email
      coffeeShop {
        id
      }
    }
    error
  }
}
    `;

/**
 * __useSeeProfileQuery__
 *
 * To run a query within a React component, call `useSeeProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeeProfileQuery(baseOptions?: Apollo.QueryHookOptions<SeeProfileQuery, SeeProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeProfileQuery, SeeProfileQueryVariables>(SeeProfileDocument, options);
      }
export function useSeeProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeProfileQuery, SeeProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeProfileQuery, SeeProfileQueryVariables>(SeeProfileDocument, options);
        }
export type SeeProfileQueryHookResult = ReturnType<typeof useSeeProfileQuery>;
export type SeeProfileLazyQueryHookResult = ReturnType<typeof useSeeProfileLazyQuery>;
export type SeeProfileQueryResult = Apollo.QueryResult<SeeProfileQuery, SeeProfileQueryVariables>;