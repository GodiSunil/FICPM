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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-eco-dark/95 via-eco-primary/10 to-eco-accent/20">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-eco-dark/20" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-eco-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-eco-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-eco-primary/30 bg-eco-primary/5 backdrop-blur-sm">
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

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative">
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
                  description:
                    "Working with government and policymakers to create favorable regulations for compostable products.",
                },
                {
                  icon: Users,
                  title: "Industry Unity",
                  description:
                    "Building a strong network of manufacturers committed to sustainable practices and innovation.",
                },
                {
                  icon: Shield,
                  title: "Standards & Compliance",
                  description: "Establishing and maintaining quality standards for compostable products across India.",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="group p-8 bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10 hover:-translate-y-1"
                >
                  <div className="mb-6 w-14 h-14 rounded-xl bg-eco-primary/10 flex items-center justify-center group-hover:bg-eco-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <item.icon className="w-7 h-7 text-eco-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-background to-eco-dark/5">
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
                  description:
                    "Join industry leaders, policymakers, and innovators at our flagship event focused on the future of compostable materials.",
                },
                {
                  icon: FileText,
                  title: "Policy Framework Development",
                  date: "Ongoing",
                  description:
                    "Collaborating with government bodies to establish comprehensive guidelines for compostable product certification and standards.",
                },
              ].map((initiative, idx) => (
                <Card
                  key={idx}
                  className="group p-8 bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-eco-primary/10 flex items-center justify-center group-hover:bg-eco-primary/20 transition-colors flex-shrink-0">
                      <initiative.icon className="w-6 h-6 text-eco-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-medium text-eco-primary bg-eco-primary/10 px-3 py-1 rounded-full">
                          {initiative.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
                  <Button
                    variant="ghost"
                    className="mt-4 text-eco-primary hover:text-eco-primary hover:bg-eco-primary/5 p-0 h-auto"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-dark to-background" />
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
