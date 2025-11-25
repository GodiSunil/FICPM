"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Leaf, Target, Users, Globe, Award, TrendingUp, Heart, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hoverCard = {
  scale: 1.03,
  y: -5,
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 15,
    mass: 0.5
  }
};

const floating = {
  y: [0, -15, 0],
  x: [0, 5, 0],
  rotate: [0, 1, -1, 0],
  transition: {
    duration: 6,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: "easeInOut",
    times: [0, 0.5, 1]
  }
};

const pulse = {
  scale: [1, 1.1, 1],
  rotate: [0, 2, -2, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: [0.4, 0, 0.2, 1],
    times: [0, 0.3, 0.7, 1]
  }
};

const iconVariants = {
  hover: {
    rotate: [0, 5, -5, 0],
    scale: 1.15,
    y: -3,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10,
      duration: 0.5
    }
  },
  tap: { 
    scale: 0.92,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15
    }
  }
};

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
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-background/90 to-background/80">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial="hidden"
          animate="visible"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-eco-primary/5 to-eco-accent/5"
              style={{
                width: Math.random() * 300 + 100 + 'px',
                height: Math.random() * 300 + 100 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(60px)'
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                scale: [1, 1 + Math.random() * 0.5],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={cardVariants}
              >
                <motion.div
                  whileHover={hoverCard}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden group"
                >
                  <Card className="p-10 bg-card/90 backdrop-blur-lg border-2 border-border/80 hover:border-eco-primary transition-all duration-500 hover:shadow-2xl hover:shadow-eco-primary/20 relative overflow-hidden h-full transform-gpu">
                    {/* Animated background elements */}
                    <motion.div 
                      className="absolute -right-20 -top-20 w-64 h-64 bg-eco-primary/5 rounded-full"
                      animate={floating}
                    />
                    <motion.div 
                      className="absolute -left-10 -bottom-10 w-48 h-48 bg-eco-accent/5 rounded-full"
                      animate={{
                        ...floating,
                        y: [0, -15, 0],
                        transition: { ...floating.transition, delay: 1 }
                      }}
                    />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <motion.div 
                        className="mb-6 w-20 h-20 rounded-2xl bg-eco-primary/10 flex items-center justify-center backdrop-blur-sm border border-eco-primary/20"
                        whileHover="hover"
                        variants={iconVariants}
                      >
                        <motion.div 
                          animate={pulse}
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, 5, -5, 0],
                            transition: { 
                              type: "spring",
                              stiffness: 500,
                              damping: 15
                            }
                          }}
                        >
                          <Target className="w-10 h-10 text-eco-primary" />
                        </motion.div>
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        Our <span className="text-eco-primary">Vision</span>
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500 flex-grow">
                        To establish India as a global leader in compostable product innovation and manufacturing, creating a
                        sustainable ecosystem that benefits both the environment and the economy.
                      </p>
                      
                      <motion.div 
                        className="mt-8 flex items-center text-eco-primary font-medium group-hover:translate-x-1 transition-transform duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Discover more</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -bottom-6 -right-6 w-48 h-48 bg-eco-primary/10 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-700"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* Decorative sparkles */}
                    <AnimatePresence>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-eco-primary/40"
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            fontSize: `${Math.random() * 10 + 10}px`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                            rotate: Math.random() * 360,
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            repeatDelay: 5 + Math.random() * 10,
                            ease: "easeInOut",
                          }}
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                  ...cardVariants,
                  onscreen: {
                    ...cardVariants.onscreen,
                    transition: {
                      ...cardVariants.onscreen.transition,
                      delay: 0.2
                    }
                  }
                }}
              >
                <motion.div
                  whileHover={hoverCard}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden group"
                >
                  <Card className="p-10 bg-card/90 backdrop-blur-lg border-2 border-border/80 hover:border-eco-accent transition-all duration-500 hover:shadow-2xl hover:shadow-eco-accent/20 relative overflow-hidden h-full transform-gpu">
                    {/* Animated background elements */}
                    <motion.div 
                      className="absolute -left-20 -top-20 w-64 h-64 bg-eco-accent/5 rounded-full"
                      animate={{
                        ...floating,
                        y: [0, -15, 0],
                        transition: { ...floating.transition, delay: 0.5 }
                      }}
                    />
                    <motion.div 
                      className="absolute -right-10 -bottom-10 w-48 h-48 bg-eco-primary/5 rounded-full"
                      animate={{
                        ...floating,
                        y: [0, -20, 0],
                        transition: { ...floating.transition, delay: 1.5 }
                      }}
                    />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <motion.div 
                        className="mb-6 w-20 h-20 rounded-2xl bg-eco-accent/10 flex items-center justify-center backdrop-blur-sm border border-eco-accent/20"
                        whileHover="hover"
                        variants={iconVariants}
                      >
                        <motion.div 
                          animate={pulse}
                          whileHover={{
                            scale: 1.2,
                            rotate: [0, 10, -10, 0],
                            transition: { 
                              type: "spring",
                              stiffness: 500,
                              damping: 15
                            }
                          }}
                        >
                          <Heart className="w-10 h-10 text-eco-accent" />
                        </motion.div>
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                        Our <span className="text-eco-accent">Mission</span>
                      </h3>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500 flex-grow">
                        To unite manufacturers, promote innovation, advocate for favorable policies, and ensure the highest
                        standards of quality and sustainability in compostable product manufacturing across India.
                      </p>
                      
                      <motion.div 
                        className="mt-8 flex items-center text-eco-accent font-medium group-hover:translate-x-1 transition-transform duration-300"
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.div>
                      
                      <motion.div 
                        className="absolute -bottom-6 -right-6 w-48 h-48 bg-eco-accent/10 rounded-full blur-3xl group-hover:blur-4xl transition-all duration-700"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                    </div>
                    
                    {/* Decorative sparkles */}
                    <AnimatePresence>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute text-eco-accent/40"
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            fontSize: `${Math.random() * 10 + 10}px`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.5, 0],
                            rotate: Math.random() * 360,
                          }}
                          transition={{
                            duration: 2 + Math.random() * 3,
                            delay: 1 + Math.random() * 2,
                            repeat: Infinity,
                            repeatDelay: 5 + Math.random() * 10,
                            ease: "easeInOut",
                          }}
                        >
                          <Sparkles className="w-4 h-4" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-eco-dark/5">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial="hidden"
          animate="visible"
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-eco-primary/5 to-eco-accent/5"
              style={{
                width: Math.random() * 200 + 50 + 'px',
                height: Math.random() * 200 + 50 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(50px)'
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 80],
                y: [0, (Math.random() - 0.5) * 80],
                scale: [1, 1 + Math.random() * 0.3],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 25 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
                  color: "eco-primary"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Stronger together—building a unified industry voice.",
                  color: "eco-accent"
                },
                {
                  icon: Award,
                  title: "Quality Excellence",
                  description: "Committed to the highest standards in manufacturing and compliance.",
                  color: "eco-primary"
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "Continuously advancing technology and sustainable practices.",
                  color: "eco-accent"
                },
              ].map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    } 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={hoverCard}
                  whileTap={{ scale: 0.98 }}
                  className="relative group h-full"
                >
                  <Card className="p-8 h-full bg-card/90 backdrop-blur-lg border-2 border-border/80 hover:border-eco-primary transition-all duration-500 hover:shadow-2xl hover:shadow-eco-primary/20 relative overflow-hidden transform-gpu">
                    {/* Animated background elements */}
                    <motion.div 
                      className={`absolute -right-10 -top-10 w-40 h-40 bg-${value.color}/5 rounded-full`}
                      animate={floating}
                    />
                    
                    <div className="relative z-10 h-full flex flex-col items-center">
                      <motion.div 
                        className={`mb-6 w-16 h-16 rounded-2xl bg-${value.color}/10 flex items-center justify-center backdrop-blur-sm border border-${value.color}/20`}
                        whileHover="hover"
                        variants={iconVariants}
                      >
                        <motion.div animate={pulse}>
                          <value.icon className={`w-8 h-8 text-${value.color}`} />
                        </motion.div>
                      </motion.div>
                      
                      <h3 className="text-xl font-semibold mb-4 text-center">
                        {value.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed text-center text-pretty">
                        {value.description}
                      </p>
                      
                      <motion.div 
                        className={`mt-6 w-8 h-0.5 bg-gradient-to-r from-transparent via-${value.color} to-transparent`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '2rem' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                      />
                    </div>
                    
                    {/* Decorative sparkles */}
                    <AnimatePresence>
                      {[...Array(2)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute text-${value.color}/40`}
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            fontSize: `${Math.random() * 10 + 8}px`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 1.2, 0],
                            rotate: Math.random() * 360,
                          }}
                          transition={{
                            duration: 3 + Math.random() * 4,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            repeatDelay: 8 + Math.random() * 10,
                            ease: "easeInOut",
                          }}
                        >
                          <Sparkles className="w-3 h-3" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial="hidden"
          animate="visible"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-eco-primary/5 to-eco-accent/5"
              style={{
                width: Math.random() * 250 + 50 + 'px',
                height: Math.random() * 250 + 50 + 'px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'blur(60px)'
              }}
              animate={{
                x: [0, (Math.random() - 0.5) * 100],
                y: [0, (Math.random() - 0.5) * 100],
                scale: [1, 1 + Math.random() * 0.4],
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
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
                  color: "eco-primary"
                },
                {
                  icon: Award,
                  title: "Standards & Certification",
                  points: [
                    "Develop industry-wide quality benchmarks",
                    "Facilitate compliance with international standards",
                    "Ensure authenticity of compostable claims",
                  ],
                  color: "eco-accent"
                },
                {
                  icon: Users,
                  title: "Member Support",
                  points: [
                    "Provide networking and collaboration opportunities",
                    "Share best practices and technical knowledge",
                    "Offer training and capacity building programs",
                  ],
                  color: "eco-primary"
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: idx * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 20
                    } 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={hoverCard}
                  whileTap={{ scale: 0.98 }}
                  className="relative h-full"
                >
                  <Card className="p-8 h-full bg-card/90 backdrop-blur-lg border-2 border-border/80 hover:border-eco-primary transition-all duration-500 hover:shadow-2xl hover:shadow-eco-primary/20 relative overflow-hidden transform-gpu">
                    {/* Animated background elements */}
                    <motion.div 
                      className={`absolute -right-10 -top-10 w-40 h-40 bg-${item.color}/5 rounded-full`}
                      animate={floating}
                    />
                    
                    <div className="relative z-10 h-full flex flex-col">
                      <motion.div 
                        className={`mb-8 w-14 h-14 rounded-2xl bg-${item.color}/10 flex items-center justify-center backdrop-blur-sm border border-${item.color}/20`}
                        whileHover="hover"
                        variants={iconVariants}
                      >
                        <motion.div animate={pulse}>
                          <item.icon className={`w-7 h-7 text-${item.color}`} />
                        </motion.div>
                      </motion.div>
                      
                      <h3 className="text-2xl font-semibold mb-6">{item.title}</h3>
                      
                      <ul className="space-y-3 flex-grow">
                        {item.points.map((point, pidx) => (
                          <motion.li 
                            key={pidx} 
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { 
                                delay: 0.2 + (pidx * 0.1),
                                duration: 0.3
                              } 
                            }}
                            viewport={{ once: true }}
                          >
                            <motion.div 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: `var(--${item.color})` }}
                              initial={{ scale: 0 }}
                              whileInView={{ 
                                scale: 1,
                                transition: { 
                                  delay: 0.1 + (pidx * 0.1),
                                  type: "spring",
                                  stiffness: 500,
                                  damping: 15
                                } 
                              }}
                              viewport={{ once: true }}
                            />
                            <span className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                              {point}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.div 
                        className={`mt-8 w-10 h-0.5 bg-gradient-to-r from-${item.color} to-transparent`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '2.5rem' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </div>
                    
                    {/* Decorative sparkles */}
                    <AnimatePresence>
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute text-${item.color}/40`}
                          style={{
                            left: `${10 + Math.random() * 80}%`,
                            top: `${10 + Math.random() * 80}%`,
                            fontSize: `${Math.random() * 10 + 10}px`,
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 0.6, 0],
                            scale: [0, 1.2, 0],
                            rotate: Math.random() * 360,
                          }}
                          transition={{
                            duration: 3 + Math.random() * 4,
                            delay: Math.random() * 2,
                            repeat: Infinity,
                            repeatDelay: 8 + Math.random() * 10,
                            ease: "easeInOut",
                          }}
                        >
                          <Sparkles className="w-3 h-3" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-eco-dark to-background" />
        <div className="absolute inset-0 bg-[#dbeee3]" data-component-name="AboutPage"></div>
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
