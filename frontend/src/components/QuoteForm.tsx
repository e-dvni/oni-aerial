"use client";

import { FormEvent, useState } from "react";

type QuoteFormProps = {
  title?: string;
  subtitle?: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  address: string;
  details: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "Roof / Insurance Inspection",
  address: "",
  details: "",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function QuoteForm({
  title = "Send your project details.",
  subtitle = "Share a few quick details and Oni Aerial will respond with next steps, pricing guidance, or a custom quote.",
}: QuoteFormProps) {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      if (!API_URL) {
        throw new Error("API URL is not configured.");
      }

      const response = await fetch(`${API_URL}/api/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message:
          "Thanks — your quote request was sent successfully. We’ll respond within 24 hours.",
      });

      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your request right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-xl shadow-black/30 md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D90429]">
        Request a Quote
      </p>

      <h2 className="mt-4 text-3xl font-semibold text-white">{title}</h2>

      <p className="mt-4 max-w-xl text-base leading-7 text-white/70">{subtitle}</p>

      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Name</span>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#D90429]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Email</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#D90429]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Phone</span>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(555) 555-5555"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#D90429]"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-white/70">Service Needed</span>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#D90429]"
            >
              <option className="bg-black">Roof / Insurance Inspection</option>
              <option className="bg-black">Real Estate Media</option>
              <option className="bg-black">Construction Monitoring</option>
              <option className="bg-black">Solar Inspection</option>
              <option className="bg-black">Other</option>
            </select>
          </label>
        </div>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm text-white/70">Property Address</span>
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="Property address"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#D90429]"
          />
        </label>

        <label className="mt-5 block">
          <span className="mb-2 block text-sm text-white/70">Project Details</span>
          <textarea
            name="details"
            rows={6}
            value={formData.details}
            onChange={handleChange}
            required
            placeholder="Tell us about the property, timeline, and scope of work"
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[#D90429]"
          />
        </label>

        {status.message && (
          <div
            className={`mt-5 rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-green-500/30 bg-green-500/10 text-green-300"
                : "border-red-500/30 bg-red-500/10 text-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#D90429] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Request a Quote"}
        </button>
      </form>
    </div>
  );
}