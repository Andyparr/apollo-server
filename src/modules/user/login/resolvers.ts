import * as bcrypt from 'bcryptjs'
import { confirmEmailError, invalidLogin } from './errorMessages'
import { ResolverMap } from '../../../types/graphql-utils'
import { User } from '../../../entity/User'
import { userSessionIdPrefix } from '../../../constants'
import { GQL } from '../../../types/graphql-schema'

const errorResponse = [
  {
    ok: '👎',
    message: invalidLogin
  }
]

export const resolvers: ResolverMap = {
  Mutation: {
    login: async (
      _,
      args: GQL.MutationToLoginArgs,
      { session, redis, req }
    ) => {
      const {
        input: { email, password }
      } = args
      const user = await User.findOne({
        where: { email }
      })

      if (!user) {
        return errorResponse
      }

      if (!user.confirmed) {
        return [
          {
            ok: '👎',
            message: confirmEmailError
          }
        ]
      }

      const validLogin = await bcrypt.compare(password, user.password)

      if (!validLogin) {
        return errorResponse
      }

      session.userId = user.id
      if (req.sessionID) {
        await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID)
      }

      return [
        {
          ok: '👍',
          message: 'Logged in successfully'
        }
      ]
    }
  }
}
