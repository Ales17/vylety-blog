import { PaginatedDocs } from 'payload'
import { Post } from '@/payload-types'
import { ArrowRightIcon } from 'lucide-react'
import { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'
import RichTextDefault from './RichTextDefault'
import LinkButton from './LinkButton'
interface Props {
  paginatedDocs: PaginatedDocs<Post>
}

export default function PostGrid(props: Props) {
  const { paginatedDocs } = props

  const docs = paginatedDocs.docs

  return (
    <div className="flex flex-col gap-2">
      {docs.map((doc) => {
        const data = doc.content as DefaultTypedEditorState
        return (
          <div
            key={doc.id}
            className="border rounded-3xl bg-white border-slate-200 p-2 md:p-4 flex flex-col gap-y-1"
          >
            <h2 className="text-2xl">{doc.title}</h2>
            <RichTextDefault className="line-clamp-2" data={data} />
            <div>
              <LinkButton
                href={`/posts/${doc.id}-${doc.slug}`}
                label={'Přečíst'}
                icon={<ArrowRightIcon />}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
