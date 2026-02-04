import type { CollectionConfig } from 'payload'
import { checkRole } from './access/checkRole'
export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: { admin: ({ req: { user } }) => checkRole(['admin'], user) },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'roles',
      type: 'select',
      saveToJWT: true,
      hasMany: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
      ],
    },
  ],
}
