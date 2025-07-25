import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  backgroundImage?: string
}

export default function CTASection({ title, description, buttonText, backgroundImage }: CTASectionProps) {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {
              background: "linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)",
            }
      }
    >
      <div className="absolute inset-0 bg-blue-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">{title}</h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">{description}</p>
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
        >
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      </div>
    </section>
  )
}
