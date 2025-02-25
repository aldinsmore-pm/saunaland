"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, ChevronRight, Star } from "lucide-react"
import { useState, useEffect, useRef } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  // Steam particles configuration
  const steamParticles = useRef([
    // Core steam particles (center column)
    ...Array.from({ length: 6 }, (_, i) => ({
      id: `core-${i}`,
      x: 50 + (Math.random() * 2 - 1), // Slight random horizontal position
      y: 58 - (i % 2) * 3, // Staggered vertical positions
      size: 45 + Math.random() * 15,
      opacity: 0.5 + Math.random() * 0.25, // Higher opacity for core column
      blur: 'blur-3xl',
      animationType: 'steam-center',
      animationDuration: 8 + Math.random() * 2,
      animationDelay: i * 1.5 + Math.random() * 0.5,
      scale: 1 + (Math.random() * 0.3)
    })),
    
    // Left drifting particles
    ...Array.from({ length: 4 }, (_, i) => ({
      id: `left-${i}`,
      x: 38 - i * 2 + (Math.random() * 3 - 1.5),
      y: 62 - i * 1,
      size: 32 + Math.random() * 10,
      opacity: 0.35 + Math.random() * 0.2, // Medium-high opacity
      blur: 'blur-2xl',
      animationType: 'steam-left',
      animationDuration: 9 + Math.random() * 2.5,
      animationDelay: i * 2 + Math.random(),
      scale: 0.8 + (Math.random() * 0.3)
    })),
    
    // Right drifting particles
    ...Array.from({ length: 4 }, (_, i) => ({
      id: `right-${i}`,
      x: 62 + i * 2 + (Math.random() * 3 - 1.5),
      y: 62 - i * 1,
      size: 32 + Math.random() * 10,
      opacity: 0.35 + Math.random() * 0.2, // Medium-high opacity
      blur: 'blur-2xl',
      animationType: 'steam-right',
      animationDuration: 9 + Math.random() * 2.5,
      animationDelay: i * 2 + Math.random(),
      scale: 0.8 + (Math.random() * 0.3)
    })),
    
    // Swirl particles (rotating)
    ...Array.from({ length: 5 }, (_, i) => ({
      id: `swirl-${i}`,
      x: 48 + (i * 1) + (Math.random() * 4 - 2),
      y: 60 - (i % 3),
      size: 28 + Math.random() * 12,
      opacity: 0.3 + Math.random() * 0.15, // Medium opacity
      blur: i % 2 === 0 ? 'blur-2xl' : 'blur-3xl',
      animationType: 'steam-swirl',
      animationDuration: 10 + Math.random() * 3,
      animationDelay: i * 1.8 + Math.random() * 1.2,
      scale: 0.9 + (Math.random() * 0.2)
    })),
    
    // Ambient background particles
    ...Array.from({ length: 12 }, (_, i) => ({
      id: `ambient-${i}`,
      x: 30 + (Math.random() * 40),
      y: 50 + (Math.random() * 20),
      size: 15 + Math.random() * 20,
      opacity: 0.08 + Math.random() * 0.12, // Lower opacity for background
      blur: i % 3 === 0 ? 'blur-3xl' : (i % 3 === 1 ? 'blur-2xl' : 'blur-xl'),
      animationType: i % 2 === 0 ? 'steam-ambient-1' : 'steam-ambient-2',
      animationDuration: 12 + Math.random() * 5,
      animationDelay: i * 1.2 + Math.random() * 2,
      scale: 0.6 + (Math.random() * 0.4)
    })),
    
    // Foreground pulse particles (breathing effect)
    ...Array.from({ length: 3 }, (_, i) => ({
      id: `pulse-${i}`,
      x: 50 + (Math.random() * 10 - 5),
      y: 63 - (i * 2),
      size: 40 + Math.random() * 15,
      opacity: 0.25 + Math.random() * 0.15, // Medium-high opacity with pulsing effect
      blur: 'blur-3xl',
      animationType: 'steam-pulse',
      animationDuration: 8 + i * 2,
      animationDelay: i * 3 + Math.random() * 2,
      scale: 1.2 + (Math.random() * 0.4)
    }))
  ]).current;
  
  // Custom animation styles
  const SteamAnimations = () => (
    <style jsx global>{`
      /* Center rising steam with slight sway */
      @keyframes steam-center {
        0% { transform: translateY(0) scale(1); opacity: 0.5; }
        30% { transform: translateY(-80px) scale(1.8); opacity: 1.0; }
        70% { transform: translateY(-160px) translateX(5px) scale(2.3); opacity: 0.85; }
        100% { transform: translateY(-240px) translateX(-5px) scale(2.8); opacity: 0; }
      }
      
      /* Left drifting steam */
      @keyframes steam-left {
        0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.4; }
        30% { transform: translateY(-60px) translateX(-20px) scale(1.5); opacity: 0.95; }
        70% { transform: translateY(-140px) translateX(-50px) scale(2.2); opacity: 0.6; }
        100% { transform: translateY(-220px) translateX(-80px) scale(2.8); opacity: 0; }
      }
      
      /* Right drifting steam */
      @keyframes steam-right {
        0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.4; }
        30% { transform: translateY(-60px) translateX(20px) scale(1.5); opacity: 0.95; }
        70% { transform: translateY(-140px) translateX(50px) scale(2.2); opacity: 0.6; }
        100% { transform: translateY(-220px) translateX(80px) scale(2.8); opacity: 0; }
      }
      
      /* Swirling steam */
      @keyframes steam-swirl {
        0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.35; }
        25% { transform: translateY(-50px) rotate(120deg) scale(1.5); opacity: 0.85; }
        50% { transform: translateY(-100px) rotate(240deg) scale(2); opacity: 0.75; }
        75% { transform: translateY(-150px) rotate(360deg) scale(2.2); opacity: 0.5; }
        100% { transform: translateY(-200px) rotate(480deg) scale(2.5); opacity: 0; }
      }
      
      /* Ambient background particles with varied movement */
      @keyframes steam-ambient-1 {
        0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.15; }
        30% { transform: translateY(-40px) translateX(-15px) scale(1.3); opacity: 0.4; }
        60% { transform: translateY(-100px) translateX(-25px) scale(1.6); opacity: 0.25; }
        100% { transform: translateY(-180px) translateX(-10px) scale(1.9); opacity: 0; }
      }
      
      @keyframes steam-ambient-2 {
        0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.15; }
        30% { transform: translateY(-40px) translateX(15px) scale(1.3); opacity: 0.4; }
        60% { transform: translateY(-100px) translateX(25px) scale(1.6); opacity: 0.25; }
        100% { transform: translateY(-180px) translateX(10px) scale(1.9); opacity: 0; }
      }
      
      /* Pulse particles with breathing effect */
      @keyframes steam-pulse {
        0% { transform: translateY(0) scale(1); opacity: 0.2; }
        30% { transform: translateY(-30px) scale(1.7); opacity: 0.6; }
        50% { transform: translateY(-60px) scale(2); opacity: 0.3; }
        70% { transform: translateY(-90px) scale(2.3); opacity: 0.5; }
        100% { transform: translateY(-120px) scale(2.6); opacity: 0; }
      }
    `}</style>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Real Outdoor Solutions</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#services" className="transition-colors hover:text-foreground/80">
              Services
            </Link>
            <Link href="#gallery" className="transition-colors hover:text-foreground/80">
              Gallery
            </Link>
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
            <Button>Get Quote</Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen overflow-hidden hero-section">
          {/* Background layers */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/heroimage.webp"
              alt="Luxury sauna exterior"
              fill
              className="object-cover brightness-50 animate-fade-in"
              priority
              quality={100}
            />
          </div>
          
          {/* Global animation styles */}
          <SteamAnimations />
          
          {/* Steam effect layers */}
          <div className="absolute inset-0 z-10">
            <div className="relative h-full w-full">
              {/* Render all steam particles in layers */}
              
              {/* Render background ambient layer first */}
              {steamParticles
                .filter(p => p.id.includes('ambient'))
                .map(particle => (
                <div
                  key={particle.id}
                  className={`absolute ${particle.blur} rounded-full`}
                  style={{
                    top: `${particle.y}%`,
                    left: `${particle.x}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
                    transform: `translate(-50%, -50%) scale(${particle.scale})`,
                    animation: `${particle.animationType} ${particle.animationDuration}s ease-in-out infinite`,
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
              
              {/* Render pulse layer */}
              {steamParticles
                .filter(p => p.id.includes('pulse'))
                .map(particle => (
                <div
                  key={particle.id}
                  className={`absolute ${particle.blur} rounded-full`}
                  style={{
                    top: `${particle.y}%`,
                    left: `${particle.x}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
                    transform: `translate(-50%, -50%) scale(${particle.scale})`,
                    animation: `${particle.animationType} ${particle.animationDuration}s ease-in-out infinite`,
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
              
              {/* Render left and right drift layers */}
              {steamParticles
                .filter(p => p.id.includes('left') || p.id.includes('right'))
                .map(particle => (
                <div
                  key={particle.id}
                  className={`absolute ${particle.blur} rounded-full`}
                  style={{
                    top: `${particle.y}%`,
                    left: `${particle.x}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
                    transform: `translate(-50%, -50%) scale(${particle.scale})`,
                    animation: `${particle.animationType} ${particle.animationDuration}s ease-in-out infinite`,
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
              
              {/* Render swirl layer */}
              {steamParticles
                .filter(p => p.id.includes('swirl'))
                .map(particle => (
                <div
                  key={particle.id}
                  className={`absolute ${particle.blur} rounded-full`}
                  style={{
                    top: `${particle.y}%`,
                    left: `${particle.x}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
                    transform: `translate(-50%, -50%) scale(${particle.scale})`,
                    animation: `${particle.animationType} ${particle.animationDuration}s ease-in-out infinite`,
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
              
              {/* Render core layer (on top) */}
              {steamParticles
                .filter(p => p.id.includes('core'))
                .map(particle => (
                <div
                  key={particle.id}
                  className={`absolute ${particle.blur} rounded-full`}
                  style={{
                    top: `${particle.y}%`,
                    left: `${particle.x}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
                    transform: `translate(-50%, -50%) scale(${particle.scale})`,
                    animation: `${particle.animationType} ${particle.animationDuration}s ease-in-out infinite`,
                    animationDelay: `${particle.animationDelay}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 container h-full flex items-center">
            <div className="max-w-2xl space-y-8 animate-float">
              <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-6xl xl:text-7xl/none">
                Custom Saunas Crafted in the Heart of Montana
              </h1>
              <p className="text-xl text-gray-200 max-w-xl">
                Experience authentic Nordic wellness, expertly crafted for your space. 
                Where tradition meets modern luxury in the Flathead Valley.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 text-lg px-8"
                >
                  Start Your Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary hover:text-white hover:bg-white/10 text-lg px-8"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent z-10" />
        </section>

        {/* Rest of the sections... */}
        {/* Services Section */}
        <section id="services" className="py-24 bg-muted">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                From indoor luxury saunas to outdoor wilderness retreats, we create custom solutions for every space and
                preference.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Custom Indoor Saunas",
                  description: "Perfectly fitted saunas designed for your home's interior space.",
                  image: "/images/indoor-sauna.webp"
                },
                {
                  title: "Outdoor Sauna Rooms",
                  description: "Standalone sauna buildings with stunning views of Montana's landscape.",
                  image: "/images/outdoor-sauna.webp"
                },
                {
                  title: "Commercial Saunas",
                  description: "Large-scale sauna solutions for hotels, spas, and wellness centers.",
                  image: "/images/commercial-sauna.webp"
                },
              ].map((service, index) => (
                <Card key={index} className="relative overflow-hidden group">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-48 relative mb-4 overflow-hidden rounded-md">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <Button variant="ghost" className="group">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16 sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Lakeside Sauna Retreat",
                  color: "bg-primary/20"
                },
                {
                  title: "Mountain View Cedar Sauna",
                  color: "bg-secondary/20"
                },
                {
                  title: "Modern Home Spa Suite",
                  color: "bg-primary/30"
                },
                {
                  title: "Wilderness Cabin Sauna",
                  color: "bg-secondary/30"
                },
                {
                  title: "Nordic-Style Community Sauna",
                  color: "bg-primary/40"
                },
                {
                  title: "Luxury Hotel Wellness Center",
                  color: "bg-secondary/40"
                }
              ].map((project, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
                  <div className={`absolute inset-0 ${project.color} transition-opacity duration-500`}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/60">
                    <p className="text-white text-lg font-medium text-center px-4">{project.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-16 sm:text-4xl md:text-5xl">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  text: "The craftsmanship and attention to detail exceeded our expectations. A true masterpiece in our backyard.",
                  author: "Sarah M., Whitefish",
                },
                {
                  text: "Professional, knowledgeable, and a pleasure to work with. Our custom sauna is everything we dreamed of.",
                  author: "John D., Kalispell",
                },
                {
                  text: "From design to completion, the entire process was seamless. Highly recommend their services.",
                  author: "Michael R., Bigfork",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="relative">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">{testimonial.text}</p>
                    <p className="font-medium">{testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Your Custom Quote</h2>
                <p className="text-muted-foreground">
                  Ready to start your sauna project? Contact us for a personalized quote and consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Serving the Flathead Valley, Montana</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(406) 555-0123</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@montanasaunacraft.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Phone" />
                <Textarea placeholder="Tell us about your project" className="min-h-[150px]" />
                <Button size="lg" className="w-full">
                  Submit Request
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Real Outdoor Solutions</h3>
            <p className="text-sm text-muted-foreground">
              Custom sauna solutions crafted with precision and care in the Flathead Valley.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Service Areas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Whitefish
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Kalispell
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Columbia Falls
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground">
                  Bigfork
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="https://facebook.com" target="_blank" className="hover:text-foreground flex items-center gap-2">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com" target="_blank" className="hover:text-foreground flex items-center gap-2">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://houzz.com" target="_blank" className="hover:text-foreground flex items-center gap-2">
                  Houzz
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Real Outdoor Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}