import React from "react";
import { AlertCircle } from "lucide-react";

/** Shared control styling. Pass `invalid` to show the error state. */
export const controlClass = (invalid) =>
  [
    "w-full rounded-lg border bg-[#f7f9fd] px-3.5 py-2.5 text-sm text-[#080f20]",
    "placeholder:text-[#6B7280]/70 outline-none transition",
    "hover:border-[#080f20]/30 focus:ring-2",
    "dark:bg-[#080f20] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-white/30",
    invalid
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
      : "border-[#080f20]/10 focus:border-[#FF4D4D] focus:ring-[#FF4D4D]/20 dark:border-white/10",
  ].join(" ");

/** Label + control + error message. `id` must match the control's id. */
const FormField = ({ id, label, required, error, children }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-1.5 block text-sm font-medium text-[#080f20] dark:text-white"
    >
      {label}
      {required && (
        <span className="ml-0.5 text-[#FF4D4D]" aria-hidden="true">
          *
        </span>
      )}
    </label>
    {children}
    {error && (
      <p
        id={`${id}-error`}
        role="alert"
        className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600 dark:text-red-400"
      >
        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        {error}
      </p>
    )}
  </div>
);

export default FormField;
