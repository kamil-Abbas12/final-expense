export default function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 py-12 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-3 flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-emerald-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">FE</span>
              </div>
              <span className="text-base font-semibold text-gray-900 dark:text-white">
                TopDog<span className="text-emerald-600">FE</span>
              </span>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
              Licensed final expense insurance specialists helping families protect against
              end-of-life costs for over 25 years.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            <a href="#coverage" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Coverage</a>
            <a href="#faq" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">FAQ</a>
            <a href="#benefits" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Benefits</a>
            <a href="#quote-form" className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Get a Quote</a>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <p className="mb-1 font-medium text-gray-900 dark:text-white">Speak with an Agent</p>
            <a
              href="tel:8669635898"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
            >
              866-963-5898
            </a>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">Mon–Fri, 8am–6pm EST</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 dark:border-gray-800 pt-6 text-xs text-gray-400 dark:text-gray-600">
          <p>
            © {new Date().getFullYear()} TopDog Final Expense Insurance. All rights reserved.
            Coverage availability varies by state. This is not a complete description of benefits.
          </p>
        </div>
      </div>
    </footer>
  );
}