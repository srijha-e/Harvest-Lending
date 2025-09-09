"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  DollarSign,
  Clock,
  Shield,
  Star,
  Users,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
  Calculator,
  Globe,
  Zap,
} from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HarvestLendingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [counters, setCounters] = useState({ customers: 0, funded: 0, satisfaction: 0 })

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCounters((prev) => ({
          customers: prev.customers < 1000 ? prev.customers + 10 : 1000,
          funded: prev.funded < 50 ? prev.funded + 1 : 50,
          satisfaction: prev.satisfaction < 92 ? prev.satisfaction + 1 : 92,
        }))
      }, 50)

      setTimeout(() => clearInterval(interval), 2000)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-800 text-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-slate-800/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div
            className={`flex items-center space-x-3 transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
            <Image
              src="/images/harvest-logo.png"
              alt="Harvest Lending Logo"
              width={40}
              height={40}
              className="rounded-lg animate-pulse"
            />
            <h1 className="text-2xl font-black font-[family-name:var(--font-montserrat)]">Harvest Lending</h1>
          </div>
          <nav
            className={`hidden md:flex items-center space-x-6 transition-all duration-700 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <a
              href="#services"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#testimonials"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group"
            >
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-105 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button
              variant="secondary"
              className="bg-blue-600 hover:bg-blue-500 text-white hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-slate-300/10 rounded-full animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div className="absolute top-1/3 left-1/3 animate-float">
            <DollarSign className="h-8 w-8 text-blue-400/30" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: "1.5s" }}>
            <TrendingUp className="h-6 w-6 text-slate-500/30" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge
            className={`mb-6 bg-blue-600 text-white border-blue-400/20 transition-all duration-1000 delay-500 animate-bounce ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            ✨ Transforming small business funding Since 2015
          </Badge>
          <h2
            className={`text-4xl lg:text-6xl font-black font-[family-name:var(--font-montserrat)] text-gray-800 mb-6 text-balance transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Developing relationships and solutions for the{" "}
            <span className="text-blue-600 animate-pulse">modern-day business owner</span>
          </h2>
          <p
            className={`text-xl text-gray-600 font-[family-name:var(--font-open-sans)] mb-8 max-w-3xl mx-auto text-pretty transition-all duration-1000 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            At Harvest Lending, Our mission is to empower business owners to achieve their unique financial goals by
            providing comprehensive, tailored financial solutions. We strive to be the trusted partner that navigates
            the complexities of financial services.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Get Pre-Approved
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate Rates
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">{counters.satisfaction}%</div>
              <div className="text-slate-200">Client Success Rate</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-slate-200">Average Time to Funding</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold mb-2">{counters.funded}M+</div>
              <div className="text-slate-200">Total Capital Secured</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-gray-800 mb-4">
              Are You Struggling With These Business Challenges?
            </h3>
            <p className="text-gray-600 font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto">
              Real problems that business owners face every day - and how we solve them
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Low Credit Score",
                description:
                  "Getting told 'no' by banks like it's your fault you kept the business alive during a pandemic",
                index: 0,
                color: "red-500",
              },
              {
                icon: DollarSign,
                title: "Cash Flow Crunch",
                description: "Sales are booming, but your account balance still feels like a bad joke",
                index: 1,
                color: "orange-500",
              },
              {
                icon: Clock,
                title: "Denied by the Bank",
                description: "Explaining your business model to a banker who's never owned one",
                index: 2,
                color: "yellow-500",
              },
              {
                icon: TrendingUp,
                title: "Too Fast for the System",
                description: "You're scaling fast but banks move at the speed of paperwork",
                index: 3,
                color: "blue-500",
              },
            ].map(({ icon: Icon, title, description, index, color }) => (
              <Card
                key={index}
                className={`border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:rotate-1 ${hoveredCard === index ? `border-${color} shadow-lg` : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${hoveredCard === index ? "bg-slate-200 scale-110 rotate-12" : ""}`}
                  >
                    <Icon
                      className={`h-6 w-6 text-${color} transition-all duration-300 ${hoveredCard === index ? "scale-110" : ""}`}
                    />
                  </div>
                  <CardTitle className="font-[family-name:var(--font-montserrat)] text-gray-800">{title}</CardTitle>
                  <CardDescription className="font-[family-name:var(--font-open-sans)] text-gray-600">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-gray-800 mb-4">
              Transform Your Business With Our Proven System
            </h3>
            <p className="text-gray-600 font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto">
              We fund businesses banks won't touch. If you're earning, you're eligible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle,
                title: "Low Credit? No Problem",
                description: "We fund businesses banks won't touch. If you're earning, you're eligible.",
                index: 0,
                color: "blue-500",
              },
              {
                icon: Clock,
                title: "Fast Turnaround Times",
                description: "Receive funding in as little as 24 hours. Because opportunity doesn't wait.",
                index: 1,
                color: "blue-600",
              },
              {
                icon: DollarSign,
                title: "Revenue-Based Funding",
                description: "Get approved based on your daily sales not your credit score or paperwork pile.",
                index: 2,
                color: "blue-700",
              },
              {
                icon: Users,
                title: "Flexible Repayment Options",
                description: "Reasonable payback through the system, no pressure.",
                index: 3,
                color: "blue-800",
              },
            ].map(({ icon: Icon, title, description, index, color }) => (
              <Card
                key={index}
                className={`border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:rotate-1 ${hoveredCard === index ? `border-${color} shadow-lg` : ""}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${hoveredCard === index ? "bg-blue-200 scale-110 rotate-12" : ""}`}
                  >
                    <Icon
                      className={`h-6 w-6 text-${color} transition-all duration-300 ${hoveredCard === index ? "scale-110" : ""}`}
                    />
                  </div>
                  <CardTitle className="font-[family-name:var(--font-montserrat)] text-gray-800">{title}</CardTitle>
                  <CardDescription className="font-[family-name:var(--font-open-sans)] text-gray-600">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-gray-800 mb-4">
              Comprehensive Business Funding Solutions
            </h3>
            <p className="text-gray-600 font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto">
              Whether you're expanding, overcoming cash flow gaps, or recovering from a bank denial, We have the
              expertise and capital to move your business forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: "SBA Funding", rate: "Low rates", amount: "Long terms", color: "blue-500" },
              {
                icon: Globe,
                title: "Equipment Financing",
                rate: "Flexible",
                amount: "New machinery",
                color: "blue-600",
              },
              {
                icon: TrendingUp,
                title: "Merchant Cash Advance",
                rate: "Immediate",
                amount: "Working capital",
                color: "blue-700",
              },
              { icon: Zap, title: "Business Growth", rate: "Revenue", amount: "Up to $500K", color: "blue-800" },
            ].map(({ icon: Icon, title, rate, amount, color }, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 bg-white border-blue-200"
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-blue-200`}
                  >
                    <Icon className={`h-8 w-8 text-${color}`} />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{title}</h4>
                  <div className="text-lg font-bold text-blue-600 mb-1">{rate}</div>
                  <div className="text-sm text-gray-500">{amount}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-gray-800 mb-4">
              Real People, Real Results, Real Transformations
            </h3>
            <p className="text-gray-600 font-[family-name:var(--font-open-sans)]">
              See how our clients have achieved remarkable business breakthroughs and life-changing results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "I was struggling to cover payroll and take on new contracts. Within 48 hours of working with Harvest Lending, we secured $175K in funding. It saved my business and let us scale faster than ever.",
                name: "Sarah Martinez",
                role: "CEO - Engineering / Manufacturing, Wyoming",
                delay: "0s",
              },
              {
                text: "Traditional banks kept turning us down because of our industry. Harvest Lending came through with $60K in less than 2 days. We used it to launch a new product line and double our monthly revenue.",
                name: "David Chen",
                role: "COO - Logistics, Utah",
                delay: "0.2s",
              },
              {
                text: "Cash flow was tight after a slow quarter, and we needed funds fast to keep operations running. Harvest Lending approved us within 24 hours and funded $40K by the next morning.",
                name: "Lisa Thompson",
                role: "CIO - Blend Coffee, New York",
                delay: "0.4s",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-all duration-500 hover:-translate-y-1 hover:rotate-1 animate-fade-in-up border-blue-200"
                style={{ animationDelay: testimonial.delay }}
              >
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-blue-500 text-blue-500 animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 font-[family-name:var(--font-open-sans)] mb-4">"{testimonial.text}"</p>
                  <div className="font-semibold font-[family-name:var(--font-montserrat)] text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-blue-600">{testimonial.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-black mb-4">
              Meet Your Business Catalyst
            </h3>
            <p className="text-gray-900 font-[family-name:var(--font-open-sans)] max-w-2xl mx-auto">
              Hi, I'm Thomas Chillemi - Your Business Transformation Expert
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-blue-200 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg hover:scale-105 transition-all duration-300">
                      TC
                    </div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h4 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-gray-800 mb-2">
                      Thomas Chillemi
                    </h4>
                    <div className="text-blue-600 font-semibold mb-4 flex items-center justify-center lg:justify-start gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Business Development Executive
                    </div>

                    <p className="text-gray-600 font-[family-name:var(--font-open-sans)] mb-6 leading-relaxed">
                      With over 15 years of experience in small business funding and financial strategy, I've helped
                      over 1,000 entrepreneurs secure fast, flexible capital to grow, recover, and scale. Our mission is
                      simple: To help you access the funding you deserve without the delays, denials, or red tape.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-all duration-300">
                        <div className="text-2xl font-bold text-blue-600 mb-1">1,000+</div>
                        <div className="text-sm text-gray-600">Clients Served</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-all duration-300">
                        <div className="text-2xl font-bold text-blue-600 mb-1">$50M+</div>
                        <div className="text-sm text-gray-600">Funded</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg text-center hover:bg-blue-100 transition-all duration-300">
                        <div className="text-2xl font-bold text-blue-600 mb-1">92%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <Button className="bg-blue-600 hover:bg-blue-500 text-white hover:scale-105 transition-all duration-300 group">
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Thomas
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-300 bg-transparent"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Schedule Meeting
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"></div>
          <div
            className="absolute top-10 right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-bounce"
            style={{ animationDuration: "4s" }}
          ></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 animate-float">
            <CheckCircle className="h-6 w-6 text-blue-300/30" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-float" style={{ animationDelay: "2s" }}>
            <Star className="h-8 w-8 text-blue-400/20" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl font-bold font-[family-name:var(--font-montserrat)] mb-4 animate-fade-in-up">
            Ready to Break Through Your Business Expansion Barriers?
          </h3>
          <p
            className="text-xl font-[family-name:var(--font-open-sans)] mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Don't let another year pass feeling stuck for capital. Book your free 30-minute strategy call today and
            discover exactly what's holding you back and how to overcome it.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold hover:scale-105 transition-all duration-300 group shadow-lg hover:shadow-xl"
            >
              Start Your Application
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-800 bg-transparent hover:scale-105 transition-all duration-300 group"
            >
              <Phone className="h-4 w-4 mr-2" />
              Speak with an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/harvest-logo.png"
                  alt="Harvest Lending Logo"
                  width={32}
                  height={32}
                  className="rounded-lg animate-pulse"
                />
                <h4 className="text-lg font-bold font-[family-name:var(--font-montserrat)]">Harvest Lending</h4>
              </div>
              <p className="text-gray-300 font-[family-name:var(--font-open-sans)] text-sm mb-4">
                Your trusted partner for business funding solutions. Empowering entrepreneurs since 2015 with fast,
                flexible capital.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Us
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </Button>
              </div>
            </div>

            <div>
              <h5 className="font-semibold font-[family-name:var(--font-montserrat)] mb-3 text-blue-400">Services</h5>
              <ul className="space-y-2 text-sm font-[family-name:var(--font-open-sans)]">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    SBA Funding
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Equipment Financing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Merchant Cash Advance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Business Growth
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold font-[family-name:var(--font-montserrat)] mb-3 text-blue-400">Company</h5>
              <ul className="space-y-2 text-sm font-[family-name:var(--font-open-sans)]">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-semibold font-[family-name:var(--font-montserrat)] mb-3 text-blue-400">Legal</h5>
              <ul className="space-y-2 text-sm font-[family-name:var(--font-open-sans)]">
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm font-[family-name:var(--font-open-sans)]">
              © 2024 Harvest Lending. All rights reserved. NMLS ID: 123456 | Equal Housing Lender
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
