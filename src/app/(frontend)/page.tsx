import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import { RichText, JSXConverters, LinkJSXConverter } from '@payloadcms/richtext-lexical/react'
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

import config from '@/payload.config'
import './styles.css'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

const headers = await getHeaders()
const payloadConfig = await config
const payload = await getPayload({ config: payloadConfig })
const { user } = await payload.auth({ headers })

async function getPosts() {
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

export default async function HomePage() {
  let posts = await getPosts()
  console.log(posts)
  let docs = posts.docs
  return (
    <>
      <div>
        {!docs
          ? ''
          : docs.map((obj) => {
              const data = obj.content as DefaultTypedEditorState

              return (
                <div key={obj.id}>
                  <RichText data={data} />{' '}
                </div>
              )
            })}
      </div>
    </>
  )
}
