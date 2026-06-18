import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | TopDog Final Expense",
  description:
    "Read the terms and conditions governing your use of the TopDog Final Expense website and quote services.",
};

const faqs = [
  {
    q: "Do I have to buy insurance after requesting a quote?",
    a: "No. Requesting a quote through TopDog Final Expense is free and does not obligate you to purchase any policy. You decide whether to move forward with a licensed agent or carrier.",
  },
  {
    q: "Will I be charged for getting a quote?",
    a: "No. There is no charge to use our website or to receive a final expense insurance quote. Any cost only applies if you choose to purchase a policy from a carrier.",
  },
  {
    q: "How does TopDog Final Expense make money if quotes are free?",
    a: "We are compensated by the licensed insurance carriers and agents we connect consumers with, similar to how a referral service operates. This does not affect the price you're quoted.",
  },
  {
    q: "Is TopDog Final Expense the company that will issue my policy?",
    a: "No. We are a marketing platform, not an insurance carrier. Your policy, if you choose to purchase one, is issued and serviced by a licensed insurance carrier through a licensed agent.",
  },
  {
    q: "What states does TopDog Final Expense serve?",
    a: "We work with licensed agents and carriers across the United States, though specific product availability can vary by state and is confirmed with you directly by the agent you're matched with.",
  },
  {
    q: "How accurate are the quotes I receive?",
    a: "Quotes provided through our website are estimates based on the information you provide. Final premiums, underwriting decisions, and coverage terms are determined by the insurance carrier after a full application review.",
  },
];

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Table of contents */}
        <nav className="mb-10 rounded-lg border border-gray-100 dark:border-gray-800 p-5 text-sm">
          <p className="font-medium text-gray-900 dark:text-white mb-2">On this page</p>
          <ol className="space-y-1 text-gray-500 dark:text-gray-400 list-decimal pl-5">
            <li><a href="#eligibility" className="hover:text-emerald-600 dark:hover:text-emerald-400">Eligibility</a></li>
            <li><a href="#not-a-carrier" className="hover:text-emerald-600 dark:hover:text-emerald-400">Not an Insurance Carrier</a></li>
            <li><a href="#quotes" className="hover:text-emerald-600 dark:hover:text-emerald-400">Quotes and Accuracy</a></li>
            <li><a href="#use-of-site" className="hover:text-emerald-600 dark:hover:text-emerald-400">Use of the Website</a></li>
            <li><a href="#consent" className="hover:text-emerald-600 dark:hover:text-emerald-400">Consent to Be Contacted</a></li>
            <li><a href="#ip" className="hover:text-emerald-600 dark:hover:text-emerald-400">Intellectual Property</a></li>
            <li><a href="#third-party" className="hover:text-emerald-600 dark:hover:text-emerald-400">Third-Party Links &amp; Services</a></li>
            <li><a href="#disclaimer" className="hover:text-emerald-600 dark:hover:text-emerald-400">Disclaimer of Warranties</a></li>
            <li><a href="#liability" className="hover:text-emerald-600 dark:hover:text-emerald-400">Limitation of Liability</a></li>
            <li><a href="#indemnification" className="hover:text-emerald-600 dark:hover:text-emerald-400">Indemnification</a></li>
            <li><a href="#disputes" className="hover:text-emerald-600 dark:hover:text-emerald-400">Dispute Resolution</a></li>
            <li><a href="#general" className="hover:text-emerald-600 dark:hover:text-emerald-400">General Terms</a></li>
            <li><a href="#faq" className="hover:text-emerald-600 dark:hover:text-emerald-400">Frequently Asked Questions</a></li>
            <li><a href="#contact" className="hover:text-emerald-600 dark:hover:text-emerald-400">Contact Us</a></li>
          </ol>
        </nav>

        {/* Content */}
        <article className="space-y-10 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          <section>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the TopDog Final
              Expense website and related quote-matching services (collectively, the &ldquo;Services&rdquo;). By
              accessing or using the Services, you agree to be bound by these Terms. If you do not agree, please
              do not use the Services.
            </p>
          </section>

          <section id="eligibility">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">1. Eligibility</h2>
            <p>
              You must be at least 18 years of age and legally capable of entering into binding contracts to use
              our Services and to request an insurance quote. By using the Services, you represent that you meet
              these requirements.
            </p>
          </section>

          <section id="not-a-carrier">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              2. Not an Insurance Carrier
            </h2>
            <p>
              TopDog Final Expense is a marketing and lead-generation platform. We are not an insurance company,
              and we do not underwrite, issue, administer, or guarantee any insurance policy. When you submit a
              request through our website, we match you with a licensed, independent insurance agent or carrier
              who is solely responsible for providing accurate quotes, conducting underwriting, and issuing any
              policy. Any policy you purchase is a contract between you and the issuing carrier, not TopDog
              Final Expense.
            </p>
          </section>

          <section id="quotes">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              3. Quotes and Accuracy
            </h2>
            <p>
              Quotes generated through our website are estimates based on the information you provide and are
              not a guarantee of coverage, price, or approval. Final premiums and eligibility are determined by
              the insurance carrier after formal underwriting, which may consider factors not captured in your
              initial submission.
            </p>
          </section>

          <section id="use-of-site">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              4. Use of the Website
            </h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>You agree to provide accurate and truthful information when requesting a quote.</li>
              <li>
                You agree not to use the Services for any unlawful purpose or in any way that could damage,
                disable, overburden, or impair the website or its underlying infrastructure.
              </li>
              <li>
                You agree not to attempt to gain unauthorized access to any portion of the Services, related
                systems, or networks.
              </li>
              <li>
                You agree not to scrape, copy, or republish content from this website without our prior written
                consent.
              </li>
            </ul>
          </section>

          <section id="consent">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              5. Consent to Be Contacted
            </h2>
            <p>
              By submitting your information through our website, you consent to be contacted by TopDog Final
              Expense and/or its partnered licensed insurance agents via phone, text message, or email regarding
              final expense insurance products, including by automated dialing technology, even if your number
              is listed on a federal or state Do Not Call registry. Consent is not a condition of purchasing any
              product or service, and you may revoke it at any time as described in our Privacy Policy.
            </p>
          </section>

          <section id="ip">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              6. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, and design, is the property of
              TopDog Final Expense or its licensors and is protected by applicable intellectual property laws.
              You may not reproduce, distribute, or create derivative works from this content without our prior
              written consent.
            </p>
          </section>

          <section id="third-party">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              7. Third-Party Links &amp; Services
            </h2>
            <p>
              Our website may link to or integrate with third-party websites and services, including insurance
              carrier sites. We do not control and are not responsible for the content, accuracy, or practices
              of those third parties. Your use of any third-party site is governed by that site&rsquo;s own
              terms and policies.
            </p>
          </section>

          <section id="disclaimer">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              8. Disclaimer of Warranties
            </h2>
            <p>
              The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without
              warranties of any kind, either express or implied, including warranties of merchantability,
              fitness for a particular purpose, or non-infringement. We do not guarantee that the website will be
              uninterrupted, secure, or error-free, or that any quote will result in approved coverage.
            </p>
          </section>

          <section id="liability">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, TopDog Final Expense shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising out of or related to your use of
              the Services, including damages related to any insurance product purchased through a third-party
              carrier or agent.
            </p>
          </section>

          <section id="indemnification">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              10. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold harmless TopDog Final Expense and its affiliates from any claims,
              losses, or damages arising from your misuse of the Services or your violation of these Terms.
            </p>
          </section>

          <section id="disputes">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              11. Dispute Resolution
            </h2>
            <p>
              Any dispute arising from these Terms or your use of the Services shall first be addressed through
              good-faith informal negotiation. If a dispute cannot be resolved informally, it will be governed by
              the laws described in the General Terms section below.
            </p>
          </section>

          <section id="general">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">12. General Terms</h2>
            <p className="mb-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">Governing Law:</span> These Terms
              are governed by the laws of the state in which TopDog Final Expense operates, without regard to
              conflict-of-law principles.
            </p>
            <p className="mb-2">
              <span className="font-medium text-gray-800 dark:text-gray-200">Severability:</span> If any
              provision of these Terms is found unenforceable, the remaining provisions will continue in full
              force and effect.
            </p>
            <p>
              <span className="font-medium text-gray-800 dark:text-gray-200">Changes to These Terms:</span> We
              may revise these Terms from time to time. Continued use of the Services after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              13. Frequently Asked Questions
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
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">14. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
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