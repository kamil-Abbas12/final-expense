import Image from "next/image";
import Link from "next/link";

// app/privacy-policy/page.tsx
export const metadata = {
  title: "Privacy Policy | TopDog Final Expense",
  description:
    "Learn how TopDog Final Expense collects, uses, and protects your personal information, including your state privacy rights.",
  alternates: {
    canonical: "https://www.finalexpense.topdoglead.com/privacy-policy",
  },
};

const faqs = [
  {
    q: "Does TopDog Final Expense sell my personal information?",
    a: "No. We do not sell your personal information to unrelated third parties. We share your information only with licensed insurance carriers and agents to provide you with a quote, and with service providers who help us operate our website.",
  },
  {
    q: "Why do I need to provide health information to get a quote?",
    a: "Final expense insurance premiums and eligibility are based in part on your health history. Sharing general health information allows the licensed agent you're matched with to give you a more accurate quote, but you are never required to provide more detail than you're comfortable with online.",
  },
  {
    q: "Can I stop receiving calls or texts after requesting a quote?",
    a: "Yes. You can opt out of further communications at any time by replying STOP to any text message, asking the agent who contacts you to remove your information, or calling us directly at 866-963-5898.",
  },
  {
    q: "How do I request a copy or deletion of my personal information?",
    a: "You can request access to, a copy of, or deletion of your personal information by contacting us at 866-963-5898 or through the contact details on this page. We will respond within the timeframe required by applicable law.",
  },
  {
    q: "Is TopDog Final Expense an insurance company?",
    a: "No. TopDog Final Expense is a marketing platform that connects consumers with licensed, independent insurance agents and carriers. We do not underwrite policies or make coverage decisions ourselves.",
  },
  {
    q: "Does this site use cookies or tracking technology?",
    a: "Yes. We use cookies and similar technologies to operate the site, understand how visitors use it, and measure the performance of our marketing. You can manage or disable cookies through your browser settings.",
  },
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 18, 2026";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <main className="bg-white dark:bg-gray-950 px-5 py-16">
      {/* FAQ structured data for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <Image
              src="/finalexpense.jpg"
              alt="TopDog Final Expense logo"
              width={100}
              height={80}
            />
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Table of contents */}
        <nav className="mb-10 rounded-lg border border-gray-100 dark:border-gray-800 p-5 text-sm">
          <p className="font-medium text-gray-900 dark:text-white mb-2">On this page</p>
          <ol className="space-y-1 text-gray-500 dark:text-gray-400 list-decimal pl-5">
            <li><a href="#information-we-collect" className="hover:text-emerald-600 dark:hover:text-emerald-400">Information We Collect</a></li>
            <li><a href="#how-we-use" className="hover:text-emerald-600 dark:hover:text-emerald-400">How We Use Your Information</a></li>
            <li><a href="#sharing" className="hover:text-emerald-600 dark:hover:text-emerald-400">Sharing of Information</a></li>
            <li><a href="#cookies" className="hover:text-emerald-600 dark:hover:text-emerald-400">Cookies &amp; Tracking</a></li>
            <li><a href="#retention" className="hover:text-emerald-600 dark:hover:text-emerald-400">Data Retention</a></li>
            <li><a href="#security" className="hover:text-emerald-600 dark:hover:text-emerald-400">Data Security</a></li>
            <li><a href="#state-rights" className="hover:text-emerald-600 dark:hover:text-emerald-400">Your State Privacy Rights</a></li>
            <li><a href="#choices" className="hover:text-emerald-600 dark:hover:text-emerald-400">Your Choices</a></li>
            <li><a href="#children" className="hover:text-emerald-600 dark:hover:text-emerald-400">Children&rsquo;s Privacy</a></li>
            <li><a href="#third-party-links" className="hover:text-emerald-600 dark:hover:text-emerald-400">Third-Party Links</a></li>
            <li><a href="#changes" className="hover:text-emerald-600 dark:hover:text-emerald-400">Changes to This Policy</a></li>
            <li><a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400">Frequently Asked Questions</a></li>
            <li><a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400">Contact Us</a></li>
          </ol>
        </nav>

        {/* Content */}
        <article className="space-y-10 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          <section>
            <p>
              TopDog Final Expense Insurance (&ldquo;TopDog,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information
              you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or request a quote for final expense insurance coverage,
              and it explains the rights available to you under applicable state privacy laws.
            </p>
          </section>

          <section id="information-we-collect">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              1. Information We Collect
            </h2>
            <p className="mb-2">We may collect the following categories of information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Personal identifiers</span> —
                name, date of birth, gender, phone number, email address, and mailing address.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Health-related information</span>{" "}
                — general health status, tobacco use, or medical history relevant to determining final expense
                insurance eligibility, provided voluntarily by you.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Financial information</span> —
                income range, budget, or payment preferences provided to help match you with appropriate
                coverage.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Beneficiary information</span> —
                if you choose to share it, the name and relationship of the person you intend to name as your
                policy beneficiary.
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">Technical data</span> — IP
                address, browser and device type, pages visited, referral source, and approximate location,
                collected automatically via cookies and similar technologies.
              </li>
            </ul>
            <p className="mt-2">
              We collect this information directly from you when you fill out a quote request form, speak with
              one of our representatives, or interact with our website.
            </p>
          </section>

          <section id="how-we-use">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To generate final expense insurance quotes and match you with a licensed agent or carrier.</li>
              <li>To respond to inquiries and provide customer support.</li>
              <li>To verify your identity and prevent fraud.</li>
              <li>To analyze and improve our website, services, and marketing campaigns.</li>
              <li>To comply with applicable insurance regulations, recordkeeping requirements, and other legal obligations.</li>
              <li>To send you relevant communications about coverage options, which you may opt out of at any time.</li>
            </ul>
          </section>

          <section id="sharing">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3. Sharing of Information
            </h2>
            <p className="mb-2">We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Licensed insurance carriers and independent agents to provide quotes and policy enrollment.</li>
              <li>Service providers who support our website hosting, analytics, email, and customer communications under confidentiality obligations.</li>
              <li>Regulators or government authorities where required by law.</li>
              <li>A successor entity in the event of a merger, acquisition, or sale of business assets.</li>
            </ul>
            <p className="mt-2">
              We do not sell your personal information to unrelated third parties for their own independent
              marketing purposes.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">4. Cookies &amp; Tracking</h2>
            <p>
              Our website uses cookies, pixels, and similar tracking technologies to operate core site features,
              remember your preferences, measure traffic and ad performance, and personalize content. Most
              browsers let you block or delete cookies through their settings; doing so may limit some site
              functionality, such as saving your quote progress.
            </p>
          </section>

          <section id="retention">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">5. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in this
              policy, including providing your quote, complying with insurance recordkeeping and legal
              requirements, and resolving disputes. When information is no longer needed, we take reasonable
              steps to delete or de-identify it.
            </p>
          </section>

          <section id="security">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">6. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards designed to protect your
              personal information from unauthorized access, disclosure, alteration, or destruction. However, no
              method of transmission over the internet or electronic storage is completely secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section id="state-rights">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              7. Your State Privacy Rights
            </h2>
            <p className="mb-2">
              Depending on where you live, you may have additional rights under state privacy laws — including
              the California Consumer Privacy Act (CCPA), Virginia Consumer Data Protection Act (VCDPA),
              Colorado Privacy Act (CPA), Connecticut Data Privacy Act (CTDPA), Utah Consumer Privacy Act (UCPA),
              and similar laws in other states. These rights may include the ability to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Know what personal information we have collected about you and why.</li>
              <li>Request a copy of, or correction to, your personal information.</li>
              <li>Request deletion of your personal information, subject to certain legal exceptions.</li>
              <li>Opt out of the sale or sharing of personal information and of targeted advertising.</li>
              <li>Not be discriminated against for exercising any of these rights.</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us using the information in the &ldquo;Contact Us&rdquo;
              section below. We will verify your request and respond within the timeframe required by your
              state&rsquo;s law.
            </p>
          </section>

          <section id="choices">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">8. Your Choices</h2>
            <p>
              In addition to the rights listed above, you may opt out of marketing calls, texts, or emails at any
              time by following the unsubscribe instructions in our messages, replying STOP to a text, or
              contacting us directly. Opting out of marketing does not affect any insurance policy you may have
              already purchased through a carrier or agent.
            </p>
          </section>

          <section id="children">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              9. Children&rsquo;s Privacy
            </h2>
            <p>
              Our services are intended for individuals 18 years of age or older. We do not knowingly collect
              personal information from children, and we will delete any such information if we become aware of
              it.
            </p>
          </section>

          <section id="third-party-links">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              10. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites, such as carrier sites or payment portals.
              We are not responsible for the privacy practices of those third parties, and we encourage you to
              review their privacy policies before sharing information with them.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal
              requirements. Any changes will be posted on this page with an updated revision date, and material
              changes will be highlighted where required by law.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              12. Frequently Asked Questions
            </h2>
            <div className="space-y-5">
              {faqs.map((item) => (
                <div key={item.q}>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{item.q}</p>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="contact">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">13. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, want to exercise any of the rights described
              above, or want to know more about how we handle your information, please contact us at{" "}
              <a
                href="tel:8669635898"
                className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
              >
                866-963-5898
              </a>
              .
            </p>
          </section>
        </article>

        <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
          <Link
            href="/"
            className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}