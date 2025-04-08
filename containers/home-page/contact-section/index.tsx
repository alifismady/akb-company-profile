// components/ContactUsSection.tsx
'use client'

import type React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'
import Link from 'next/link'

const ContactUsSection: React.FC = () => {
  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      addressQuery
    )}`
  }

  const address =
    ' Perumahan Kramatwatu Griya Asri BlokB.I No 1 RT. 002 RW. 005, Lebakwana, Kramatwatu, Kab. Serang, Banten'

  const addressQuery = 'PT. Anugerah Kalibrasi Pratama (KALIBRASI KAN)'

  return (
    <section id='contact' className="bg-light-grey py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#163868] mb-12">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#163868] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#163868]">
                      Location
                    </h3>
                    <Link
                      href={getGoogleMapsUrl(addressQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#163868] hover:underline transition-colors"
                    >
                      {address}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-[#163868] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#163868]">
                      WhatsApp
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="https://wa.me/6281108029183"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-[#163868] hover:underline transition-colors"
                      >
                        (+62) 811 0802 9183
                      </Link>
                      <Link
                        href="https://wa.me/628991230029"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-[#163868] hover:underline transition-colors"
                      >
                        (+62) 899 1230 029
                      </Link>
                      <h3 className="text-xl font-semibold text-[#163868]">
                        Office
                      </h3>
                      <div className="space-y-1">
                        <p className="block text-gray-700 hover:text-[#163868] hover:underline transition-colors">
                          0254 - 8608302
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#163868] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#163868]">
                      Email
                    </h3>
                    <Link
                      href="mailto:ptanugerahkalibrasipratama@gmail.com"
                      className="text-gray-700 hover:text-[#163868] hover:underline transition-colors"
                    >
                      ptanugerahkalibrasipratama@gmail.com
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#163868] mb-3">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full hover:bg-pink-100 hover:text-pink-600"
                    >
                      <Link
                        href="https://www.instagram.com/anugerahkalibrasi.id"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative flex items-center justify-center h-full min-h-[300px] mt-4">
            <div className="absolute w-[80%] h-[80%] bg-red-500 rounded-3xl transform rotate-45"></div>
            <div className="relative w-[85%] h-[85%] bg-white p-4 shadow-lg z-10">
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <Image 
                  src="/images/location.jpg" 
                  alt="Our location" 
                  width={800} 
                  height={800} 
                  className="w-full h-full object-cover"
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsSection
