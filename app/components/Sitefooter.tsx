import Image from "next/image";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-12 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2">
              <Image
                src="/finalexpense.png"
                alt="TopDog Final Expense logo"
                width={100}
                height={80}
                className="dark:invert dark:brightness-0 dark:contrast-200"
              />
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
              Trusted final expense insurance specialists dedicated to protecting families from the burden of
              end-of-life costs for over 25 years.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <a
              href="#coverage"
              className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Coverage
            </a>
            <a
              href="#faq"
              className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#benefits"
              className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#quote-form"
              className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/privacy-policy"
              className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <p className="mb-1 font-medium text-gray-900 dark:text-white">Speak with an Agent</p>
            <a
              href="tel:8669635898"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium text-base"
            >
              866-963-5898
            </a>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">Mon–Fri, 9am–6pm EST</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 dark:border-gray-800 pt-6 text-xs text-gray-400 dark:text-gray-600">
          <p>
            &copy; {year} TopDog Final Expense Insurance. All rights reserved. Coverage availability varies by
            state. This is not a complete description of benefits. Licensed in all 50 states.
          </p>
        </div>
      </div>
    </footer>
  );
}