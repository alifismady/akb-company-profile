"use client"

import * as React from "react"
import Link from "next/link"
import { Building2, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const Navbar = () => {
  const [language, setLanguage] = React.useState("en")

  return (
    <header className="sticky top-0 z-50 w-full rounded-lg border-b bg-background px-8">
      <div className="container flex h-16 items-center justify-between">
        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet> 
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col space-y-4 pt-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-[#163868]">
                  <Building2 className="h-6 w-6" />
                  <span>Anugerah Kalibrasi Pratama</span>
                </Link>
                <nav className="flex flex-col space-y-2 pt-4">
                  <Link href="/" className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent">
                    Home
                  </Link>
                </nav>
                <div className="pt-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        {language === "en" ? "English" : "Indonesia"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage("id")}>Indonesia</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo and company name */}
        <div className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-[#163868]" />
          <Link href="/" className="hidden text-lg font-bold text-[#163868] sm:inline-block">
            Anugerah Kalibrasi Pratama
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-4">
          <Link href="/" className="rounded-md px-3 py-2 text-[#163868] hover:bg-accent">
            Home
          </Link>
        </nav>

        {/* Language selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto md:ml-0">
              {language === "en" ? "English" : "Indonesia"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("id")}>Indonesia</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Navbar

