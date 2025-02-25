"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, ChevronRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">Montana Sauna Craft</span>
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
        <section className="relative h-screen overflow-hidden">
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
          
          {/* Steam effect layers */}
          <div className="absolute inset-0 z-10">
            <div className="relative h-full w-full">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-steam"
                  style={{
                    animationDelay: `${i * 1}s`,
                    left: `${25 + i * 20}%`
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
                  className="border-white text-white hover:bg-white/10 text-lg px-8"
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
                },
                {
                  title: "Outdoor Sauna Rooms",
                  description: "Standalone sauna buildings with stunning views of Montana's landscape.",
                },
                {
                  title: "Commercial Saunas",
                  description: "Large-scale sauna solutions for hotels, spas, and wellness centers.",
                },
              ].map((service, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6 space-y-4">
                    <div className="h-48 relative mb-4">
                      <Image
                        src={`/placeholder.svg?height=400&width=600`}
                        alt={service.title}
                        fill
                        className="rounded-md object-cover"
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
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=600`}
                    alt={`Featured project ${i + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
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
            <h3 className="text-lg font-bold">Montana Sauna Craft</h3>
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
              <li>Whitefish</li>
              <li>Kalispell</li>
              <li>Columbia Falls</li>
              <li>Bigfork</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold mb-4">Connect</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Houzz</li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Montana Sauna Craft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}