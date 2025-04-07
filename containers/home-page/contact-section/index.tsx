// components/ContactUsSection.tsx
'use client';

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const ContactUsSection: React.FC = () => {
  // Function to create Google Maps URL from address
  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  }

  const address = "123 Your Street, Your City, Your Country"

  return (
    <section className="bg-light-grey py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#163868] mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Contact Information */}
          <Card className="border-none shadow-lg">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-[#163868] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#163868]">Location</h3>
                    <Link
                      href={getGoogleMapsUrl(address)}
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
                    <h3 className="text-xl font-semibold text-[#163868]">Phone (WhatsApp)</h3>
                    <div className="space-y-1">
                      <Link
                        href="https://wa.me/12345678901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-[#163868] hover:underline transition-colors"
                      >
                        +1 (234) 567-8901
                      </Link>
                      <Link
                        href="https://wa.me/12345678901"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-700 hover:text-[#163868] hover:underline transition-colors"
                      >
                        +1 (234) 567-8901
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-[#163868] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-[#163868]">Email</h3>
                    <Link
                      href="mailto:info@yourcompany.com"
                      className="text-gray-700 hover:text-[#163868] hover:underline transition-colors"
                    >
                      info@yourcompany.com
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#163868] mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full hover:bg-pink-100 hover:text-pink-600"
                    >
                      <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Image with Rotated Frame */}
          <div className="relative flex items-center justify-center h-full min-h-[300px]">
            <div className="absolute w-[80%] h-[80%] bg-red-500 rounded-3xl transform rotate-45"></div>
            <div className="relative w-[85%] h-[85%] bg-white p-4 shadow-lg z-10">
              {/* Replace this with your actual image */}
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <p className="text-gray-500">Your location image will go here</p>
                {/* Once you have your image, replace the div above with:
                <Image 
                  src="/path-to-your-image.jpg" 
                  alt="Our location" 
                  width={500} 
                  height={500} 
                  className="w-full h-full object-cover"
                /> 
                */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;