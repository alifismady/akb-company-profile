"use client"

import type React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const ScopeSection: React.FC = () => {
  const industries = [
    { name: "Agrikultur", icon: "/icons/agrikultur.jpg" },
    { name: "Perikanan", icon: "/icons/perikanan.jpg" },
    { name: "Peternakan", icon: "/icons/peternakan.jpg" },
    { name: "Retail", icon: "/icons/retail.jpg" },
    { name: "Otomotif", icon: "/icons/otomotif.jpg" },
    { name: "Makanan", icon: "/icons/makanan.jpg" },
    { name: "Pertambangan", icon: "/icons/pertambangan.jpg" },
    { name: "Energi", icon: "/icons/energi.jpg" },
  ]

  const scopeOfServices = [
    "Massa",
    "Panjang",
    "Gaya",
    "Torsi",
    "Tekanan",
    "Kelembapan",
    "Suhu",
    "Instrument Analitik",
    "Volume",
    "Kelistrikan",
    "Frekuensi",
  ]

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#163868] mb-4">Sektor Industri</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Kami melayani berbagai sektor industri dengan solusi kalibrasi yang presisi dan terpercaya
          </p>
        </div>

        {/* Industries Section - All displayed in a grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-slate-50 p-4 rounded-full mb-4 w-20 h-20 flex items-center justify-center">
                      <Image
                        src={industry.icon || "/placeholder.svg"}
                        alt={industry.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-[#163868] mt-2">{industry.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scope of Services Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#163868] mb-4">Ruang Lingkup</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Layanan kalibrasi kami mencakup berbagai parameter pengukuran
          </p>
        </div>

        <Card className="border-none shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {scopeOfServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="outline"
                    className="w-full py-3 px-4 text-base font-medium bg-white hover:bg-slate-50 text-[#163868] border-[#163868]/20 cursor-default"
                  >
                    {service}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ScopeSection

