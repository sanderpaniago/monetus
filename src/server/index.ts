/* eslint-disable react-hooks/rules-of-hooks */
import { envelop, useMaskedErrors, useSchema } from '@envelop/core'
import { useGraphQlJit } from '@envelop/graphql-jit'
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'
import { makeExecutableSchema } from '@graphql-tools/schema'

import { GraphQLError } from 'graphql'
import type { ExecutionResult } from 'graphql'
import type { FormatErrorHandler } from '@envelop/core'

import { typeDefs } from './graphql/index'
import persisted from '../../@generated/graphql/persisted.json'
import { getListStock } from './resolvers/getListStock'
import { getLogoStock } from './resolvers/getLogoStock'
import { getStockBySymbol } from './resolvers/getStockBySymbol'
import { chartStock } from './resolvers/chartStock'

const persistedQueries = new Map(Object.entries(persisted))

const apiSchema = makeExecutableSchema({
  resolvers: {
    Query: {
      getListStock,
      getLogoStock,
      getStockBySymbol,
      chartStock
    }
  },
  typeDefs: typeDefs
})

const isBadRequestError = (err: GraphQLError) => {
  return err.originalError && err.originalError.name === 'BadRequestError'
}

const maskError: FormatErrorHandler = (err: GraphQLError | unknown) => {
  if (err instanceof GraphQLError) {
    if (!isBadRequestError(err)) {
      return new GraphQLError('Sorry, something went wrong.')
    }

    return err
  }

  return new GraphQLError('Sorry, something went wrong.')
}

const getEnvelop = async (formatError: FormatErrorHandler) =>
  envelop({
    plugins: [
      useSchema(await apiSchema),
      useMaskedErrors({ formatError }),
      useGraphQlJit(),
      useValidationCache(),
      useParserCache()
    ]
  })

const envelopPromise = getEnvelop(maskError)

export const execute = async <
  D extends Record<string, unknown>,
  V extends Record<string, unknown>
>(
  options: {
    operationName: string
    variables: V
    query?: string
  },
  envelopContext: Record<string, unknown> = {}
) => {
  const { operationName, variables, query: maybeQuery } = options
  const query = maybeQuery ?? persistedQueries.get(operationName)

  if (query == null) {
    throw new Error(`No query found for operationName: ${operationName}`)
  }

  const enveloped = await envelopPromise
  const {
    parse,
    contextFactory,
    execute: run,
    schema
  } = enveloped(envelopContext)

  return run({
    schema,
    document: parse(query),
    variableValues: variables,
    contextValue: await contextFactory({}),
    operationName
  }) as Promise<ExecutionResult<D>>
}
