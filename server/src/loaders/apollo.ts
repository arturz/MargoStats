import { ApolloServer } from 'apollo-server-express'
import { createRateLimitDirective } from 'graphql-rate-limit'
import typeDefs from '../apollo/typeDefs'
import resolvers from '../apollo/resolvers'
import express from 'express'

const rateLimitDirective = createRateLimitDirective({ 
  identifyContext: (ctx) => ctx.ip
})

export default ({ app }: { app: express.Application }) => {
  const server = new ApolloServer({ 
    typeDefs: typeDefs, 
    resolvers,
    schemaDirectives: {
      rateLimit: rateLimitDirective
    },
    context: async ({ req }) => {
      return { 
        ip: req.ip
      }
    }
  })

  server.applyMiddleware({ app })
}