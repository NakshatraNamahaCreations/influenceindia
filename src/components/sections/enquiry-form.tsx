"use client";

import { useState } from "react";

import { ArrowIcon } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { enquiryTopics } from "@/content/services";
import { contact } from "@/content/site";

type Status = "idle" | "sending" | "sent" | "error";

const fields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email ID",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "organisation",
    label: "Organisation",
    type: "text",
    required: false,
    autoComplete: "organization",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
    autoComplete: "tel",
  },
  {
    name: "city",
    label: "City",
    type: "text",
    required: true,
    autoComplete: "address-level2",
  },
] as const;

export function EnquiryForm({
  tone = "default",
}: {
  tone?: "default" | "invert";
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [topics, setTopics] = useState<string[]>([]);

  const border = tone === "invert" ? "border-line-invert" : "border-line";
  const muted = tone === "invert" ? "text-paper/70" : "text-ink-50";
  const inputBase = `w-full border-b bg-transparent py-3.5 text-[1rem] outline-none transition-colors duration-300 ${border} focus:border-brand placeholder:text-transparent`;

  function toggleTopic(topic: string) {
    setTopics((current) =>
      current.includes(topic)
        ? current.filter((t) => t !== topic)
        : [...current, topic],
    );
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      organisation: String(formData.get("organisation") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      city: String(formData.get("city") ?? ""),
      note: String(formData.get("note") ?? ""),
      topics,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong.");
      }

      setStatus("sent");
      setTopics([]);
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  }

  return (
    <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <Reveal>
          <Eyebrow
            tone={tone === "invert" ? "invert" : "default"}
            className="mb-7"
          >
            Need to know more?
          </Eyebrow>
        </Reveal>
        {/* Set in the display face but sentence case, and a step smaller than a
            section heading: at d2 in a five-column well it broke mid-word. Each
            line rises on its own delay, and the middle line carries the logo's
            green-to-grey sweep. */}
        <Reveal mode="trigger">
          <h2 className="font-display text-[clamp(1.5rem,2.2vw,2.4rem)] font-semibold leading-[1.2] tracking-[-0.02em]">
            {[
              { text: "Share your details", tint: "" },
              {
                text: "and our representative",
                tint:
                  tone === "invert"
                    ? "text-brand-sweep-invert"
                    : "text-brand-sweep",
              },
              {
                text: "will contact you.",
                tint: tone === "invert" ? "text-accent" : "text-brand",
              },
            ].map((line, i) => (
              <span key={line.text} className="line-mask">
                <span
                  className={line.tint}
                  style={{ ["--line-delay" as string]: `${i * 110}ms` }}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className={`mt-9 flex flex-col gap-1 border-t pt-7 ${border}`}>
            <p className={`label ${muted}`}>Or reach us directly</p>
            <a
              href={`mailto:${contact.email}`}
              className="font-display text-[1.05rem] font-semibold tracking-[-0.01em] transition-colors hover:text-brand"
            >
              {contact.email}
            </a>
            <p className={`label mt-3 ${muted}`}>{contact.hours}</p>
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-6 lg:col-start-7">
        {status === "sent" ? (
          <div className={`border-t py-14 ${border}`} role="status">
            <p className="display d3 text-brand">Thank you.</p>
            <p className="lede mt-5 max-w-md">
              Your enquiry has reached our team. A representative will contact
              you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="label mt-8 underline underline-offset-4 transition-colors hover:text-brand"
            >
              Send another enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.name} className="flex flex-col gap-1">
                  <span className={`label ${muted}`}>
                    {field.label}
                    {field.required ? (
                      <span className="text-brand"> *</span>
                    ) : null}
                  </span>
                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    autoComplete={field.autoComplete}
                    placeholder={field.label}
                    className={inputBase}
                  />
                </label>
              ))}
            </div>

            {/* no rule: a fieldset border draws a line out of the legend and
                across the row */}
            <fieldset className="pt-2">
              <legend
                className={`label mb-5 ${tone === "invert" ? "text-accent" : "text-brand"}`}
              >
                I would like to know more about
              </legend>
              <div className="flex flex-wrap gap-2">
                {enquiryTopics.map((topic) => {
                  const active = topics.includes(topic);
                  return (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic)}
                      aria-pressed={active}
                      className={`group inline-flex items-center gap-2 rounded-[var(--radius-pill)] border px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.1em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        active
                          ? "-translate-y-0.5 border-brand bg-brand text-paper shadow-[0_10px_24px_-10px_rgba(92,122,28,0.9)]"
                          : tone === "invert"
                            ? "border-accent/35 bg-accent/10 text-accent hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-ink"
                            : "border-brand/45 bg-brand-soft text-brand hover:-translate-y-0.5 hover:border-brand hover:bg-brand hover:text-paper"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                          active
                            ? "bg-accent"
                            : tone === "invert"
                              ? "bg-accent/60 group-hover:bg-ink"
                              : "bg-brand/50 group-hover:bg-paper"
                        }`}
                      />
                      <span
                        aria-hidden="true"
                        className={`grid transition-all duration-300 ${
                          active
                            ? "w-3 opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      >
                        <svg
                          viewBox="0 0 12 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <path d="M2 6.5 4.8 9.2 10 3.5" />
                        </svg>
                      </span>
                      {topic}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="flex flex-col gap-1">
              <span className={`label ${muted}`}>Anything else?</span>
              <textarea
                name="note"
                rows={3}
                placeholder="Tell us about your requirement"
                className={`${inputBase} resize-none`}
              />
            </label>

            {status === "error" ? (
              <p className="text-[0.9rem] text-danger" role="alert">
                {message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={status === "sending"}
              className={`group inline-flex w-fit items-center gap-3 rounded-[var(--radius-pill)] px-7 py-4 font-mono text-[0.72rem] uppercase leading-none tracking-[0.12em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-50 ${
                tone === "invert"
                  ? "bg-accent text-ink shadow-[0_10px_26px_-12px_rgba(192,214,78,0.75)] hover:bg-paper"
                  : "bg-brand text-paper shadow-[0_10px_24px_-12px_rgba(92,122,28,0.9)] hover:bg-ink"
              }`}
            >
              {status === "sending" ? "Sending…" : "Submit enquiry"}
              <ArrowIcon />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
