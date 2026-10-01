"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, ChevronDown, Loader2 } from "lucide-react";
import FormField, { controlClass } from "./FormField";
import { PROJECT_TYPES } from "./contactData";
import { submitContactForm } from "./contactApi";

const INITIAL = {
  name: "",
  email: "",
  subject: "",
  projectType: "",
  message: "",
};
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FIELD_ORDER = ["name", "email", "subject", "projectType", "message"];

const validate = (v) => {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your full name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Enter a valid email, like name@example.com.";
  if (!v.subject.trim()) e.subject = "Add a short subject.";
  if (!v.projectType) e.projectType = "Choose a project type.";
  if (!v.message.trim()) e.message = "Write a message.";
  else if (v.message.trim().length < 10)
    e.message = "Add a little more detail (at least 10 characters).";
  return e;
};

const ContactForm = () => {
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Clear or update an existing error as the user fixes it.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const result = await submitContactForm(values);
      if (result.sent) {
        toast.success("Message sent", {
          description: "Thanks for reaching out. We'll reply soon.",
        });
      } else {
        // Frontend-only mode: be honest that nothing was delivered.
        toast.success("Form validated", {
          description: "Frontend only for now. No message was sent.",
        });
      }
      setValues(INITIAL);
      setErrors({});
    } catch {
      toast.error("Couldn't send your message", {
        description: "Please try again in a moment.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const aria = (name) => ({
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
  });

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#080f20]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0b1225] sm:p-8"
    >
      <h2 className="text-lg font-semibold text-[#080f20] dark:text-white">
        Send us a message
      </h2>
      <p className="mt-1 text-sm text-[#6B7280] dark:text-slate-400">
        Fields marked <span className="text-[#FF4D4D]">*</span> are required.
      </p>

      <div className="mt-6 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            id="contact-name"
            label="Full Name"
            required
            error={errors.name}
          >
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={controlClass(errors.name)}
              {...aria("name")}
            />
          </FormField>

          <FormField
            id="contact-email"
            label="Email Address"
            required
            error={errors.email}
          >
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={controlClass(errors.email)}
              {...aria("email")}
            />
          </FormField>
        </div>

        <FormField
          id="contact-subject"
          label="Subject"
          required
          error={errors.subject}
        >
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="What is this about?"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={controlClass(errors.subject)}
            {...aria("subject")}
          />
        </FormField>

        <FormField
          id="contact-projectType"
          label="Project Type"
          required
          error={errors.projectType}
        >
          <div className="relative">
            <select
              id="contact-projectType"
              name="projectType"
              value={values.projectType}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`${controlClass(errors.projectType)} appearance-none pr-10 ${
                values.projectType
                  ? ""
                  : "text-[#6B7280]/70 dark:text-slate-500"
              }`}
              {...aria("projectType")}
            >
              <option value="">Select a project type</option>
              {PROJECT_TYPES.map((t) => (
                <option key={t} value={t} className="text-[#080f20]">
                  {t}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]"
              aria-hidden="true"
            />
          </div>
        </FormField>

        <FormField
          id="contact-message"
          label="Message"
          required
          error={errors.message}
        >
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={2000}
            placeholder="Tell us about your idea, project, or question."
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`${controlClass(errors.message)} resize-y`}
            {...aria("message")}
          />
        </FormField>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#080f20] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#FF4D4D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D4D] disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-[#080f20] dark:hover:bg-[#FF4D4D] dark:hover:text-white"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
