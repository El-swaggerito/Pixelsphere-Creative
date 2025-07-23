import { Button } from "@/components/ui/button"
import { Mail, Phone, ArrowRight } from "lucide-react"

interface WorkCTAProps {
  title?: string
  subtitle?: string
  email?: string
  phone?: string
  buttonText?: string
}

export default function WorkCTA({
  title = "Have a project idea in mind.",
  subtitle = "Get in touch and let's chat!",
  email = "info@pixelsphere.com",
  phone = "(406) 555-0120",
  buttonText = "Request Quote",
}: WorkCTAProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Blue gradient background with curved lines */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 40%, rgba(255, 115, 0, 0.2) 0%, transparent 60%),
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 85% 25%, rgba(99, 102, 241, 0.15) 0%, transparent 55%),
            linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 35%, #2563eb 60%, #3b82f6 85%, #60a5fa 100%)
          `,
        }}
      >
        {/* Curved line elements */}
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 200 Q 200 100, 500 200 T 1000 150 Q 1200 120, 1500 180"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-50 600 Q 300 500, 700 550 T 1200 500 Q 1400 480, 1600 520"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M200 50 Q 500 -20, 800 80 T 1300 60" stroke="rgba(255,255,255,0.04)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">{title}</h2>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">{subtitle}</h2>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-16 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <div className="text-white/80 text-sm mb-2">Email Address</div>
            <div className="text-white text-xl font-medium">{email}</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <div className="text-white/80 text-sm mb-2">Phone Number</div>
            <div className="text-white text-xl font-medium">{phone}</div>
          </div>
        </div>

        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-medium rounded-lg"
        >
          {buttonText}
          <div className="ml-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <ArrowRight className="h-3 w-3 text-white" />
          </div>
        </Button>
      </div>
    </section>
  )
}
