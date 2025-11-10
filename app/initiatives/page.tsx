"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Leaf,
  FileText,
  Award,
  TrendingUp,
  BookOpen,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-eco-dark/95 via-eco-primary/10 to-eco-accent/20">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-eco-dark/20" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-eco-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-eco-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-eco-primary/30 bg-eco-primary/20 backdrop-blur-sm">
              <Leaf className="w-4 h-4 text-eco-primary" />
              <span className="text-sm text-eco-primary font-medium">Initiatives & Events</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Driving Change Through
              <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                Action & Collaboration
              </span>
            </h1>

            <p className="text-xl text-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Our initiatives and events bring together industry leaders, policymakers, and innovators to advance
              India's sustainable future.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-eco-primary" />
                <h2 className="text-4xl md:text-5xl font-bold">Upcoming Events</h2>
              </div>
              <p className="text-xl text-muted-foreground">Join us at our flagship events and networking sessions</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "FICPM Annual Summit 2025",
                  date: "March 15-17, 2025",
                  location: "India Expo Centre, Greater Noida",
                  type: "Conference",
                  status: "Registration Open",
                  description:
                    "India's premier gathering for compostable product manufacturers, featuring keynote speeches, panel discussions, technology exhibitions, and networking opportunities.",
                  highlights: [
                    "50+ industry speakers",
                    "Exhibition of latest technologies",
                    "Policy roundtable with government officials",
                    "Innovation awards ceremony",
                  ],
                  attendees: "500+ Expected",
                },
                {
                  title: "Certification Workshop Series",
                  date: "April 2025",
                  location: "Multiple Cities",
                  type: "Workshop",
                  status: "Coming Soon",
                  description:
                    "Hands-on workshops on compostability standards, testing protocols, and certification processes. Learn from industry experts and certification bodies.",
                  highlights: [
                    "BIS standards overview",
                    "Testing methodology",
                    "Compliance requirements",
                    "Q&A with certification experts",
                  ],
                  attendees: "Limited Seats",
                },
              ].map((event, idx) => (
                <Card
                  key={idx}
                  className="p-8 bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge className="bg-eco-primary/10 text-eco-primary hover:bg-eco-primary/20 border-eco-primary/30">
                          {event.type}
                        </Badge>
                        <Badge className="bg-eco-accent/10 text-eco-accent hover:bg-eco-accent/20 border-eco-accent/30">
                          {event.status}
                        </Badge>
                      </div>

                      <h3 className="text-2xl font-bold">{event.title}</h3>

                      <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-eco-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-eco-primary" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-eco-primary" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>

                      <div className="space-y-2">
                        <p className="font-medium text-sm">Event Highlights:</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {event.highlights.map((highlight, hidx) => (
                            <div key={hidx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-eco-primary flex-shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-48 flex flex-col gap-3">
                      <Button className="w-full bg-eco-primary hover:bg-eco-primary/90 text-white">
                        Register Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-24 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Key Initiatives</h2>
              <p className="text-xl text-muted-foreground">
                Strategic programs driving industry growth and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Policy Framework Development",
                  status: "Ongoing",
                  description:
                    "Collaborating with government bodies to establish comprehensive guidelines for compostable product standards, certification, and labeling requirements.",
                  outcomes: [
                    "Draft policy recommendations submitted",
                    "Stakeholder consultations conducted",
                    "Industry feedback incorporated",
                  ],
                },
                {
                  icon: Award,
                  title: "Quality Standards Program",
                  status: "Active",
                  description:
                    "Developing industry-wide quality benchmarks and best practices to ensure authenticity and reliability of compostable claims.",
                  outcomes: [
                    "Quality guidelines published",
                    "Testing protocols standardized",
                    "Member compliance framework established",
                  ],
                },
                {
                  icon: Lightbulb,
                  title: "Innovation & Research Hub",
                  status: "New",
                  description:
                    "Fostering collaboration between manufacturers, research institutions, and technology providers to advance compostable materials science.",
                  outcomes: [
                    "Research partnerships formed",
                    "Innovation grants program launched",
                    "Knowledge sharing platform created",
                  ],
                },
                {
                  icon: BookOpen,
                  title: "Awareness Campaign",
                  status: "Planning",
                  description:
                    "National campaign to educate consumers, businesses, and policymakers about benefits and proper disposal of compostable products.",
                  outcomes: [
                    "Campaign strategy developed",
                    "Educational materials created",
                    "Media partnerships in progress",
                  ],
                },
              ].map((initiative, idx) => (
                <Card
                  key={idx}
                  className="p-8 bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-eco-primary/10 flex items-center justify-center flex-shrink-0">
                      <initiative.icon className="w-7 h-7 text-eco-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">{initiative.title}</h3>
                      </div>
                      <Badge className="bg-eco-accent/10 text-eco-accent hover:bg-eco-accent/20 border-eco-accent/30 text-xs">
                        {initiative.status}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">{initiative.description}</p>

                  <div className="space-y-3">
                    <p className="text-sm font-medium">Key Outcomes:</p>
                    {initiative.outcomes.map((outcome, oidx) => (
                      <div key={oidx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-eco-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlights */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Past Events</h2>
              <p className="text-xl text-muted-foreground">Highlights from our recent gatherings and achievements</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Annual Summit 2024",
                  date: "March 2024",
                  attendees: "450+ Participants",
                  description: "A landmark event that brought together manufacturers, policymakers, and innovators.",
                  image: "/sustainability-conference-hall-with-attendees.jpg",
                },
                {
                  title: "Tech Innovation Expo",
                  date: "September 2024",
                  attendees: "300+ Visitors",
                  description: "Showcasing cutting-edge technologies in compostable material manufacturing.",
                  image: "/technology-exhibition-booth-green-products.jpg",
                },
                {
                  title: "Regional Workshops",
                  date: "Throughout 2024",
                  attendees: "200+ Trained",
                  description:
                    "Capacity building workshops across multiple cities covering compliance and best practices.",
                  image: "/workshop-training-session-sustainability.jpg",
                },
              ].map((event, idx) => (
                <Card
                  key={idx}
                  className="group overflow-hidden bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-eco-primary/10 text-eco-primary border-eco-primary/30">{event.date}</Badge>
                      <span className="text-xs text-muted-foreground">{event.attendees}</span>
                    </div>
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Impact</h2>
              <p className="text-xl text-muted-foreground">Measurable outcomes from our initiatives and events</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "25+", label: "Events Organized" },
                { icon: TrendingUp, value: "2000+", label: "Total Participants" },
                { icon: FileText, value: "15+", label: "Policy Documents" },
                { icon: Award, value: "100+", label: "Companies Certified" },
              ].map((stat, idx) => (
                <Card key={idx} className="p-8 text-center bg-card border-border/50">
                  <div className="mb-4 mx-auto w-14 h-14 rounded-xl bg-eco-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-eco-primary" />
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Stay Connected with FICPM</h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Subscribe to our newsletter to receive updates on upcoming events, initiatives, and industry news.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Button
                asChild
                size="lg"
                className="w-full bg-eco-primary hover:bg-eco-primary/90 text-white shadow-lg shadow-eco-primary/25"
              >
                <Link href="/contact">
                  Get Event Updates
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
