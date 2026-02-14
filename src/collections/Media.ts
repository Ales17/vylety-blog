import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: false,
    },
  ],
  upload: {
    staticDir: 'data/uploads',
    formatOptions: {
      format: 'webp',
      options: {
        quality: 80,
      },
    },
  },
}
