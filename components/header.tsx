"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, Menu, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Members", href: "/members" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm" 
          : "bg-white/80"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
              <img src="/logo1.png" alt="FICPM Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-gray-900">FICPM</span>
              <span className="text-xs text-gray-500 leading-none">Sustainable Future</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1",
                  pathname === item.href
                    ? "text-primary font-semibold"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {item.name}
                {item.name === "Resources" && <ChevronDown className="w-4 h-4 ml-0.5" />}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-md hover:shadow-lg transition-all duration-200">
              <Link href="/membership" className="flex items-center gap-2">
                <span>Join FICPM</span>
                <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMounted && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  aria-label="Toggle menu"
                  className="text-gray-600 hover:bg-gray-100"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-gray-100">
                    <Link 
                      href="/" 
                      className="flex items-center gap-3" 
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-lg leading-none text-gray-900">FICPM</span>
                        <span className="text-xs text-gray-500 leading-none">Sustainable Future</span>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <nav className="flex flex-col gap-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={cn(
                            "px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
                            pathname === item.href
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          <span>{item.name}</span>
                          {item.name === "Resources" && <ChevronDown className="w-4 h-4 text-gray-400" />}
                        </Link>
                      ))}
                    </nav>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <Button 
                        asChild 
                        className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <Link href="/membership" className="flex items-center justify-center gap-2">
                          <span>Join FICPM</span>
                          <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse"></span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  )
}
