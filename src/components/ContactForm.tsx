"use client";

import { FormField } from "./FormField";
import { validateContact } from "@/lib/validation";
import { useValidatedForm } from "@/lib/useValidatedForm";

export function ContactForm({ defaultMessage = "" }: { defaultMessage?: string }) {
  const { values, errors, status, setField, onSubmit } = useValidatedForm(
    { name: "", email: "", message: defaultMessage },
    validateContact,
    () => {
      // TODO(backend): send `values` to a real backend or email service here.
      // Nothing is stored or transmitted yet. The service has not been chosen.
    },
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <FormField label="Name" name="name" value={values.name} error={errors.name} onChange={setField} autoComplete="name" />
      <FormField label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={setField} autoComplete="email" />
      <FormField label="Message" name="message" as="textarea" value={values.message} error={errors.message} onChange={setField} />
      <div>
        <button className="btn btn--primary" type="submit">
          Send message
        </button>
      </div>
      <div role="status" aria-live="polite">
        {status === "valid" ? (
          <p className="notice">
            Your details look good, but this form isn’t connected yet, so nothing was sent. Please email me directly using the link on this page.
          </p>
        ) : null}
      </div>
    </form>
  );
}
