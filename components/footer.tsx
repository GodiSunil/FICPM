import Link from "next/link"
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#256758] border-t border-[#1a4d40]">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12">
                <img 
                  src="/logo1.png" 
                  alt="FICPM Logo" 
                  className="w-full h-full object-contain" 
                  style={{ filter: 'brightness(0) invert(1)' }} 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white leading-none">FICPM</span>
                <span className="text-xs text-white/80 leading-none">Sustainable Future</span>
              </div>
            </Link>
            <p className="text-sm text-white/90 leading-relaxed">
              Leading India's transition to sustainable compostable products through innovation, collaboration, and
              environmental stewardship.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors text-white"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors text-white"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors text-white"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors text-white"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "About FICPM", href: "/about" },
                { name: "Members & Governance", href: "/members" },
                { name: "Membership Application", href: "/membership" },
                { name: "Initiatives & Events", href: "/initiatives" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {[
                { name: "Policy Documents", href: "/resources" },
                { name: "Industry Reports", href: "/resources" },
                { name: "Standards & Guidelines", href: "/resources" },
                { name: "Best Practices", href: "/resources" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#8aab4c] text-white flex-shrink-0" />
                <div>
                  <a
                    href="mailto:info@ficpm.org"
                    className="text-sm text-white hover:text-white transition-colors block"
                  >
                    info@ficpm.org
                  </a>
                  <a
                    href="mailto:membership@ficpm.org"
                    className="text-sm text-white hover:text-white transition-colors block"
                  >
                    membership@ficpm.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8aab4c] text-white flex-shrink-0" />
                <span className="text-sm text-white">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8aab4c] text-white flex-shrink-0" />
                <span className="text-sm text-white leading-relaxed">
                  Business District
                  <br />
                  New Delhi, India - 110001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white text-center"> {new Date().getFullYear()} FICPM. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-sm text-white hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-white hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-800 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
