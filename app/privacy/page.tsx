import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Harvest Lending",
  description: "How Harvest Lending Inc. collects, uses, protects, and handles your personally identifiable information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-800 text-white shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-slate-800/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="/images/harvest-logo.png"
              alt="Harvest Lending Logo"
              width={40}
              height={40}
              className="rounded-lg hover:animate-bounce transition-all duration-300"
            />
            <h1 className="text-2xl font-black font-[family-name:var(--font-montserrat)] hover:text-blue-300 transition-colors duration-300">
              Harvest Lending
            </h1>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="font-[family-name:var(--font-open-sans)] hover:text-blue-300 transition-all duration-300 hover:scale-110"
            >
              Contact
            </Link>
            <Button
              variant="secondary"
              className="bg-blue-600 hover:bg-blue-500 text-white hover:scale-110 transition-all duration-300 group shadow-lg"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black font-[family-name:var(--font-montserrat)] text-slate-800 mb-3">
            Privacy Policy
          </h2>
          <p className="text-slate-600 font-[family-name:var(--font-open-sans)]">HARVEST LENDING INC.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto font-[family-name:var(--font-open-sans)] text-slate-600 leading-relaxed">
            <p className="mb-4">
              This privacy policy has been compiled to better serve those who are concerned with how their
              &lsquo;Personally identifiable information&rsquo; (PII) is being used online. PII, as used in US privacy law
              and information security, is information that can be used on its own or with other information to identify,
              contact, or locate a single person, or to identify an individual in context. Please read our privacy policy
              carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally
              Identifiable Information in accordance with our website.
            </p>

            <blockquote className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg mb-4 text-slate-700">
              &ldquo;No mobile information will be shared with third parties/affiliates for marketing/promotional
              purposes. Information sharing to subcontractors in support services, such as customer service, is permitted.
              All other use case categories exclude text messaging originator opt-in data and consent; this information
              will not be shared with any third parties.&rdquo;
            </blockquote>

            <p className="mb-8">
              Users can opt in by visiting https://harvestlending.com/contact-us and adding their phone number. They then
              check a box agreeing to receive text messages from HARVEST LENDING INC.. Additionally, end users can also
              opt-in by texting HELP.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              1. Information We Collect
            </h3>
            <p className="mb-4">We collect the following types of information:</p>
            <p className="mb-2 font-semibold text-slate-800">Personal Information:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Name, email address, phone number, and physical address</li>
              <li>Payment information when you make a purchase or request a quote</li>
              <li>Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
            </ul>
            <p className="mb-2 font-semibold text-slate-800">Non-Personal Information:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>IP address, browser type, device information</li>
              <li>Website usage patterns and analytics</li>
              <li>Cookies and similar technologies</li>
            </ul>
            <p className="mb-2 font-semibold text-slate-800">Customer Communication:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Records of inquiries and service requests</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              2. How We Use Your Information
            </h3>
            <p className="mb-2">We use collected data for:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Providing and improving our Business Financing Consulting services</li>
              <li>Processing transactions and payments</li>
              <li>Communicating with you about your inquiries, appointments, and promotions</li>
              <li>Enhancing website functionality and user experience</li>
              <li>Ensuring security and fraud prevention</li>
              <li>Maintaining records of your communication preferences and consent</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              3. SMS Messaging &amp; Compliance
            </h3>
            <p className="mb-2 font-semibold text-slate-800">Text Message Program Terms &amp; Conditions</p>
            <p className="mb-4">
              By opting into our SMS messaging services, you agree to receive text messages related to our services,
              including appointment reminders, customer support, and important updates.
            </p>
            <p className="mb-2 font-semibold text-slate-800">Opt-In &amp; Consent:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>You will only receive messages if you have explicitly opted in</li>
              <li>We maintain timestamped records of all opt-in actions</li>
              <li>We comply with the Telephone Consumer Protection Act (TCPA) and all applicable laws</li>
            </ul>
            <p className="mb-2 font-semibold text-slate-800">Opt-Out Instructions:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>You can cancel SMS notifications at any time by replying &ldquo;STOP&rdquo; to +1 212-287-5263</li>
              <li>You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
              <li>All opt-out requests are processed within 24 hours</li>
            </ul>
            <p className="mb-2 font-semibold text-slate-800">Message Frequency &amp; Content:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Message frequency varies based on your interactions with our business</li>
              <li>You may receive up to 4 messages per month</li>
              <li>Messages will be directly related to the services you have requested</li>
              <li>We do not send promotional content without specific consent</li>
            </ul>
            <p className="mb-2 font-semibold text-slate-800">Help &amp; Support:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Reply &ldquo;HELP&rdquo; to +1 212-287-5263 for assistance or contact us at team@harvestlending.com</li>
              <li>Customer support is available during regular business hours</li>
            </ul>
            <p className="mb-2 font-semibold text-slate-800">Carrier Information:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Standard message and data rates may apply</li>
              <li>Carriers are not liable for delayed or undelivered messages</li>
              <li>Supported carriers include AT&amp;T, Verizon, T-Mobile, Sprint, and most regional carriers</li>
            </ul>
            <p className="mb-2 font-semibold text-slate-800">SMS Data Protection Statement</p>
            <p className="mb-4">
              Your SMS opt-in data and consent records are never shared with third parties.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              4. Information is NEVER SHARED
            </h3>
            <p className="mb-4">We do not sell, rent, or trade personal information.</p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              5. Data Security
            </h3>
            <p className="mb-2">
              We implement and maintain reasonable security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Encryption of sensitive data in transit and at rest</li>
              <li>Secure access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
              <li>Breach notification protocols in accordance with applicable laws</li>
              <li>Secure backup systems and disaster recovery procedures</li>
            </ul>
            <p className="mb-4">
              Despite these measures, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              6. Cookies &amp; Tracking Technologies
            </h3>
            <p className="mb-2">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Analyze site traffic and user behavior</li>
              <li>Remember your preferences</li>
              <li>Improve website functionality and user experience</li>
              <li>Measure the effectiveness of our services</li>
            </ul>
            <p className="mb-4">
              You may control cookies through your browser settings. Disabling cookies may limit your ability to use
              certain features of our website.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              7. Your Rights &amp; Choices
            </h3>
            <p className="mb-2">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing emails by clicking &ldquo;unsubscribe&rdquo;</li>
              <li>Opt-out of SMS messages by replying &ldquo;STOP&rdquo; to +1 212-287-5263</li>
              <li>Request information on how we process your data</li>
              <li>Withdraw consent at any time for future communications</li>
              <li>Lodge a complaint with a supervisory authority if you believe your rights have been violated</li>
            </ul>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              8. Third-Party Links
            </h3>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices
              and encourage you to review their policies. This privacy policy applies only to information collected by
              HARVEST LENDING INC..
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              9. Changes to This Privacy Policy
            </h3>
            <p className="mb-4">
              We may update this policy periodically. The latest version will always be available on our website with the
              effective date. For significant changes, we will notify you by email or through a notice on our website.
            </p>

            <h3 className="text-2xl font-bold font-[family-name:var(--font-montserrat)] text-slate-800 mt-10 mb-2">
              10. Contact Us
            </h3>
            <p className="mb-2">
              If you have questions about this Privacy Policy or how your information is handled, contact us at:
            </p>
            <ul className="list-none pl-0 space-y-1 mb-8">
              <li className="font-semibold text-slate-800">HARVEST LENDING INC.</li>
              <li>📞 Phone: +1 212-287-5263</li>
              <li>✉️ Email: team@harvestlending.com</li>
              <li>🌐 Website: https://harvestlending.com</li>
            </ul>

            <div className="border-t border-slate-200 pt-6">
              <p className="mb-4">
                <span className="font-semibold text-slate-800">Privacy Policy:</span> Your privacy is very important to
                us. Your information will be used to contact you and provide assistance with your Business Financing
                Consulting. We will not sell, rent, spam, or otherwise use this information for any other purpose.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Back to home */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Link href="/">
            <Button
              variant="secondary"
              className="bg-blue-600 hover:bg-blue-500 text-white hover:scale-105 transition-all duration-300 group shadow-lg"
            >
              Back to Home
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
