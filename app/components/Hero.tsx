export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/30 pt-20 pb-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-emerald-100/50 dark:bg-emerald-900/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-teal-100/40 dark:bg-teal-900/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200
           dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 px-4 py-1.5 text-md font-medium
            text-emerald-700 dark:text-emerald-400 bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-base font-medium text-white">
            <span className="h-1.5 w-1.5 rounded-full font-bold bg-green-800 text-white animate-pulse" />
            Hassle-Free Sign-Up . Instant Benefits          </div>

          <h1 className="mb-5 text-4xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Protect Your Legacy from {" "}
            <span className="text-emerald-600 dark:text-emerald-400">
 $8,300+ Farewell Costs
          </span>
          </h1>

          <p className="mb-8 text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
        Final expense insurance offers certainty-stable premiums, guaranteed coverage, and fast claim support.  
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#quote-form"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl
               bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-base font-medium text-white transition-all shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5"
            >
              Get Your Free Quote
            </a>
            <a
              href="tel:8669635898"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-300 transition-all"
            >
              Call 866-963-5898
            </a>
          </div>

          {/* Social proof strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              A+ Rated Insurance Partners
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              25+ Years Serving Families
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 111.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
             Licensed & Trusted Nationwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}