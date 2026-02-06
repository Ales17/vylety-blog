import Link from 'next/link'
import type { Url } from 'next/dist/shared/lib/router/router'
interface Props {
  href: Url
  label: string
}

export default function LinkButton({ href, label }: Props) {
  return (
    <Link href={href} className="inline-block p-2 rounded text-white bg-blue-500">
      {label}
    </Link>
  )
}
