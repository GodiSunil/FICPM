"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  FileText,
  Download,
  BookOpen,
  Search,
  Filter,
  ExternalLink,
  Leaf,
  Award,
  Scale,
  TrendingUp,
} from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/sustainable-manufacturing-facility-with-green-tech.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        </div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-eco-primary/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-eco-primary/30 bg-eco-primary/5 backdrop-blur-sm">
              <BookOpen className="w-4 h-4 text-eco-primary" />
              <span className="text-sm text-eco-primary font-medium">Resources</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Knowledge Hub for
              <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                Sustainable Manufacturing
              </span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Access industry reports, technical guidelines, policy documents, and educational materials to support your
              compostable products journey.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input placeholder="Search resources..." className="pl-10 bg-background" />
                </div>
                <Button variant="outline" className="border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
              <p className="text-muted-foreground">Find the resources you need to grow your business</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: Scale, label: "Policy & Regulations", count: "12 Documents" },
                { icon: Award, label: "Standards & Certifications", count: "8 Guides" },
                { icon: FileText, label: "Industry Reports", count: "15 Reports" },
                { icon: BookOpen, label: "Best Practices", count: "20 Articles" },
              ].map((category, idx) => (
                <Card
                  key={idx}
                  className="group p-6 text-center cursor-pointer bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-eco-primary/10 hover:-translate-y-1"
                >
                  <div className="mb-4 mx-auto w-14 h-14 rounded-xl bg-eco-primary/10 flex items-center justify-center group-hover:bg-eco-primary/20 transition-colors group-hover:scale-110 transform duration-300">
                    <category.icon className="w-7 h-7 text-eco-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{category.label}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </Card>
              ))}
            </div>

            {/* Featured Resources */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Scale className="w-6 h-6 text-eco-primary" />
                  Policy & Regulations
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "India Plastic Waste Management Rules 2024",
                      type: "Policy Document",
                      date: "Updated January 2025",
                      description:
                        "Comprehensive overview of India's latest plastic waste management regulations and their implications for compostable product manufacturers.",
                      pages: "45 pages",
                    },
                    {
                      title: "FICPM Policy Recommendations Framework",
                      type: "White Paper",
                      date: "December 2024",
                      description:
                        "Our proposed policy framework for promoting compostable products and establishing industry standards across India.",
                      pages: "32 pages",
                    },
                  ].map((resource, idx) => (
                    <Card
                      key={idx}
                      className="p-6 bg-card border-border/50 hover:border-eco-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="bg-eco-primary/10 text-eco-primary border-eco-primary/30">
                          {resource.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{resource.pages}</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{resource.date}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-eco-primary hover:text-eco-primary hover:bg-eco-primary/5"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6 text-eco-primary" />
                  Standards & Certifications
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "BIS Standards for Compostable Products",
                      type: "Technical Guide",
                      date: "November 2024",
                      description:
                        "Complete guide to Bureau of Indian Standards requirements for compostable product certification and compliance.",
                      pages: "28 pages",
                    },
                    {
                      title: "International Compostability Standards Comparison",
                      type: "Research Report",
                      date: "October 2024",
                      description:
                        "Comparative analysis of global compostability standards including EN 13432, ASTM D6400, and BIS guidelines.",
                      pages: "52 pages",
                    },
                  ].map((resource, idx) => (
                    <Card
                      key={idx}
                      className="p-6 bg-card border-border/50 hover:border-eco-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="bg-eco-accent/10 text-eco-accent border-eco-accent/30">{resource.type}</Badge>
                        <span className="text-xs text-muted-foreground">{resource.pages}</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{resource.date}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-eco-primary hover:text-eco-primary hover:bg-eco-primary/5"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-eco-primary" />
                  Industry Reports
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Indian Compostable Products Market Report 2024",
                      type: "Market Analysis",
                      date: "September 2024",
                      description:
                        "Comprehensive market analysis covering size, growth trends, key players, and future projections for India's compostable products industry.",
                      pages: "68 pages",
                    },
                    {
                      title: "Sustainability Impact Assessment 2024",
                      type: "Annual Report",
                      date: "August 2024",
                      description:
                        "Annual assessment of environmental and economic impact of compostable products adoption across India.",
                      pages: "42 pages",
                    },
                  ].map((resource, idx) => (
                    <Card
                      key={idx}
                      className="p-6 bg-card border-border/50 hover:border-eco-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Badge className="bg-eco-primary/10 text-eco-primary border-eco-primary/30">
                          {resource.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{resource.pages}</span>
                      </div>
                      <h4 className="text-lg font-bold mb-2">{resource.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{resource.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{resource.date}</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-eco-primary hover:text-eco-primary hover:bg-eco-primary/5"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-16 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">External Resources</h2>
              <p className="text-muted-foreground">Useful links to government bodies and industry organizations</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Ministry of Environment", url: "moef.gov.in" },
                { title: "Bureau of Indian Standards", url: "bis.gov.in" },
                { title: "Central Pollution Control Board", url: "cpcb.nic.in" },
                { title: "Confederation of Indian Industry", url: "cii.in" },
                { title: "Federation of Indian Chambers", url: "ficci.in" },
                { title: "National Green Tribunal", url: "greentribunal.gov.in" },
              ].map((link, idx) => (
                <Card
                  key={idx}
                  className="group p-6 bg-card border-border/50 hover:border-eco-primary/50 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1 group-hover:text-eco-primary transition-colors">
                        {link.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{link.url}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-eco-primary transition-colors" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Member Resources CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 text-center bg-gradient-to-br from-eco-primary/10 to-background border-eco-primary/30">
              <Leaf className="w-12 h-12 text-eco-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Access Exclusive Member Resources</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Members get access to premium resources including detailed technical guides, certification templates,
                legal document samples, and more.
              </p>
              <Button className="bg-eco-primary hover:bg-eco-primary/90 text-white">Become a Member</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
