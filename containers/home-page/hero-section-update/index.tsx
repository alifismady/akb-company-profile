"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Target, Award, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContentItem {
  title: string
  description: string
  list?: string[]
}

interface ContentData {
  aboutUs: ContentItem
  visionMission: ContentItem
  specialty: ContentItem
}

export default function CompanyHeroSection() {
  const [selectedContent, setSelectedContent] = useState("aboutUs")
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const content: ContentData = {
    aboutUs: {
      title: "Tentang Perusahaan",
      description:
        "PT Anugerah Kalibrasi Pratama adalah perusahaan yang bergerak di bidang jasa sertifikasi dan kalibrasi peralatan ukur yang diakreditasi oleh Komite Akreditasi Nasional (KAN) sesuai dengan standar ISO/IEC 17025. Didirikan pada 15 Februari 2025, perusahaan ini berkomitmen untuk memberikan layanan kalibrasi yang akurat, terpercaya, dan sesuai dengan standar internasional. Sebagai mitra bagi industri dan laboratorium di berbagai sektor, PT Anugerah Kalibrasi Pratama menghadirkan solusi kalibrasi yang memastikan keakuratan dan konsistensi alat ukur. Dengan dukungan tenaga ahli berpengalaman dan peralatan kalibrasi modern, kami berupaya untuk menjaga kualitas pengukuran yang optimal guna mendukung efisiensi operasional dan kepatuhan terhadap regulasi yang berlaku.",
    },
    visionMission: {
      title: "Visi dan Misi",
      description:
        "Menjadi perusahaan kalibrasi terkemuka di Indonesia yang memberikan layanan berkualitas tinggi sesuai dengan standar internasional.",
      list: [
        "Menyediakan layanan kalibrasi yang akurat, cepat, dan sesuai dengan standar ISO/IEC 17025.",
        "Meningkatkan kompetensi industri melalui konsultasi dan pelatihan di bidang kalibrasi.",
        "Mengembangkan inovasi dalam layanan kalibrasi untuk mendukung kebutuhan industri yang terus berkembang.",
        "Menjaga kepuasan pelanggan dengan layanan profesional dan solusi yang tepat.",
        "Berkontribusi dalam peningkatan kualitas industri nasional melalui kepatuhan terhadap standar pengukuran global.",
      ],
    },
    specialty: {
      title: "Keahlian Kami",
      description:
        "Di PT Anugerah Kalibrasi Pratama, kami bangga dengan keahlian kami dalam kalibrasi, memastikan pengukuran yang presisi dan andal sesuai dengan standar ISO/IEC 17025. Tim profesional kami berkomitmen untuk memberikan layanan kalibrasi berkualitas tinggi untuk berbagai industri.",
      list: [
        "Layanan Kalibrasi Terakreditasi",
        "Tim Berpengalaman & Bersertifikasi",
        "Solusi Kalibrasi yang Komperhensif",
        "Peralatan Canggih & Modern",
        "Komitmen terhadap Kualitas & Akurasi",
        "Pendekatan Berorientasi Pelanggan",
      ],
    },
  }

  // Helper function to render content
  const renderContent = (key: keyof ContentData) => (
    <>
      <div className="mb-4">
        <h3 className={isMobile ? "text-xl font-semibold text-[#163868]" : "hidden"}>{content[key].title}</h3>
      </div>
      <p className="text-gray-700">{content[key].description}</p>
      {content[key].list && (
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          {content[key].list?.map((item, index) => (
            <li key={index} className="ml-2">
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  )

  return (
    <section id="home" className="bg-light-grey py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-16 md:mt-24 lg:mt-32">
        <h1 className="text-3xl md:text-4xl font-bold text-[#163868] mb-8 text-center">
          Welcome to Anugerah Kalibrasi Pratama
        </h1>

        <Card className="w-full border-none shadow-lg">
          {isMobile ? (
            // Mobile: Accordion
            <CardContent className="text-justify">
              <Accordion type="single" collapsible defaultValue="aboutUs">
                <AccordionItem value="aboutUs">
                  <AccordionTrigger className="flex items-center gap-2 text-[#163868] py-4">
                    <Building className="h-4 w-4 mr-2" />
                    <span>Tentang Kami</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">
                    {renderContent("aboutUs")}
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 text-[#163868] border-[#163868]"
                        onClick={() => window.open("/pdf/CompanyProfilePTAKP.pdf", "_blank")}
                      >
                        <Download className="h-4 w-4" />
                          Unduh Profil
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="visionMission">
                  <AccordionTrigger className="flex items-center gap-2 text-[#163868] py-4">
                    <Target className="h-4 w-4 mr-2" />
                    <span>Visi dan Misi</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">{renderContent("visionMission")}</AccordionContent>
                </AccordionItem>

                <AccordionItem value="specialty">
                  <AccordionTrigger className="flex items-center gap-2 text-[#163868] py-4">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Keahlian</span>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pb-6">{renderContent("specialty")}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          ) : (
            // Desktop: Tabs
            <Tabs defaultValue="aboutUs" value={selectedContent} onValueChange={setSelectedContent} className="w-full">
              <div className="px-4 sm:px-6">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger
                    value="aboutUs"
                    className="flex items-center gap-2 data-[state=active]:bg-[#163868] data-[state=active]:text-white"
                  >
                    <Building className="h-4 w-4 hidden sm:inline" />
                    <span>Tentang Kami</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="visionMission"
                    className="flex items-center gap-2 data-[state=active]:bg-[#163868] data-[state=active]:text-white"
                  >
                    <Target className="h-4 w-4 hidden sm:inline" />
                    <span>Visi dan Misi</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="specialty"
                    className="flex items-center gap-2 data-[state=active]:bg-[#163868] data-[state=active]:text-white"
                  >
                    <Award className="h-4 w-4 hidden sm:inline" />
                    <span>Keahlian</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <CardContent className="text-justify">
                <TabsContent value="aboutUs">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-semibold text-[#163868] text-center">
                      {content.aboutUs.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-700">{content.aboutUs.description}</p>
                  <div className="mt-6 flex justify-center">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 text-[#163868] border-[#163868]"
                      onClick={() => window.open("/pdf/CompanyProfilePTAKP.pdf", "_blank")}
                    >
                      <Download className="h-4 w-4" />
                        Unduh Profil
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="visionMission">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-semibold text-[#163868] text-center">
                      {content.visionMission.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-700">{content.visionMission.description}</p>
                  <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                    {content.visionMission.list?.map((item, index) => (
                      <li key={index} className="ml-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>

                <TabsContent value="specialty">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl font-semibold text-[#163868] text-center">
                      {content.specialty.title}
                    </CardTitle>
                  </CardHeader>
                  <p className="text-gray-700">{content.specialty.description}</p>
                  <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                    {content.specialty.list?.map((item, index) => (
                      <li key={index} className="ml-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </CardContent>
            </Tabs>
          )}
        </Card>
      </div>
    </section>
  )
}
