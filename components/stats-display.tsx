interface Stat {
  label: string
  value: string
}

interface StatsDisplayProps {
  stats: Stat[]
}

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{stat.label}</div>
          <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">{stat.value}</div>
        </div>
      ))}
    </div>
  )
}
