interface SectionHeaderProps {
  label: string
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ label, title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-12 sm:mb-16`}>
      <div className={`flex items-center ${centered ? "justify-center" : "justify-start"} mb-4 sm:mb-6`}>
        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
        <span className="text-orange-500 font-medium text-xs sm:text-sm tracking-wide uppercase">{label}</span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{title}</h2>
      {description && <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}
