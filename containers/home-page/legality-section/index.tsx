'use client'

import type React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import { Check } from 'lucide-react'

const LegalitySection: React.FC = () => {
  const exampleWorks = [
    '/images/certifications/npwp.jpeg',
    '/images/certifications/surat-izin-usaha.jpeg',
  ]

  const navButtonStyles = 'opacity-40 hover:opacity-100 transition-opacity'

  const portfolioItems = [
    'Akta Pendirian PT Anugerah Kalibrasi Pratama Nomor : 05 pada tanggal 14 Februari 2025 dihadapan Notaris Yulianto, S.H., M.Kn',
    '⁠SK Pengesahan Pendirian dari Menteri Hukum Republik Indonesia Nomor: AHU-0015808.AH.01.01.TAHUN 2025, dan di cetak pada tanggal 24 Februari 2025',
    'Surat Pengukuhan Pengusaha Kena Pajak , No : S-00077/SPPKP-CT/KPP.0812/2025',
    '⁠NPWP : 1000.0000.0045.3831',
    '⁠Nomor Induk Berusaha (NIB OSS RBA BERBASIS RESIKO) Dengan Nomor : 2502250031329',
  ]

  return (
    <section id="client" className="bg-light-grey py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-0 md:px-8 mt-12 md:mt-16 lg:mt-24">
        <Card className="w-full border-none shadow-lg">
          <CardContent className="text-justify">
            <div
              id="legality"
              className="flex flex-col p-4 sm:p-6 lg:p-8 md:flex-row md:items-start md:space-x-8"
            >
              <div className="md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold text-[#163868] md:text-left text-center mb-6">
                  Legalitas Perusahaan
                </h2>

                <ul className="space-y-3">
                  {portfolioItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-0.5 flex-shrink-0 rounded-full bg-[#163868] p-1">
                        <Check className="h-4 w-4 text-white" />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-2/3">
                <Carousel
                  className="w-full"
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: false,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {exampleWorks.map((work, index) => (
                      <CarouselItem key={index} className="">
                        <div className="p-1">
                          <div className="overflow-hidden w-full h-[500px] mx-auto rounded-md">
                            <img
                              src={work || '/placeholder.svg'}
                              alt={`Work ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default LegalitySection
