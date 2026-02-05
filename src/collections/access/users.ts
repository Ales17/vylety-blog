import type { Access } from 'payload'
import { checkRole } from './checkRole'

export const users: Access = ({ req: { user } }) => {
  if (user) {
    if (checkRole(['user'], user)) {
      return true
    }
  }
  return false
}
