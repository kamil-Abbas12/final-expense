"use client";

type Props = {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function QuoteForm({ onSubmit }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    } else {
      alert("Thank you! An agent will call you shortly.");
    }
  };

  return (
    <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-6 text-slate-800 md:p-8">
      <h3 className="mb-2 text-center text-2xl font-medium text-slate-800">
        Final Expense Quote Request Form
      </h3>
      <p className="mb-6 text-center text-sm text-slate-500">
        * Indicates required question
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="mb-1 block text-sm font-medium">
              First Name *
            </label>
            <input
              id="firstName"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="mb-1 block text-sm font-medium">
              Last Name *
            </label>
            <input
              id="lastName"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none ring-0 transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
            />
          </div>
        </div>

        <div>
          <label htmlFor="age" className="mb-1 block text-sm font-medium">
            Age *
          </label>
          <input
            id="age"
            type="number"
            min={18}
            max={120}
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label htmlFor="address" className="mb-1 block text-sm font-medium">
            Address *
          </label>
          <input
            id="address"
            type="text"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium">
            Email *
          </label>
          <input
            id="email"
            type="email"
            required
            className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <label className="flex cursor-pointer items-start gap-3 pt-2 text-sm leading-6 text-slate-500">
          <input
            id="tcpa"
            type="checkbox"
            required
            className="mt-1 h-4 w-4 accent-cyan-600"
          />
          <span>
            By clicking Get Quote, I agree to the Terms of Service and Privacy
            Policy and authorize Final Expense insurance companies, their agents
            and marketing partners to contact me about Final Expense insurance
            and other non-insurance offers by telephone calls and text messages
            to the number I provided above. I agree to receive telemarketing
            calls and pre-recorded messages via an autodialed phone system, even
            if my telephone number is a mobile number that is currently listed
            on any state, federal or corporate &quot;Do Not Call&quot; list. I
            understand that I may revoke my consent at any time and that my
            consent is not a condition of purchase of any goods or services and
            that standard message and data rates may apply for California
            Residents. *
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-lg bg-orange-500 px-6 py-4 text-lg font-medium text-white transition hover:bg-orange-600"
        >
          Get Quote
        </button>
      </form>
    </div>
  );
}