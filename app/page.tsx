"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Users, FileText, Calendar, Shield, Target, MapPin, Factory, Leaf } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const StatCard = ({ value, label, icon, index }) => {
  return (
    <motion.div 
      className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-eco-primary/20 overflow-hidden"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2 + (index * 0.1)
          } 
        }
      }}
    >
      {/* Animated border on hover */}
      <motion.div 
        className="absolute inset-0 border-t-2 border-eco-primary/0 group-hover:border-eco-primary/100 transition-all duration-500"
        initial={false}
      />
      
      {/* Icon with subtle float animation */}
      <motion.div 
        className="w-16 h-16 mx-auto mb-6 rounded-xl bg-eco-primary/5 flex items-center justify-center text-eco-primary group-hover:bg-eco-primary/10 transition-colors duration-300"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {icon}
      </motion.div>
      
      {/* Animated counter */}
      <motion.div 
        className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-eco-primary to-eco-accent bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0, y: 10 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { 
            delay: 0.3 + (index * 0.1),
            duration: 0.8 
          } 
        }}
      >
        <AnimatedCounter value={value} />
      </motion.div>
      
      <p className="text-muted-foreground font-medium text-sm sm:text-base">
        {label}
      </p>
    </motion.div>
  )
}

// Initiative Card Component
const InitiativeCard = ({ 
  icon: Icon, 
  title, 
  date, 
  description, 
  colors,
  index 
}) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          delay: 0.1 * index,
          duration: 0.6,
          ease: [0.16, 1, 0.3, 1]
        } 
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative"
    >
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.hover}`}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
      />
      
      <Card
        className={`relative overflow-hidden p-8 h-full border ${colors.border} bg-gradient-to-br ${colors.bg} transition-all duration-500 group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-50 blur-3xl transition-opacity duration-500"
          style={{
            backgroundColor: colors.icon.replace('text-', '')
          }}
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            opacity: isHovered ? 0.7 : 0.5,
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <motion.div 
              className={`w-14 h-14 rounded-xl ${colors.iconBg} backdrop-blur-sm flex items-center justify-center shadow-sm`}
              animate={{
                y: isHovered ? [0, -5, 0] : 0,
                rotate: isHovered ? [0, 5, -5, 0] : 0,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            >
              <Icon className={`w-6 h-6 ${colors.icon}`} />
            </motion.div>
            
            <div className="flex-1">
              <motion.div 
                className="inline-block"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className={`text-xs font-medium ${colors.date} px-3 py-1.5 rounded-full backdrop-blur-sm inline-block mb-2`}>
                  {date}
                </span>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-semibold mb-3 text-gray-800"
                initial={{ y: 0 }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {title}
              </motion.h3>
            </div>
          </div>
          
          <motion.p 
            className="text-gray-600 leading-relaxed mb-6"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {description}
          </motion.p>
          
          <motion.div
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button
              variant="ghost"
              className={`mt-4 p-0 h-auto ${colors.icon} hover:bg-transparent`}
            >
              <span className="relative flex items-center">
                Learn More
                <motion.span
                  className="ml-2"
                  animate={{
                    x: isHovered ? [0, 4, 0] : 0,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${colors.icon} transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'}`}></span>
              </span>
            </Button>
          </motion.div>
        </div>
      </Card>
    </motion.div>
  )
}

const AnimatedCounter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    const numValue = parseInt(value.replace(/\D/g, ''))
    if (isNaN(numValue)) {
      setDisplayValue(value)
      return
    }
    
    const duration = 2000 // ms
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)
    const easeOutQuad = t => t * (2 - t)
    
    let frame = 0
    const countTo = numValue
    
    const counter = setInterval(() => {
      frame++
      const progress = easeOutQuad(frame / totalFrames)
      const currentCount = Math.round(countTo * progress)
      
      if (parseInt(displayValue) !== currentCount) {
        setDisplayValue(currentCount)
      }
      
      if (frame === totalFrames) {
        clearInterval(counter)
      }
    }, frameDuration)
    
    return () => clearInterval(counter)
  }, [value])
  
  return (
    <span>
      {value.includes('%') ? `${displayValue}%` : `${displayValue}+`}
    </span>
  )
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-background">
      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-eco-dark/95 via-eco-primary/10 to-eco-accent/20 pb-[170px] sm:pb-[420px]">
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
          className="absolute left-0 bottom-0 sm:bottom-[-150px]"
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
      <section className="py-24 bg-gradient-to-b from-background to-[#f9f9f9] relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-eco-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-eco-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/3 left-2/3 w-80 h-80 bg-eco-dark rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                } 
              }
            }}
          >
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard 
                value="150+" 
                label="Member Companies"
                icon={<Users className="w-8 h-8" />}
                index={0}
              />
              <StatCard 
                value="10+" 
                label="States Represented"
                icon={<MapPin className="w-8 h-8" />}
                index={1}
              />
              <StatCard 
                value="50K+" 
                label="Tons Annual Production"
                icon={<Factory className="w-8 h-8" />}
                index={2}
              />
              <StatCard 
                value="100%" 
                label="Commitment to Sustainability"
                icon={<Leaf className="w-8 h-8" />}
                index={3}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Preview */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6 }
                  }
                }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Key Initiatives
                </h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  Driving change through action and collaboration
                </p>
              </motion.div>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      delay: 0.2,
                      duration: 0.6 
                    }
                  }
                }}
                className="hidden md:block"
              >
                <Button
                  asChild
                  variant="outline"
                  className="group border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
                >
                  <Link href="/initiatives" className="relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      View All
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Annual Summit 2025",
                  date: "March 2025",
                  description: "Join industry leaders, policymakers, and innovators at our flagship event focused on the future of compostable materials.",
                  colors: {
                    bg: "from-amber-50 to-orange-50",
                    iconBg: "bg-amber-100/80",
                    icon: "text-amber-600",
                    date: "bg-amber-500/10 text-amber-700",
                    border: "border-amber-200",
                    hover: "hover:shadow-amber-200/40"
                  }
                },
                {
                  icon: FileText,
                  title: "Policy Framework Development",
                  date: "Ongoing",
                  description: "Collaborating with government bodies to establish comprehensive guidelines for compostable product certification and standards.",
                  colors: {
                    bg: "from-emerald-50 to-teal-50",
                    iconBg: "bg-emerald-100/80",
                    icon: "text-emerald-600",
                    date: "bg-emerald-500/10 text-emerald-700",
                    border: "border-emerald-200",
                    hover: "hover:shadow-emerald-200/40"
                  }
                },
              ].map((initiative, idx) => (
                <InitiativeCard 
                  key={idx}
                  index={idx}
                  {...initiative}
                />
              ))}
            </motion.div>

            <motion.div
              className="mt-8 md:hidden text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: 0.4,
                    duration: 0.6 
                  }
                }
              }}
            >
              <Button 
                asChild 
                variant="outline" 
                className="group border-eco-primary/30 hover:bg-eco-primary/5 bg-transparent"
              >
                <Link href="/initiatives" className="relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    View All Initiatives
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
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
