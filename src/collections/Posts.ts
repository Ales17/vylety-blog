import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { richText } from 'payload/shared'
import { Media } from './Media'
export const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'mapsLink',
      type: 'text',
    },
    {
      name: 'eventDate',
      type: 'date',
    },
    {
      name: 'tripLength',
      type: 'number',
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
