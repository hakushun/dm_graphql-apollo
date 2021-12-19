import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
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
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateTodoDto = {
  description?: InputMaybe<Scalars["String"]>;
  title: Scalars["String"];
};

export type DeleteTodoDto = {
  id: Scalars["ID"];
};

export type Mutation = {
  __typename?: "Mutation";
  create: Todo;
  delete: Todo;
  updateStatus: Todo;
};

export type MutationCreateArgs = {
  todo: CreateTodoDto;
};

export type MutationDeleteArgs = {
  todoId: DeleteTodoDto;
};

export type MutationUpdateStatusArgs = {
  todo: UpdateStatusDto;
};

export type Query = {
  __typename?: "Query";
  todo: Todo;
  todos: Array<Maybe<Todo>>;
};

export type QueryTodoArgs = {
  id: Scalars["ID"];
};

export type Todo = {
  __typename?: "Todo";
  createdAt: Scalars["DateTime"];
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  status: TodoStatus;
  title: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export enum TodoStatus {
  Complete = "COMPLETE",
  InProgress = "IN_PROGRESS",
  New = "NEW",
}

export type UpdateStatusDto = {
  id: Scalars["ID"];
  status: TodoStatus;
};

export type FindAllQueryVariables = Exact<{ [key: string]: never }>;

export type FindAllQuery = {
  __typename?: "Query";
  todos: Array<
    | {
        __typename?: "Todo";
        id: string;
        title: string;
        description?: string | null | undefined;
        status: TodoStatus;
      }
    | null
    | undefined
  >;
};

export type CreateMutationVariables = Exact<{
  todo: CreateTodoDto;
}>;

export type CreateMutation = {
  __typename?: "Mutation";
  create: {
    __typename?: "Todo";
    id: string;
    title: string;
    description?: string | null | undefined;
    status: TodoStatus;
  };
};

export const FindAllDocument = gql`
  query findAll {
    todos {
      id
      title
      description
      status
    }
  }
`;

/**
 * __useFindAllQuery__
 *
 * To run a query within a React component, call `useFindAllQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllQuery(
  baseOptions?: Apollo.QueryHookOptions<FindAllQuery, FindAllQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindAllQuery, FindAllQueryVariables>(FindAllDocument, options);
}
export function useFindAllLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FindAllQuery, FindAllQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindAllQuery, FindAllQueryVariables>(FindAllDocument, options);
}
export type FindAllQueryHookResult = ReturnType<typeof useFindAllQuery>;
export type FindAllLazyQueryHookResult = ReturnType<typeof useFindAllLazyQuery>;
export type FindAllQueryResult = Apollo.QueryResult<FindAllQuery, FindAllQueryVariables>;
export const CreateDocument = gql`
  mutation create($todo: CreateTodoDto!) {
    create(todo: $todo) {
      id
      title
      description
      status
    }
  }
`;
export type CreateMutationFn = Apollo.MutationFunction<CreateMutation, CreateMutationVariables>;

/**
 * __useCreateMutation__
 *
 * To run a mutation, you first call `useCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMutation, { data, loading, error }] = useCreateMutation({
 *   variables: {
 *      todo: // value for 'todo'
 *   },
 * });
 */
export function useCreateMutation(
  baseOptions?: Apollo.MutationHookOptions<CreateMutation, CreateMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateMutation, CreateMutationVariables>(CreateDocument, options);
}
export type CreateMutationHookResult = ReturnType<typeof useCreateMutation>;
export type CreateMutationResult = Apollo.MutationResult<CreateMutation>;
export type CreateMutationOptions = Apollo.BaseMutationOptions<
  CreateMutation,
  CreateMutationVariables
>;
