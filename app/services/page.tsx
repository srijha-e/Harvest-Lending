import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, DollarSign, TrendingUp, Truck, Building2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Services | Harvest Lending",
  description:
    "Business financing solutions from Harvest Lending Inc. — unsecured business loans, merchant cash advances, equipment financing, and asset-based lending.",
}

const offerings = [
  {
    icon: DollarSign,
    title: "Unsecured Business Loan",
    paragraphs: [
      "An unsecured business loan is a loan from a lender that does not need collateral from a business or a business owner. The decision gets based upon the creditworthiness of the applicant.",
    ],
  },
  {
    icon: TrendingUp,
    title: "Merchant Cash Advance",
    paragraphs: [
      "A merchant cash advance (MCA) is a cash advance based on the credit sales deposited into the business' account. A business owner applies for the cash advance, and the funds get depositing into the business account. Sometimes as quickly as 24 hours after being approved.",
    ],
  },
  {
    icon: Truck,
    title: "Equipment Leasing / Equipment Financing",
    paragraphs: [
      "Equipment financing refers to a loan/funds used to purchase business-related equipment; the equipment needs being different for each type of business. Equipment loans provide for payment plans that include interest and principal over a fixed term.",
    ],
  },
  {
    icon: Building2,
    title: "Asset-Based Lending",
    paragraphs: [
      "Asset-Based Lending/Loans (ABL) refers to a type of business loan secured by collateral. In asset-based lending, the loan granted by the lender is collateralized with company assets on an ongoing basis to cover expenses or investments as needed.",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-amber-900 text-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-amber-900/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/images/harvest-logo.png"
              alt="Harvest Lending Logo"
              width={56}
              height={56}
              className="rounded-lg hover:animate-bounce transition-all duration-300"
            />
            <h1 className="text-2xl font-black font-[family-name:var(--font-montserrat)] hover:text-amber-300 transition-colors duration-300">
              Harvest Lending
            </h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="font-[family-name:var(--font-open-sans)] text-amber-300 transition-all duration-300 hover:scale-110"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-[family-name:var(--font-open-sans)] hover:text-amber-300 transition-all duration-300 hover:scale-110"
            >
              Contact
            </Link>
            <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="secondary"
                className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-110 transition-all duration-300 group shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
          </nav>
        </div>
      </header>

      {/* Our Services hero */}
      <section className="bg-gradient-to-br from-amber-50 to-yellow-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black font-[family-name:var(--font-montserrat)] text-amber-900 mb-5">
            Our Services
          </h2>
          <p className="text-lg text-stone-600 font-[family-name:var(--font-open-sans)] max-w-3xl mx-auto">
            Since each business has its unique challenges and growth opportunity, we help our clients find a financial
            solution and provide information on the cutting-edge forefront of what is happening in industries across
            America.
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] text-amber-900 mb-12 text-center">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {offerings.map(({ icon: Icon, title, paragraphs }, index) => (
              <Card
                key={index}
                className="border-amber-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <CardContent className="pt-8">
                  <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="h-7 w-7 text-amber-600" />
                  </div>
                  <h4 className="text-xl font-bold text-amber-700 mb-4 font-[family-name:var(--font-montserrat)]">
                    {title}
                  </h4>
                  <div className="space-y-3 text-stone-600 font-[family-name:var(--font-open-sans)] leading-relaxed">
                    {paragraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold font-[family-name:var(--font-montserrat)] mb-4">
            Ready to find your financial solution?
          </h3>
          <p className="text-amber-100 font-[family-name:var(--font-open-sans)] mb-8 max-w-2xl mx-auto">
            Apply today and our team will help match you with the right funding for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://application.croccrm.com/" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-white hover:scale-105 transition-all duration-300 group shadow-lg"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-amber-900 bg-transparent hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
