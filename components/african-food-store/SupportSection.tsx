"use client"

import { Mail, Phone, Clock, MapPin, ArrowRight } from "lucide-react"

type Office = {
  city: string
  address: string
  phone: string
  directionUrl?: string
}

type Props = {
  title?: string
  subtitle?: string
  email?: string
  callNumber?: string
  workingHours?: string
  offices?: Office[]
}

export function AfricanFoodSupportSection({
  title = "REVAMP SUPPORT.",
  subtitle = "24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.",
  email = "support@revamp.com",
  callNumber = "+1 (555) 123-4567",
  workingHours = "Available 24/7",
  offices = [
    {
      city: "New York City, USA",
      address: "123 Fashion Avenue, Suite 456, New York, NY 10001",
      phone: "+1 (212) 555-9876",
      directionUrl: "#",
    },
    {
      city: "Paris, France",
      address: "789 Rue de la Mode, Paris 75001",
      phone: "+33 1 23 45 67 89",
      directionUrl: "#",
    },
    {
      city: "Tokyo, Japan",
      address: "456 Shibuya Fashion Street, Shibuya-ku, Tokyo",
      phone: "+81 3-1234-5678",
      directionUrl: "#",
    },
  ],
}: Props): JSX.Element {
  return (
    <section aria-labelledby="support-heading" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-8 sm:mb-10">
          <h2 id="support-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-black/80 max-w-3xl">{subtitle}</p>
        </header>

        <div className="rounded-2xl border border-black/20 p-6 sm:p-8 mb-10 sm:mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-black/90" />
              <div>
                <div className="text-sm text-black/70">Email</div>
                <div className="font-semibold">{email}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-black/90" />
              <div>
                <div className="text-sm text-black/70">Call Us On</div>
                <div className="font-semibold">{callNumber}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-black/90" />
              <div>
                <div className="text-sm text-black/70">Working Hours</div>
                <div className="font-semibold">{workingHours}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-black/20 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <article key={office.city} className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold">{office.city}</h3>
                <address className="not-italic text-sm text-black/80">{office.address}</address>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={`tel:${office.phone}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/40 text-black hover:bg-black/10 transition-colors text-sm"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                  <a
                    href={office.directionUrl ?? "#"}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white transition-colors text-sm"
                  >
                    <MapPin className="h-4 w-4" />
                    Get Direction 
                    <ArrowRight className="h-4 w-4" />  
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}