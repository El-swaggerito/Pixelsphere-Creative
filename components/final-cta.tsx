import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
              Ready to Level Up Your Brand?
            </h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Let's Talk.</h2>
          </div>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
          >
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  )
}
