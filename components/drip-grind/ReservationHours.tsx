'use client'

import { motion } from 'framer-motion'

export default function ReservationHours() {
  const hours = [
    { day: 'Monday', time: '9:00 AM - 10:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 10:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 10:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 10:00 PM' },
    { day: 'Friday', time: '9:00 AM - 11:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 11:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 9:00 PM' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-roboto text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Opening Hours
          </h2>
          <p className="font-roboto text-lg text-gray-600 max-w-2xl mx-auto">
            We're here to serve you exceptional coffee and provide the perfect workspace 
            throughout the week. Plan your visit during our operating hours.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-red-600 text-white text-center py-8">
              <h3 className="font-roboto text-2xl font-bold mb-2">Weekly Schedule</h3>
              <p className="font-roboto text-red-100">Your favorite coffee spot & co-working space</p>
            </div>

            <div className="p-8">
              <div className="grid gap-4">
                {hours.map((item, index) => (
                  <motion.div
                    key={item.day}
                    className="flex justify-between items-center py-4 px-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="font-roboto text-lg font-medium text-gray-900">
                      {item.day}
                    </span>
                    <span className="font-roboto text-lg text-red-600 font-semibold">
                      {item.time}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 bg-red-50 rounded-lg border-l-4 border-red-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h4 className="font-roboto text-lg font-semibold text-red-800 mb-2">
                  Special Notes
                </h4>
                <ul className="font-roboto text-red-700 space-y-1">
                  <li>• Last orders taken 30 minutes before closing</li>
                  <li>• Co-working spaces available during all operating hours</li>
                  <li>• Weekend brunch menu available Saturday & Sunday</li>
                  <li>• Private event bookings available - contact us for details</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}