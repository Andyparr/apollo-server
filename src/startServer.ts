import { ApolloServer } from 'apollo-server-express'
import * as express from 'express'
import * as session from 'express-session'
import * as connectRedis from 'connect-redis'
import { genSchema } from './utils/genSchema'
import { createTypeormConnection } from './utils/createTypeormConnection'
import 'reflect-metadata'
import { redis } from './redis'
import { redisSessionPrefix } from './constants'
import 'dotenv/config'
import { createTestConnection } from './testUtils/createTestConnection'

const SESSION_SECRET = 'ajslkjalksjdfkl'
const RedisStore = connectRedis(session as any)

export const startServer = async () => {
  if (process.env.NODE_ENV === 'test') {
    await redis.flushall()
  }

  const server = new ApolloServer({
    schema: genSchema() as any,
    context: async ({ req }: any) => {
      return {
        redis,
        session: req.session,
        req
      }
    }
  })

  const app = express()

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
        prefix: redisSessionPrefix
      }) as any,
      name: 'qid',
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    })
  )

  const cors = {
    credentials: true,
    origin:
      process.env.NODE_ENV === 'test'
        ? '*'
        : (process.env.FRONTEND_HOST as string)
  }

  if (process.env.NODE_ENV === 'test') {
    await createTestConnection(true)
  } else {
    await createTypeormConnection()
  }

  const port = process.env.NODE_ENV === 'test' ? 4000 : 4000

  server.applyMiddleware({ app })

  await app.listen({ cors, port }, () =>
    console.log(
      `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
    )
  )

  server.stop()
  return app
}
