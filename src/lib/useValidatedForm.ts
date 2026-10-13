"use client";

import { useState, type FormEvent } from "react";
import type { Errors } from "./validation";

type Status = "idle" | "valid";

/**
 * Client-side form state with validation. Nothing is stored or sent.
 * Pass the handler that should receive valid values as `onValid`.
 */
export function useValidatedForm<K extends string>(
  initial: Record<K, string>,
  validate: (values: Record<K, string>) => Errors<K>,
  onValid: (values: Record<K, string>) => void,
) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Errors<K>>({});
  const [status, setStatus] = useState<Status>("idle");

  const setField = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    setStatus("idle");
    if (errors[name as K]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate(values);
    setErrors(next);
    const firstInvalid = Object.keys(next).find((k) => next[k as K]);
    if (firstInvalid) {
      setStatus("idle");
      event.currentTarget.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    onValid(values);
    setStatus("valid");
  };

  return { values, errors, status, setField, onSubmit };
}
