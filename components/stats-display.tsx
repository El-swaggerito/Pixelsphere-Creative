interface Stat {
  label: string
  value: string
}

interface StatsDisplayProps {
  stats: Stat[]
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
          <div className="text-4xl lg:text-5xl font-bold text-gray-900">{stat.value}</div>
        </div>
      ))}
    </div>
  )
}
