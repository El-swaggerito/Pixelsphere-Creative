interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-16`}>
      <div className={`flex items-center ${centered ? "justify-center" : "justify-start"} mb-6`}>
        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
        <span className="text-orange-500 font-medium text-sm tracking-wide uppercase">{label}</span>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      {description && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}
