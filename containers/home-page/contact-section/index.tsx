'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

const getGoogleMapsUrl = (query: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`
}

export default function ContactSection() {
  const address = 'Perumahan Kramatwatu Griya Asri BlokB.I No 1 RT. 002 RW. 005, Lebakwana, Kramatwatu, Kab. Serang, Banten'
  const addressQuery = 'PT. Anugerah Kalibrasi Pratama (KALIBRASI KAN)'

  return (
    <section id="contact" className="bg-gray-50 py-12 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info split into 2 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mt-8">
            {/* First Column - Location & Phone */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#163868] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#163868]">
                    Lokasi
                  </h3>
                  <Link
                    href={getGoogleMapsUrl(addressQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#163868] hover:underline transition-colors text-sm"
                  >
                    {address}
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-[#163868] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#163868]">
                    WhatsApp
                  </h3>
                  <div className="space-y-1">
                    <Link
                      href="https://wa.me/6287849452408"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700 hover:text-[#163868] hover:underline transition-colors text-sm"
                    >
                      (+62) 878 4945 2408
                    </Link>
                    <Link
                      href="https://wa.me/628991230029"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-700 hover:text-[#163868] hover:underline transition-colors text-sm"
                    >
                      (+62) 899 1230 029
                    </Link>
                  </div>

                  <h3 className="text-lg font-semibold text-[#163868] mt-2">
                    Office
                  </h3>
                  <p className="text-gray-700 text-sm">0254 - 8608302</p>
                </div>
              </div>
            </div>

            {/* Second Column - Email & Social */}
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-[#163868] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[#163868]">
                    Email
                  </h3>
                  <Link
                    href="mailto:info@anugerahkalibrasipratama.com"
                    className="text-gray-700 text-sm hover:text-[#163868] hover:underline transition-colors break-words"
                  >
                    info@anugerahkalibrasipratama.com
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#163868] mb-2">
                  Ikuti Kami
                </h3>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="rounded-full h-9 w-9 hover:bg-pink-100 hover:text-pink-600"
                  >
                    <Link
                      href="https://www.instagram.com/anugerahkalibrasi.id"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1">
            <div className="relative w-full max-w-xs mx-auto h-[220px] md:h-[300px]">
              <div className="absolute w-[75%] h-[75%] bg-red-500 rounded-2xl transform rotate-45 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute inset-0 m-auto w-[85%] h-[85%] bg-white p-3 shadow-md z-10 flex items-center justify-center">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src="/images/location.jpg"
                    alt="Our location"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
              <div className="p-3 flex items-center justify-center h-32">
                <Image
                  src="/images/certifications/iso-logo.png"
                  alt="ISO Certification"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-3 flex items-center justify-center h-32">
                <Image
                  src="/images/certifications/kan-logo.png"
                  alt="KAN Certification"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
