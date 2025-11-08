"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, Leaf } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <style jsx global>{`
        .hero-bg {
          background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/sustainable-manufacturing-facility-with-green-tech.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 80vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
      {/* Hero Section */}
      <section className="hero-bg flex items-center justify-center text-white py-32">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-eco-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-eco-primary/30 bg-eco-primary/10 backdrop-blur-sm mb-6">
              <Leaf className="w-5 h-5 text-eco-primary" />
              <span className="text-base text-eco-primary font-medium">Join FICPM</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              Join the Future of
              <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                Sustainable Manufacturing
              </span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Become part of India's premier forum for sustainable manufacturing. Collaborate, innovate, and drive positive change in the manufacturing sector.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach out to us for membership inquiries, partnership opportunities, or general information about
                    FICPM.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="p-6 bg-card border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-eco-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-sm text-muted-foreground mb-1">info@ficpm.org</p>
                        <p className="text-sm text-muted-foreground">membership@ficpm.org</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-eco-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-sm text-muted-foreground mb-1">+91 XXXXX XXXXX</p>
                        <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM IST</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-eco-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Head Office</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Federation of Indian Compostable Products Manufacturers
                          <br />
                          Business District, New Delhi
                          <br />
                          India - 110001
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-card border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-eco-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Office Hours</h3>
                        <p className="text-sm text-muted-foreground mb-1">Monday - Friday</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-8 md:p-12 bg-card border-border/50">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours
                    </p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name</Label>
                      <Input id="organization" placeholder="Company or Institution Name" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={6} required />
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-eco-primary/5 border border-eco-primary/20 rounded-lg">
                      <Leaf className="w-5 h-5 text-eco-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        By submitting this form, you agree to our privacy policy and consent to being contacted by FICPM
                        regarding your inquiry.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-eco-primary hover:bg-eco-primary/90 text-white shadow-lg shadow-eco-primary/25"
                    >
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-gradient-to-b from-background to-eco-dark/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Regional Offices</h2>
              <p className="text-muted-foreground">Connect with our regional representatives across India</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { region: "North", city: "New Delhi", contact: "north@ficpm.org" },
                { region: "South", city: "Bangalore", contact: "south@ficpm.org" },
                { region: "East", city: "Kolkata", contact: "east@ficpm.org" },
                { region: "West", city: "Mumbai", contact: "west@ficpm.org" },
              ].map((office, idx) => (
                <Card
                  key={idx}
                  className="p-6 text-center bg-card border-border/50 hover:border-eco-primary/50 transition-colors"
                >
                  <div className="mb-4 mx-auto w-12 h-12 rounded-xl bg-eco-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-eco-primary" />
                  </div>
                  <h3 className="font-bold mb-1">{office.region} Region</h3>
                  <p className="text-sm text-muted-foreground mb-2">{office.city}</p>
                  <p className="text-xs text-eco-primary">{office.contact}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-eco-primary/10 to-background border-eco-primary/30 text-center">
              <h3 className="text-2xl font-bold mb-4">Looking for Quick Answers?</h3>
              <p className="text-muted-foreground mb-6">
                Check out our frequently asked questions or browse our resources section for detailed information.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="outline" className="border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent">
                  View FAQs
                </Button>
                <Button variant="outline" className="border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent">
                  Browse Resources
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
