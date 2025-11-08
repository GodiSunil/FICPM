"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Leaf, Menu } from "lucide-react"
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
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-16 h-16 rounded-xl overflow-hidden">
              <img src="/logo1.png" alt="FICPM Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none">FICPM</span>
              <span className="text-xs text-muted-foreground leading-none">Sustainable Future</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-eco-primary bg-eco-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-eco-primary hover:bg-eco-primary/90 text-white">
              <Link href="/membership">Join FICPM</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80">
              <div className="flex flex-col gap-6 mt-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                    <img src="/logo1.png" alt="FICPM Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none">FICPM</span>
                    <span className="text-xs text-muted-foreground leading-none">Sustainable Future</span>
                  </div>
                </Link>

                <nav className="flex flex-col gap-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "text-eco-primary bg-eco-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <Button asChild className="w-full bg-eco-primary hover:bg-eco-primary/90 text-white">
                  <Link href="/membership" onClick={() => setIsOpen(false)}>
                    Join FICPM
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
