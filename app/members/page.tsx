"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Shield, TrendingUp, Building2, Award, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MembersPage() {
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
              <Users className="w-4 h-4 text-eco-primary" />
              <span className="text-sm text-eco-primary font-medium">Members & Governance</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              A Unified Network of
              <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                Industry Leaders
              </span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              FICPM brings together India's most innovative compostable product manufacturers under a transparent and
              democratic governance structure.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Membership Categories</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Join the membership tier that best fits your organization
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: "Manufacturing Members",
                  badge: "Primary",
                  description: "Companies actively engaged in compostable product manufacturing",
                  features: [
                    "Full voting rights",
                    "Access to all events and workshops",
                    "Policy advocacy representation",
                    "Certification support",
                    "Technical knowledge sharing",
                  ],
                },
                {
                  icon: Users,
                  title: "Associate Members",
                  badge: "Supporting",
                  description: "Suppliers, technology providers, and industry stakeholders",
                  features: [
                    "Event participation",
                    "Networking opportunities",
                    "Access to resources",
                    "Industry updates",
                    "Collaboration forums",
                  ],
                },
                {
                  icon: Award,
                  title: "Affiliate Members",
                  badge: "Research & Academic",
                  description: "Research institutions, universities, and academic organizations",
                  features: [
                    "Research collaboration",
                    "Knowledge exchange",
                    "Student engagement",
                    "Innovation partnerships",
                    "Conference access",
                  ],
                },
              ].map((membership, idx) => (
                <Card
                  key={idx}
                  className={`group p-8 bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10 hover:-translate-y-1 ${
                    idx === 0 ? "ring-2 ring-eco-primary/20" : ""
                  }`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-eco-primary/10 flex items-center justify-center group-hover:bg-eco-primary/20 transition-colors">
                      <membership.icon className="w-7 h-7 text-eco-primary" />
                    </div>
                    <Badge className="bg-eco-primary/10 text-eco-primary hover:bg-eco-primary/20 border-eco-primary/30">
                      {membership.badge}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{membership.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{membership.description}</p>

                  <div className="space-y-3 mb-6">
                    {membership.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-eco-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
                  >
                    <Link href="/membership">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Structure */}
      <section className="py-24 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Governance Structure</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Democratic, transparent, and accountable leadership ensuring every voice is heard
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Executive Council",
                  description:
                    "The Executive Council is the primary decision-making body, comprising elected representatives from manufacturing member companies. The council meets quarterly to set strategic direction and oversee federation activities.",
                  composition: "President, Vice President, Treasurer, Secretary, and 5 Regional Representatives",
                  term: "2 years (renewable)",
                },
                {
                  title: "Technical Advisory Board",
                  description:
                    "A panel of industry experts, scientists, and technical professionals who provide guidance on standards, certifications, and best practices in compostable product manufacturing.",
                  composition: "8-10 technical experts from diverse specializations",
                  term: "3 years",
                },
                {
                  title: "Regional Committees",
                  description:
                    "State and regional committees that address local industry needs, facilitate member engagement, and implement federation initiatives at the grassroots level.",
                  composition: "Elected representatives from each state/region",
                  term: "2 years",
                },
              ].map((body, idx) => (
                <Card key={idx} className="p-8 bg-card border-border/50">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-eco-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{body.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{body.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium text-eco-primary">Composition:</span>
                          <span className="text-sm text-muted-foreground">{body.composition}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-sm font-medium text-eco-primary">Term:</span>
                          <span className="text-sm text-muted-foreground">{body.term}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Dedicated leaders steering FICPM's vision and operations
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  name: "V. Peraprasad",
                  role: "President",
                  location: "Visakhapatnam"
                },
                {
                  name: "S. Ramani",
                  role: "General Secretary",
                  location: "Hyderabad"
                },
                {
                  name: "V. Narendra Kumar",
                  role: "Joint Secretary",
                  location: "Visakhapatnam"
                },
                {
                  name: "Shaik Shaida Shareef",
                  role: "Treasurer",
                  location: "Hyderabad"
                },
                {
                  name: "T. Hari Chaitanya",
                  role: "EC Member",
                  location: "Raichur, Karnataka"
                },
                {
                  name: "D. Karthik Sai",
                  role: "EC Member",
                  location: "West Godavari"
                },
                {
                  name: "Neha Agarwal",
                  role: "EC Member",
                  location: "Rangareddy, Telangana"
                }
              ].map((member, idx) => (
                <Card
                  key={idx}
                  className="group p-6 text-center bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10 hover:-translate-y-1 h-full flex flex-col"
                >
                  <div className="flex-1">
                    <div className="mb-4 mx-auto w-24 h-24 rounded-full bg-eco-primary/10 overflow-hidden border-2 border-eco-primary/20 group-hover:border-eco-primary/50 transition-colors">
                      <Image
                        src={`/mem${idx + 1}.png`}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-eco-primary font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.location}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-24 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Member Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Why leading manufacturers choose FICPM membership
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Policy Influence",
                  description: "Direct representation in government policy discussions affecting the industry",
                },
                {
                  icon: Users,
                  title: "Networking",
                  description: "Connect with manufacturers, suppliers, and industry stakeholders",
                },
                {
                  icon: Award,
                  title: "Certification Support",
                  description: "Guidance and assistance with quality standards and certifications",
                },
                {
                  icon: TrendingUp,
                  title: "Market Intelligence",
                  description: "Access to industry reports, trends, and market analysis",
                },
                {
                  icon: Building2,
                  title: "Business Development",
                  description: "Opportunities for partnerships and business growth",
                },
                {
                  icon: CheckCircle2,
                  title: "Brand Credibility",
                  description: "Association with India's leading compostable products federation",
                },
              ].map((benefit, idx) => (
                <Card
                  key={idx}
                  className="group p-6 bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10"
                >
                  <div className="mb-4 w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center group-hover:bg-eco-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-eco-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Join India's Leading Compostable Products Network
            </h2>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Become a part of FICPM and help shape the future of sustainable manufacturing in India.
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
