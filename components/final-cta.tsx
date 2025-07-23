import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Ready to Level Up Your Brand?</h2>
            <h2 className="text-4xl font-bold text-gray-900">Let's Talk.</h2>
          </div>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
            Book A Call
          </Button>
        </div>
      </div>
    </section>
  )
}
