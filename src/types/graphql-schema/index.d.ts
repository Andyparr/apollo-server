import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql'
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */

/* tslint:disable */

declare namespace GQL {
  /*******************************
   *                             *
   *          TYPE DEFS          *
   *                             *
   *******************************/
  export interface IQuery {
    getAllBooks: Array<IBook>
    me?: IUser
    getAllUsers: Array<IUser>
  }

  export interface IBook {
    id: string
    title: string
    author: string
    createdAt: IDate
  }

  export type IDate = any

  export interface IUser {
    id: string
    firstName: string
    lastName: string
    email: string
    password: string
    registeredAt: IDate
    confirmed: boolean
  }

  export interface IMutation {
    addBook: IResponse
    deleteBook: IResponse
    updateBook: IResponse
    sendForgotPasswordEmail?: boolean
    forgotPasswordChange?: Array<IError>
    login: Array<IResponse>
    logout: boolean
    register: Array<IResponse>
    deleteUser: IResponse
  }

  export interface IAddBookInput {
    title: string
    author: string
  }

  export interface IResponse {
    ok: string
    path?: string
    message: string
  }

  export interface IUpdateBookInput {
    id: string
    title?: string
    author?: string
  }

  export interface IError {
    path: string
    message: string
  }

  export interface ILoginInput {
    email: string
    password: string
  }

  export interface IRegisterInput {
    firstName: string
    lastName: string
    email: string
    password: string
  }

  /*********************************
   *                               *
   *         TYPE RESOLVERS        *
   *                               *
   *********************************/
  /**
   * This interface define the shape of your resolver
   * Note that this type is designed to be compatible with graphql-tools resolvers
   * However, you can still use other generated interfaces to make your resolver type-safed
   */
  export interface IResolver {
    Query?: IQueryTypeResolver
    Book?: IBookTypeResolver
    Date?: GraphQLScalarType
    User?: IUserTypeResolver
    Mutation?: IMutationTypeResolver
    Response?: IResponseTypeResolver
    Error?: IErrorTypeResolver
  }
  export interface IQueryTypeResolver<TParent = any> {
    getAllBooks?: QueryToGetAllBooksResolver<TParent>
    me?: QueryToMeResolver<TParent>
    getAllUsers?: QueryToGetAllUsersResolver<TParent>
  }

  export interface QueryToGetAllBooksResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface QueryToMeResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface QueryToGetAllUsersResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface IBookTypeResolver<TParent = any> {
    id?: BookToIdResolver<TParent>
    title?: BookToTitleResolver<TParent>
    author?: BookToAuthorResolver<TParent>
    createdAt?: BookToCreatedAtResolver<TParent>
  }

  export interface BookToIdResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface BookToTitleResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface BookToAuthorResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface BookToCreatedAtResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface IUserTypeResolver<TParent = any> {
    id?: UserToIdResolver<TParent>
    firstName?: UserToFirstNameResolver<TParent>
    lastName?: UserToLastNameResolver<TParent>
    email?: UserToEmailResolver<TParent>
    password?: UserToPasswordResolver<TParent>
    registeredAt?: UserToRegisteredAtResolver<TParent>
    confirmed?: UserToConfirmedResolver<TParent>
  }

  export interface UserToIdResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface UserToFirstNameResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface UserToLastNameResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface UserToEmailResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface UserToPasswordResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface UserToRegisteredAtResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface UserToConfirmedResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface IMutationTypeResolver<TParent = any> {
    addBook?: MutationToAddBookResolver<TParent>
    deleteBook?: MutationToDeleteBookResolver<TParent>
    updateBook?: MutationToUpdateBookResolver<TParent>
    sendForgotPasswordEmail?: MutationToSendForgotPasswordEmailResolver<TParent>
    forgotPasswordChange?: MutationToForgotPasswordChangeResolver<TParent>
    login?: MutationToLoginResolver<TParent>
    logout?: MutationToLogoutResolver<TParent>
    register?: MutationToRegisterResolver<TParent>
    deleteUser?: MutationToDeleteUserResolver<TParent>
  }

  export interface MutationToAddBookArgs {
    input: IAddBookInput
  }
  export interface MutationToAddBookResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToAddBookArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface MutationToDeleteBookArgs {
    id: string
  }
  export interface MutationToDeleteBookResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteBookArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface MutationToUpdateBookArgs {
    input: IUpdateBookInput
  }
  export interface MutationToUpdateBookResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToUpdateBookArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface MutationToSendForgotPasswordEmailArgs {
    email: string
  }
  export interface MutationToSendForgotPasswordEmailResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToSendForgotPasswordEmailArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface MutationToForgotPasswordChangeArgs {
    newPassword: string
    key: string
  }
  export interface MutationToForgotPasswordChangeResolver<
    TParent = any,
    TResult = any
  > {
    (
      parent: TParent,
      args: MutationToForgotPasswordChangeArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface MutationToLoginArgs {
    input: ILoginInput
  }
  export interface MutationToLoginResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToLoginArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface MutationToLogoutResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface MutationToRegisterArgs {
    input: IRegisterInput
  }
  export interface MutationToRegisterResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToRegisterArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface MutationToDeleteUserArgs {
    id: string
  }
  export interface MutationToDeleteUserResolver<TParent = any, TResult = any> {
    (
      parent: TParent,
      args: MutationToDeleteUserArgs,
      context: any,
      info: GraphQLResolveInfo
    ): TResult
  }

  export interface IResponseTypeResolver<TParent = any> {
    ok?: ResponseToOkResolver<TParent>
    path?: ResponseToPathResolver<TParent>
    message?: ResponseToMessageResolver<TParent>
  }

  export interface ResponseToOkResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface ResponseToPathResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface ResponseToMessageResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface IErrorTypeResolver<TParent = any> {
    path?: ErrorToPathResolver<TParent>
    message?: ErrorToMessageResolver<TParent>
  }

  export interface ErrorToPathResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }

  export interface ErrorToMessageResolver<TParent = any, TResult = any> {
    (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult
  }
}
