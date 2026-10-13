export type Errors<K extends string> = Partial<Record<K, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(v: { name: string; email: string; message: string }): Errors<"name" | "email" | "message"> {
  const errors: Errors<"name" | "email" | "message"> = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (!v.email.trim()) errors.email = "Enter your email address.";
  else if (!EMAIL.test(v.email.trim())) errors.email = "Enter a valid email address, like name@example.com.";
  if (v.message.trim().length < 10) errors.message = "Write at least 10 characters.";
  return errors;
}

export function validateFeedback(v: { name: string; message: string }): Errors<"name" | "message"> {
  const errors: Errors<"name" | "message"> = {};
  if (!v.name.trim()) errors.name = "Enter your name.";
  if (v.message.trim().length < 10) errors.message = "Write at least 10 characters.";
  return errors;
}
