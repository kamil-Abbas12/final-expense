"use client";

import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted!");
  };

  return (
    <section id="quote-form" className="bg-slate-800 py-16 text-white">
      <div className="max-w-lg mx-auto bg-white text-black p-6 rounded">
        <h2 className="text-center text-xl mb-4">
          Get Your Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            placeholder="First Name"
            className="w-full border p-2 rounded"
            required
          />

          <input
            placeholder="Last Name"
            className="w-full border p-2 rounded"
            required
          />

          <input
            placeholder="Phone"
            className="w-full border p-2 rounded"
            required
          />

          <button className="w-full bg-orange-500 text-white py-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}