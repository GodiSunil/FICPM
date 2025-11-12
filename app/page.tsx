"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Leaf, Users, FileText, Calendar, Shield, Target } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-background">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-dark/95 via-eco-primary/10 to-eco-accent/20 pb-[420px]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/10 to-eco-dark/10" />
        <div className="absolute top-20 right-10 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-eco-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-eco-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row justify-between gap-12 min-h-[70vh] lg:min-h-[60vh]">
            <div className="w-full max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-eco-primary/30 bg-eco-primary/5 backdrop-blur-sm animate-fade-in">
                <Leaf className="w-4 h-4 text-eco-primary" />
                <span className="text-sm text-eco-primary font-medium">Federation of Indian Compostable Products Manufacturers</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                Leading India's
                <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                  Sustainable Future
                </span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Uniting manufacturers, promoting innovation, and championing compostable products for a cleaner, greener India.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="group bg-eco-primary hover:bg-eco-primary/90 text-white shadow-lg shadow-eco-primary/25 hover:shadow-eco-primary/40 transition-all"
                >
                  <Link href="/membership">
                    Become a Member
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            
            <div className={`w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="/logo1.png" 
                alt="FICPM Logo" 
                className="w-full h-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.15))',
                  transform: isVisible ? 'scale(1) rotate(0deg)' : 'scale(0.9) rotate(-5deg)',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  maxWidth: '100%',
                  height: '200px',
                  willChange: 'transform, opacity'
                }}
              />
            </div>
          </div>
        </div>
         <img
         src="/bg.png"
          className="absolute left-0 bottom-[-150px]"
          style={{
            width: '100%',
            objectFit: 'cover'
          }} />
      </section>
      {/* Mission Section */}
      <section className="py-24 relative -mt-24 bg-[#dbeee3]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                To establish India as a global leader in compostable product manufacturing while ensuring environmental
                sustainability and economic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "Advocacy & Policy",
                  description: "Working with government and policymakers to create favorable regulations for compostable products.",
                  bgColor: "from-emerald-100 to-teal-100",
                  iconColor: "text-emerald-600",
                  hoverBg: "hover:from-emerald-50 hover:to-teal-50",
                  borderColor: "border-emerald-200"
                },
                {
                  icon: Users,
                  title: "Industry Unity",
                  description: "Building a strong network of manufacturers committed to sustainable practices and innovation.",
                  bgColor: "from-amber-100 to-orange-100",
                  iconColor: "text-amber-600",
                  hoverBg: "hover:from-amber-50 hover:to-orange-50",
                  borderColor: "border-amber-200"
                },
                {
                  icon: Shield,
                  title: "Standards & Compliance",
                  description: "Establishing and maintaining quality standards for compostable products across India.",
                  bgColor: "from-indigo-100 to-blue-100",
                  iconColor: "text-indigo-600",
                  hoverBg: "hover:from-indigo-50 hover:to-blue-50",
                  borderColor: "border-indigo-200"
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className={`group p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border ${item.borderColor} bg-gradient-to-br ${item.bgColor} ${item.hoverBg}`}
                >
                  <div className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${item.iconColor}/10`}>
                    <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "150+", label: "Member Companies" },
                { value: "10+", label: "States Represented" },
                { value: "50K+", label: "Tons Annual Production" },
                { value: "100%", label: "Commitment to Sustainability" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="mb-3">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent group-hover:scale-110 inline-block transition-transform">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Key Initiatives</h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Driving change through action and collaboration
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="hidden md:inline-flex border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
              >
                <Link href="/initiatives">
                  View All
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Calendar,
                  title: "Annual Summit 2025",
                  date: "March 2025",
                  description: "Join industry leaders, policymakers, and innovators at our flagship event focused on the future of compostable materials.",
                  bgColor: "from-amber-50 to-orange-50",
                  iconBg: "bg-amber-100/80",
                  iconColor: "text-amber-600",
                  dateColor: "bg-amber-500/10 text-amber-700",
                  borderColor: "border-amber-200",
                  buttonHover: "hover:bg-amber-500/10"
                },
                {
                  icon: FileText,
                  title: "Policy Framework Development",
                  date: "Ongoing",
                  description: "Collaborating with government bodies to establish comprehensive guidelines for compostable product certification and standards.",
                  bgColor: "from-emerald-50 to-teal-50",
                  iconBg: "bg-emerald-100/80",
                  iconColor: "text-emerald-600",
                  dateColor: "bg-emerald-500/10 text-emerald-700",
                  borderColor: "border-emerald-200",
                  buttonHover: "hover:bg-emerald-500/10"
                },
              ].map((initiative, idx) => (
                <Card
                  key={idx}
                  className={`group relative overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 border ${initiative.borderColor} bg-gradient-to-br ${initiative.bgColor} hover:shadow-lg hover:shadow-${initiative.iconColor.split('-')[1]}/5`}
                >
                  {/* Decorative element */}
                  <div className={`absolute -right-6 -top-6 h-32 w-32 rounded-full ${initiative.iconColor}/10 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                  
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    <div className={`w-14 h-14 rounded-xl ${initiative.iconBg} backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                      <initiative.icon className={`w-6 h-6 ${initiative.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium ${initiative.dateColor} px-3 py-1.5 rounded-full backdrop-blur-sm`}>
                          {initiative.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{initiative.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 relative z-10">{initiative.description}</p>
                  
                  <Button
                    variant="ghost"
                    className={`mt-4 p-0 h-auto relative z-10 ${initiative.iconColor} ${initiative.buttonHover} transition-colors duration-300 group/button`}
                  >
                    <span className="relative">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4 inline-block transition-transform duration-300 group-hover/button:translate-x-1" />
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${initiative.iconColor} transition-all duration-300 group-hover/button:w-full`}></span>
                    </span>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Button asChild variant="outline" className="border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent">
                <Link href="/initiatives">
                  View All Initiatives
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-[#dbeee3]">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Join the Movement for a Sustainable India</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Be part of India's leading federation of compostable product manufacturers. Together, we're building a
              greener future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-eco-primary hover:bg-eco-primary/90 text-white shadow-lg shadow-eco-primary/25"
              >
                <Link href="/membership">
                  Apply for Membership
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
