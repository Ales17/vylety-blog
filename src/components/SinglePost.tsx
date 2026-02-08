import { Post } from '@/payload-types'
import RichTextDefault from './RichTextDefault'
import { MapIcon, Calendar1Icon, FootprintsIcon } from 'lucide-react'
import TripInfoItem from './TripInfoItem'

interface Props {
  post: Post
}

const formatDate = (date: any) => {
  const dateParsed = Date.parse(date)
  const formatter = new Intl.DateTimeFormat('cs-CZ', { dateStyle: 'long' })
  return formatter.format(dateParsed)
}

export default function SinglePost({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>

      <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
        <TripInfoItem
          title="Datum akce"
          icon={<Calendar1Icon />}
          label={formatDate(post.eventDate)}
        />

        <TripInfoItem
          title="Délka trasy"
          icon={<FootprintsIcon />}
          label={`${post.tripLength} km`}
        />

        <TripInfoItem
          icon={<MapIcon />}
          label={'Mapa trasy'}
          href={post.mapsLink}
          title="Otevřít trasu"
        />
      </ul>

      <div>{!post.content ? '' : <RichTextDefault data={post.content} />}</div>
    </div>
  )
}
