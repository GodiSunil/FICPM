"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Leaf, Target, Users, Globe, Award, TrendingUp, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
              <span className="text-sm text-eco-primary font-medium">About FICPM</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Pioneering India's
              <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                Sustainable Revolution
              </span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              The Federation of Indian Compostable Products Manufacturers (FICPM) is a unified voice for India's
              compostable product industry, dedicated to environmental stewardship and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Founded in response to India's growing environmental challenges, FICPM emerged as a collective force
                    uniting manufacturers committed to producing compostable alternatives to conventional plastics.
                  </p>
                  <p>
                    What began as a small group of visionary manufacturers has grown into India's leading federation
                    representing over 150 companies across 10+ states. We're not just manufacturers—we're change-makers
                    committed to transforming India's relationship with disposable products.
                  </p>
                  <p>
                    Today, we work at the intersection of business, policy, and environmental advocacy, ensuring that
                    sustainable solutions are accessible, affordable, and scalable across the nation.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-eco-primary/10">
                  <img
                    src="/sustainable-manufacturing-facility-with-green-tech.jpg"
                    alt="FICPM manufacturing facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-eco-primary/20 rounded-full blur-[80px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-10 bg-gradient-to-br from-eco-primary/10 to-background border-eco-primary/30">
                <div className="mb-6 w-16 h-16 rounded-xl bg-eco-primary/20 flex items-center justify-center">
                  <Target className="w-8 h-8 text-eco-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To establish India as a global leader in compostable product innovation and manufacturing, creating a
                  sustainable ecosystem that benefits both the environment and the economy.
                </p>
              </Card>

              <Card className="p-10 bg-gradient-to-br from-eco-accent/10 to-background border-eco-accent/30">
                <div className="mb-6 w-16 h-16 rounded-xl bg-eco-accent/20 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-eco-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To unite manufacturers, promote innovation, advocate for favorable policies, and ensure the highest
                  standards of quality and sustainability in compostable product manufacturing across India.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                The principles that guide every decision we make and every action we take
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Leaf,
                  title: "Sustainability First",
                  description: "Environmental responsibility is at the heart of everything we do.",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Stronger together—building a unified industry voice.",
                },
                {
                  icon: Award,
                  title: "Quality Excellence",
                  description: "Committed to the highest standards in manufacturing and compliance.",
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "Continuously advancing technology and sustainable practices.",
                },
              ].map((value, idx) => (
                <Card
                  key={idx}
                  className="group p-6 text-center bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10 hover:-translate-y-1"
                >
                  <div className="mb-4 mx-auto w-14 h-14 rounded-xl bg-eco-primary/10 flex items-center justify-center group-hover:bg-eco-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <value.icon className="w-7 h-7 text-eco-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">What We Do</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Advancing the compostable products industry through comprehensive support and advocacy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Policy Advocacy",
                  points: [
                    "Engage with government bodies on regulatory frameworks",
                    "Promote favorable policies for sustainable manufacturing",
                    "Represent industry interests at national forums",
                  ],
                },
                {
                  icon: Award,
                  title: "Standards & Certification",
                  points: [
                    "Develop industry-wide quality benchmarks",
                    "Facilitate compliance with international standards",
                    "Ensure authenticity of compostable claims",
                  ],
                },
                {
                  icon: Users,
                  title: "Member Support",
                  points: [
                    "Provide networking and collaboration opportunities",
                    "Share best practices and technical knowledge",
                    "Offer training and capacity building programs",
                  ],
                },
              ].map((item, idx) => (
                <Card key={idx} className="p-8 bg-card border-border/50 hover:border-eco-primary/30 transition-colors">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-eco-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-eco-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
                  <ul className="space-y-3">
                    {item.points.map((point, pidx) => (
                      <li key={pidx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-eco-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Ready to Be Part of the Change?</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Join FICPM and help shape the future of sustainable manufacturing in India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-eco-primary hover:bg-eco-primary/90 text-white shadow-lg shadow-eco-primary/25"
              >
                <Link href="/membership">
                  Become a Member
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
