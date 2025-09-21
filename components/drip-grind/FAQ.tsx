'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQProps {
  faqs?: FAQItem[]
}

const defaultFAQs: FAQItem[] = [
  {
    id: 0,
    question: "Do We Host During Festivals And Events?",
    answer: "Yes, we offer special hosting services during festivals and events. Please contact us in advance to make arrangements for your special occasion."
  },
  {
    id: 1,
    question: "How can I cancel a booking?",
    answer: "You can cancel your booking up to 24 hours before your reservation time through our website or by calling our customer service. Cancellations made less than 24 hours in advance may incur a fee."
  },
  {
    id: 2,
    question: "Where can I park my car when I book with the host?",
    answer: "We offer complimentary valet parking for all our guests. Alternatively, there is a public parking garage located one block away from our restaurant."
  },
  {
    id: 3,
    question: "How can I get a refund?",
    answer: "Refunds are processed within 5-7 business days after approval. To request a refund, please contact our customer service with your booking details and reason for the refund request."
  }
]

export default function FAQ({ faqs = defaultFAQs }: FAQProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-300 mb-2">Our FAQ's</h2>
          <p className="text-xl text-white">Find Your Answers with Our FAQ's</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpenFaqIndex(openFaqIndex === faq.id ? null : faq.id)}
              >
                <h3 className="text-xl font-medium text-gray-900">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </span>
              </button>
              <div className={`px-6 pb-6 ${openFaqIndex === faq.id ? 'block' : 'hidden'}`}>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}