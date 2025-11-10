"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Building2, Users, Award, ArrowRight, FileText, Mail, Phone } from "lucide-react"

export default function MembershipPage() {
  const [selectedType, setSelectedType] = useState("manufacturing")

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
              <FileText className="w-4 h-4 text-eco-primary" />
              <span className="text-sm text-eco-primary font-medium">Membership Application</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Join FICPM and
              <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                Shape the Future
              </span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Become part of India's most influential network of compostable product manufacturers and industry
              stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Benefits Summary */}
      <section className="py-16 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Building2, label: "150+ Members" },
                { icon: Users, label: "Networking Events" },
                { icon: Award, label: "Certification Support" },
                { icon: CheckCircle2, label: "Policy Advocacy" },
              ].map((item, idx) => (
                <Card key={idx} className="p-6 text-center bg-card border-border/50">
                  <div className="mb-3 mx-auto w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-eco-primary" />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Select Membership Type</h2>
              <p className="text-muted-foreground">Choose the category that best fits your organization</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  id: "manufacturing",
                  icon: Building2,
                  title: "Manufacturing Member",
                  description: "For compostable product manufacturers",
                  badge: "Primary",
                },
                {
                  id: "associate",
                  icon: Users,
                  title: "Associate Member",
                  description: "For suppliers and stakeholders",
                  badge: "Supporting",
                },
                {
                  id: "affiliate",
                  icon: Award,
                  title: "Affiliate Member",
                  description: "For research and academic institutions",
                  badge: "Research",
                },
              ].map((type) => (
                <Card
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`group p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    selectedType === type.id
                      ? "ring-2 ring-eco-primary bg-eco-primary/5 border-eco-primary"
                      : "bg-card border-border/50 hover:border-eco-primary/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        selectedType === type.id
                          ? "bg-eco-primary/20"
                          : "bg-eco-primary/10 group-hover:bg-eco-primary/20"
                      }`}
                    >
                      <type.icon className="w-6 h-6 text-eco-primary" />
                    </div>
                    <Badge
                      className={
                        selectedType === type.id
                          ? "bg-eco-primary text-white"
                          : "bg-eco-primary/10 text-eco-primary border-eco-primary/30"
                      }
                    >
                      {type.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                  {selectedType === type.id && (
                    <div className="mt-4 flex items-center gap-2 text-eco-primary text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      Selected
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 bg-card border-border/50">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2">Application Form</h2>
                <p className="text-muted-foreground">
                  Please fill out all required fields to complete your application
                </p>
              </div>

              <form className="space-y-8">
                {/* Organization Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-eco-primary" />
                    Organization Details
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name *</Label>
                      <Input id="orgName" placeholder="Enter organization name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="orgType">Organization Type *</Label>
                      <Input id="orgType" placeholder="e.g., Private Limited, Partnership" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="regNumber">Registration Number *</Label>
                    <Input id="regNumber" placeholder="Company registration number" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yearEstablished">Year Established *</Label>
                    <Input id="yearEstablished" type="number" placeholder="YYYY" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" type="url" placeholder="https://example.com" />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Mail className="w-5 h-5 text-eco-primary" />
                    Contact Information
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person Name *</Label>
                      <Input id="contactName" placeholder="Full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation *</Label>
                      <Input id="designation" placeholder="Job title" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Registered Address *</Label>
                    <Textarea id="address" placeholder="Enter complete address" rows={3} required />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="City" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" placeholder="State" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">PIN Code *</Label>
                      <Input id="pincode" placeholder="000000" required />
                    </div>
                  </div>
                </div>

                {/* Business Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <FileText className="w-5 h-5 text-eco-primary" />
                    Business Details
                  </h3>

                  <div className="space-y-2">
                    <Label htmlFor="products">Products/Services *</Label>
                    <Textarea
                      id="products"
                      placeholder="Describe your compostable products or services"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="capacity">Annual Production Capacity (if applicable)</Label>
                    <Input id="capacity" placeholder="e.g., 1000 tons/year" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="certifications">Existing Certifications</Label>
                    <Textarea
                      id="certifications"
                      placeholder="List any relevant certifications (e.g., ISO, BIS, compostability certificates)"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whyJoin">Why do you want to join FICPM? *</Label>
                    <Textarea
                      id="whyJoin"
                      placeholder="Share your reasons and expectations from membership"
                      rows={4}
                      required
                    />
                  </div>
                </div>

                {/* Supporting Documents */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Supporting Documents</h3>
                  <div className="p-6 border-2 border-dashed border-border rounded-lg bg-muted/30">
                    <div className="text-center space-y-2">
                      <FileText className="w-8 h-8 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">
                        Please prepare the following documents (to be uploaded after submission):
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 max-w-md mx-auto text-left">
                        <li>• Company registration certificate</li>
                        <li>• GST certificate</li>
                        <li>• Product certifications (if any)</li>
                        <li>• Company profile/brochure</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Terms and Submit */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3 p-4 bg-eco-primary/5 border border-eco-primary/20 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-eco-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      By submitting this application, you agree to abide by FICPM's constitution, bylaws, and code of
                      conduct. All information provided will be verified during the review process.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="flex-1 bg-eco-primary hover:bg-eco-primary/90 text-white shadow-lg shadow-eco-primary/25"
                    >
                      Submit Application
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="flex-1 border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
                    >
                      Save as Draft
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Happens Next?</h2>
              <p className="text-muted-foreground">Your application journey with FICPM</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Application Review",
                  description:
                    "Our team reviews your application and verifies all submitted documents within 5-7 business days.",
                },
                {
                  step: "2",
                  title: "Committee Evaluation",
                  description:
                    "The membership committee evaluates your application based on eligibility criteria and organizational fit.",
                },
                {
                  step: "3",
                  title: "Welcome Onboard",
                  description:
                    "Once approved, you'll receive your membership certificate and access to all member benefits.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative text-center">
                  <div className="mb-4 mx-auto w-16 h-16 rounded-full bg-eco-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-eco-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-eco-primary/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border/50 text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help with Your Application?</h3>
              <p className="text-muted-foreground mb-6">
                Our membership team is here to assist you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-eco-primary" />
                  <span className="text-muted-foreground">membership@ficpm.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-eco-primary" />
                  <span className="text-muted-foreground">+91 XXXXX XXXXX</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
