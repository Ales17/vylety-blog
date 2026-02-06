import { getPayload } from 'payload'
import config from '@/payload.config'
import { Post } from '@/payload-types'

const payloadConfig = await config
const payload = await getPayload({ config: payloadConfig })

export async function getPosts() {
  const result = await payload.find({
    collection: 'posts', // required
    page: 1,
    limit: 10,
    pagination: false, // If you want to disable pagination count, etc.
    where: {}, // pass a `where` query here
    sort: '-title',
  })
  return result
}

export async function getPostById(id: string) {
  const result = await payload.findByID({
    collection: 'posts',
    id: id,
  })
  return result
}
