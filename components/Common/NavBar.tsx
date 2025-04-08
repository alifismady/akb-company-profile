'use client'

import * as React from 'react'
import Image from 'next/image'
import { Globe, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const Navbar = () => {
  const [language, setLanguage] = React.useState('in')
  const [isSheetOpen, setIsSheetOpen] = React.useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsSheetOpen(false)
  }

  return (
    <header className="fixed top-0 z-50 w-full rounded-lg border-b bg-background px-8">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 pt-6 pl-2">
                <div className="flex items-center gap-2 text-lg font-semibold text-[#163868]">
                  <span>Anugerah Kalibrasi Pratama</span>
                </div>
                <nav className="flex flex-col space-y-2 pt-4 ">
                  <button
                    onClick={() => scrollToSection('home')}
                    className="text-left rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
                  >
                    Tentang Kami
                  </button>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-left rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
                  >
                    Pelayanan
                  </button>
                  <button
                    onClick={() => scrollToSection('scope')}
                    className="text-left rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
                  >
                    Industri dan Lingkup
                  </button>
                  <button
                    onClick={() => scrollToSection('client')}
                    className="text-left rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
                  >
                    Klien
                  </button>
                  <button
                    onClick={() => scrollToSection('portofolio')}
                    className="text-left rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
                  >
                    Portofolio
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="text-left rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
                  >
                    Kontak Kami
                  </button>
                </nav>
                <div className="pt-4 pl-2 mt-auto border-t">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full px-3 justify-start"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        {language === 'en' ? 'English' : 'Indonesia'}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {/* <DropdownMenuItem onClick={() => setLanguage('en')}>
                        English
                      </DropdownMenuItem> */}
                      <DropdownMenuItem onClick={() => setLanguage('id')}>
                        Indonesia
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo and company name */}
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 ml-2">
            <Image
              src="/images/akb-logo.jpeg"
              alt="Company Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={() => scrollToSection('home')}
            className="hidden text-lg font-bold text-[#163868] sm:inline-block"
          >
            Anugerah Kalibrasi Pratama
          </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-left md:space-x-4">
          <button
            onClick={() => scrollToSection('home')}
            className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
          >
            Tentang Kami
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
          >
            Pelayanan
          </button>
          <button
            onClick={() => scrollToSection('scope')}
            className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
          >
            Industri dan Lingkup
          </button>
          <button
            onClick={() => scrollToSection('client')}
            className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
          >
            Klien
          </button>
          <button
            onClick={() => scrollToSection('portofolio')}
            className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
          >
            Portofolio
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent"
          >
            Kontak Kami
          </button>
        </nav>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto md:ml-0">
              <Globe className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline-block">
                {language === 'en' ? 'English' : 'Indonesia'}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuItem onClick={() => setLanguage('en')}>
              English
            </DropdownMenuItem> */}
            <DropdownMenuItem onClick={() => setLanguage('id')}>
              Indonesia
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar
