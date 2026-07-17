import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { capturePostHog, getUtmParams } from "~/lib/analytics";

// Server-side handler: stores contact form submissions in the shared database
const submitContact = createServerFn({ method: "POST" }).handler(
  async (data: {
    name: string;
    email: string;
    company: string;
    budget: string;
    message: string;
  }) => {
    const { name, email, company, budget, message } = data;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return { success: false, error: "All required fields must be filled." };
    }

    try {
      // Use team-db CLI to insert the contact record
      const escapedName = name.replace(/'/g, "''");
      const escapedEmail = email.replace(/'/g, "''");
      const escapedCompany = company.replace(/'/g, "''");
      const escapedBudget = (budget || "").replace(/'/g, "''");
      const escapedMessage = message.replace(/'/g, "''");

      const { execSync } = await import("node:child_process");
      const result = execSync(
        `team-db "INSERT INTO contacts (name, email, company, budget, message) VALUES ('${escapedName}', '${escapedEmail}', '${escapedCompany}', '${escapedBudget}', '${escapedMessage}')"`,
        { encoding: "utf-8" },
      );

      return { success: true };
    } catch (err) {
      console.error("Failed to save contact:", err);
      return { success: false, error: "Something went wrong. Please try again later." };
    }
  },
);

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const [hasStartedForm, setHasStartedForm] = useState(false);

  const handleFirstFieldFocus = () => {
    if (!hasStartedForm) {
      setHasStartedForm(true);
      capturePostHog("channelforge_form_started", {
        form_id: "contact-main",
        form_location: "/contact",
        ...getUtmParams(),
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const result = await submitContact(formData);
      if (result.success) {
        capturePostHog("channelforge_form_submitted", {
          form_id: "contact-main",
          form_type: "contact",
          form_location: "/contact",
          ...getUtmParams(),
        });
        setSubmitted(true);
      } else {
        setError(result.error || "Something went wrong.");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wider text-accent-300 uppercase">
            Let's talk
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get started
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Tell us about your business and marketing goals. We'll get back to
            you within 24 hours with a custom recommendation — no pitch, no
            pressure.
          </p>
        </div>
      </section>

      {/* ─── Form + Info ─── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Info side */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-brand-900">
                Not sure where to start?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                No problem. Fill out the form and we'll schedule a free
                30-minute strategy call. No pitch, no pressure — just a
                conversation about your goals and how we can help.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-900">Email</h4>
                    <p className="mt-0.5 text-sm text-gray-600">hello@channelforge.io</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-brand-900">Phone</h4>
                    <p className="mt-0.5 text-sm text-gray-600">1-800-CHANNEL</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50 p-6">
                <h4 className="text-sm font-semibold text-brand-900">What happens next?</h4>
                <ol className="mt-4 space-y-3">
                  {[
                    "We review your info and goals within 24 hours",
                    "We schedule a free 30-minute strategy call",
                    "We send you a custom proposal with budget breakdown",
                    "We onboard you and launch your first campaign within 2 weeks",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form side */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="card border-green-200 bg-green-50/50 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-brand-900">
                    Thanks, {formData.name}!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We've received your information and will be in touch at{" "}
                    <span className="font-medium text-brand-700">{formData.email}</span>{" "}
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h3 className="text-xl font-semibold text-brand-900">
                    Tell us about your business
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    All fields required unless marked optional.
                  </p>

                  {error && (
                    <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-900">
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={handleFirstFieldFocus}
                        className="input-field mt-1.5"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-900">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field mt-1.5"
                        placeholder="jane@company.com"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="company" className="block text-sm font-medium text-brand-900">
                      Company name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field mt-1.5"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div className="mt-5">
                    <label htmlFor="budget" className="block text-sm font-medium text-brand-900">
                      Monthly marketing budget <span className="text-gray-400">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="input-field mt-1.5"
                    >
                      <option value="">Prefer not to say</option>
                      <option value="under-2k">Under $2,000</option>
                      <option value="2k-5k">$2,000 – $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="10k-plus">$10,000+</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="block text-sm font-medium text-brand-900">
                      What are your marketing goals?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="input-field mt-1.5"
                      placeholder="Tell us about your business, current challenges, and what you'd like to achieve..."
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full text-base disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Send request"}
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.75 9.42a.75.75 0 011.08-.06L12 15l7.17-5.64a.75.75 0 011.08.06L18 12l-3 2.25" />
                      </svg>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}