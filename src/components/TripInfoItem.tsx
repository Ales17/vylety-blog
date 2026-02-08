interface Props {
  icon: React.ReactNode
  label: string
}

export default function TripInfoItem({ icon, label }: Props) {
  return (
    <li className="flex gap-x-1 bg-slate-100 rounded-md px-3 py-1">
      {icon} {label}
    </li>
  )
}
