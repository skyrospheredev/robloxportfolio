"use client";

import { FormField } from "./FormField";
import { validateFeedback } from "@/lib/validation";
import { useValidatedForm } from "@/lib/useValidatedForm";

export function FeedbackForm() {
  const { values, errors, status, setField, onSubmit } = useValidatedForm(
    { name: "", message: "" },
    validateFeedback,
    () => {
      // TODO(backend): send `values` to a real backend or email service here.
      // Nothing is stored or transmitted yet. The service has not been chosen.
    },
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <FormField label="Your name" name="name" value={values.name} error={errors.name} onChange={setField} autoComplete="name" />
      <FormField label="Your feedback" name="message" as="textarea" value={values.message} error={errors.message} onChange={setField} />
      <div>
        <button className="btn btn--primary" type="submit">
          Submit feedback
        </button>
      </div>
      <div role="status" aria-live="polite">
        {status === "valid" ? (
          <p className="notice">Thanks, your feedback looks good, but this form isn’t connected yet, so nothing was saved or sent.</p>
        ) : null}
      </div>
    </form>
  );
}
