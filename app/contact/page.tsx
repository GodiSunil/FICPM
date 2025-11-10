"use client"

import { useEffect, useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, SlideUp } from '@/components/ui/scroll-animation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, Leaf, ArrowRight } from "lucide-react"

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      
      e.preventDefault();
      const targetId = target.getAttribute('href');
      if (!targetId) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Update URL without page reload
        window.history.pushState({}, '', targetId);
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically make an API call to submit the form
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! We will get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Auto-hide success/error messages after 5 seconds
  useEffect(() => {
    if (!submitStatus) return;
    
    const timer = setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [submitStatus]);

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-bg {
          background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(0, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.8) 100%
          ), url('/sustainable-manufacturing-facility-with-green-tech.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          min-height: 90vh;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .glow {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.6;
          z-index: 0;
          pointer-events: none;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }

        .card-hover:hover {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .form-input {
          transition: all 0.2s ease-in-out;
        }

        .form-input:focus {
          box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.5);
        }
      `}</style>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative py-24 overflow-hidden bg-gradient-to-br from-eco-dark/95 via-eco-primary/10 to-eco-accent/20"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/30 to-eco-dark/20" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-eco-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-eco-accent/10 rounded-full blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-eco-primary/30 bg-eco-primary/5 backdrop-blur-sm">
              <Mail className="w-4 h-4 text-eco-primary" />
              <span className="text-sm text-eco-primary font-medium">Contact Us</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-balance">
              Get In Touch
              <span className="block mt-2 bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent">
                We're Here to Help
              </span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Have questions or want to collaborate? We'd love to hear from you. 
              Fill out the form below or reach out through our contact information.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <FadeIn delay={0.1}>
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-eco-primary/30 bg-eco-primary/10 backdrop-blur-sm hover:bg-eco-primary/20 transition-colors duration-300 cursor-pointer"
                >
                  <Leaf className="w-5 h-5 text-eco-primary" />
                  <span className="text-base text-eco-primary font-medium">Join FICPM</span>
                </motion.div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-eco-primary text-primary-foreground font-medium hover:bg-eco-primary/90 hover:shadow-lg transition-all duration-300 hover:gap-3 group"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </FadeIn>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Information & Form */}
      <section id="contact-form" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-small-black/[0.05] dark:bg-grid-small-white/[0.1]" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SlideUp delay={0.1} className="text-center mb-16">
              <span className="inline-block mb-4 text-sm font-medium text-eco-primary px-4 py-1.5 rounded-full bg-eco-primary/10">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions or want to learn more about our initiatives? Reach out to us and our team will get back to you as soon as possible.
              </p>
            </SlideUp>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <SlideUp delay={0.2} className="space-y-8">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Reach out to us for membership inquiries, partnership opportunities, or general information about FICPM.
                  </p>
                </SlideUp>

                <div className="space-y-6">
                  <SlideUp delay={0.3} className="space-y-6">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-eco-primary/10 dark:bg-eco-primary/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-eco-primary/20">
                          <Mail className="w-6 h-6 text-eco-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Email</h3>
                          <a href="mailto:info@ficpm.org" className="block text-sm text-muted-foreground mb-1 hover:text-eco-primary transition-colors">info@ficpm.org</a>
                          <a href="mailto:membership@ficpm.org" className="block text-sm text-muted-foreground hover:text-eco-primary transition-colors">membership@ficpm.org</a>
                        </div>
                      </div>
                    </Card>
                  </SlideUp>

                  <SlideUp delay={0.4} className="space-y-6">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-eco-primary/10 dark:bg-eco-primary/20 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-eco-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Phone</h3>
                          <a href="tel:+91XXXXXXXXXX" className="block text-sm text-muted-foreground mb-1 hover:text-eco-primary transition-colors">+91 XXXXXXXXXX</a>
                          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            Mon-Fri, 9 AM - 6 PM IST
                          </p>
                        </div>
                      </div>
                    </Card>
                  </SlideUp>

                  <SlideUp delay={0.5} className="space-y-6">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 card-hover">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-eco-primary/10 dark:bg-eco-primary/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-eco-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">Location</h3>
                          <address className="not-italic">
                            <p className="text-sm text-muted-foreground mb-1">Federation of Indian Chambers of Commerce & Industry (FICCI)</p>
                            <p className="text-sm text-muted-foreground">Federation House, Tansen Marg</p>
                            <p className="text-sm text-muted-foreground">New Delhi - 110001, India</p>
                          </address>
                          <a 
                            href="https://maps.google.com/?q=Federation+House,+Tansen+Marg,+New+Delhi+110001" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-eco-primary mt-2 hover:underline"
                          >
                            View on map
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </a>
                        </div>
                      </div>
                    </Card>
                  </SlideUp>
                </div>

                {/* Social Media Links */}
                <SlideUp delay={0.6} className="pt-4">
                  <h3 className="font-medium text-foreground/80 mb-3">Follow Us</h3>
                  <div className="flex gap-3">
                    {[
                      { icon: 'Linkedin', color: 'text-[#0077B5]', url: 'https://linkedin.com/company/ficpm' },
                      { icon: 'Twitter', color: 'text-[#1DA1F2]', url: 'https://twitter.com/ficpm' },
                      { icon: 'Facebook', color: 'text-[#4267B2]', url: 'https://facebook.com/ficpm' },
                      { icon: 'Instagram', color: 'text-[#E1306C]', url: 'https://instagram.com/ficpm' },
                    ].map((social, index) => (
                      <a 
                        key={social.icon}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-lg flex items-center justify-center bg-card border border-border/50 hover:bg-accent/50 transition-colors ${social.color}`}
                        aria-label={`${social.icon} profile`}
                      >
                        <span className="sr-only">{social.icon}</span>
                        <span className="text-lg font-semibold">{social.icon[0]}</span>
                      </a>
                    ))}
                  </div>
                </SlideUp>
              </div>

              {/* Contact Form */}
              <FadeIn delay={0.2} className="lg:col-span-2">
                <Card className="p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border/50 relative overflow-hidden group">
                  {/* Decorative elements */}
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-eco-primary/5 rounded-full blur-3xl -z-10" />
                  <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-eco-accent/5 rounded-full blur-3xl -z-10" />
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    Send us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">Have a question or feedback? We'd love to hear from you!</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FadeIn delay={0.1} className="space-y-2">
                        <Label htmlFor="name" className="text-foreground/80 font-medium">Full Name <span className="text-red-500">*</span></Label>
                        <Input 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe" 
                          className={`form-input h-12 px-4 rounded-lg border-border/50 focus:border-eco-primary/50 focus:ring-1 focus:ring-eco-primary/20 ${errors?.name ? 'border-red-500' : ''}`}
                          aria-invalid={!!errors?.name}
                          aria-describedby={errors?.name ? 'name-error' : undefined}
                          disabled={isSubmitting}
                        />
                        {errors?.name && (
                          <p id="name-error" className="text-sm text-red-500 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </FadeIn>
                      
                      <FadeIn delay={0.2} className="space-y-2">
                        <Label htmlFor="email" className="text-foreground/80 font-medium">Email <span className="text-red-500">*</span></Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com" 
                          className={`form-input h-12 px-4 rounded-lg border-border/50 focus:border-eco-primary/50 focus:ring-1 focus:ring-eco-primary/20 ${errors?.email ? 'border-red-500' : ''}`}
                          aria-invalid={!!errors?.email}
                          aria-describedby={errors?.email ? 'email-error' : undefined}
                          disabled={isSubmitting}
                        />
                        {errors?.email && (
                          <p id="email-error" className="text-sm text-red-500 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </FadeIn>
                    </div>
                    
                    <FadeIn delay={0.3} className="space-y-2">
                      <Label htmlFor="message" className="text-foreground/80 font-medium">Message <span className="text-red-500">*</span></Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message..."
                        className={`w-full px-4 py-3 rounded-lg border border-border/50 focus:border-eco-primary/50 focus:ring-1 focus:ring-eco-primary/20 ${
                          errors.message ? 'border-red-500' : ''
                        }`}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        disabled={isSubmitting}
                      />
                      {errors.message && (
                        <p id="message-error" className="text-sm text-red-500 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </FadeIn>
                    
                    <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center justify-between pt-2 gap-4">
                      <div className="text-sm text-muted-foreground flex items-center gap-2">
                        <svg className="w-4 h-4 text-eco-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>We'll get back to you within 24 hours</span>
                      </div>
                      <Button 
                        type="submit" 
                        className="gap-2 group h-11 px-6 rounded-lg bg-eco-primary hover:bg-eco-primary/90 text-primary-foreground font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        Send Message
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </FadeIn>
                    
                    {/* Form submission status */}
                    {submitStatus && (
                      <FadeIn delay={0.5} className={`p-4 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        <div className="flex items-center">
                          {submitStatus.success ? (
                            <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          )}
                          <p className="text-sm font-medium">{submitStatus.message}</p>
                        </div>
                      </FadeIn>
                    )}
                  </form>
                </Card>
              </FadeIn>
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

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.05]" />
        <div className="container mx-auto px-4">
          <FadeIn delay={0.1} className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Find Us on the Map
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit our office or get directions to our location. We'd be happy to welcome you!
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-card p-6 rounded-xl shadow-sm border border-border/50">
            <div className="aspect-video w-full bg-muted/50 relative">
              {/* Replace with your actual map embed code */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-eco-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">FICPM Office</h3>
                  <p className="text-muted-foreground mb-4">Federation House, Tansen Marg, New Delhi - 110001</p>
                  <a 
                    href="https://maps.google.com/?q=Federation+House,+Tansen+Marg,+New+Delhi+110001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-eco-primary hover:underline"
                  >
                    Open in Google Maps
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
