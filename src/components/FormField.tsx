import { useId } from "react";

type Common = {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (name: string, value: string) => void;
  autoComplete?: string;
};

type Props = Common & { as?: "input" | "textarea"; type?: string };

export function FormField({ label, name, value, error, onChange, autoComplete, as = "input", type = "text" }: Props) {
  const id = useId();
  const errorId = `${id}-error`;
  const shared = {
    id,
    name,
    value,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    onChange: (e: { target: { value: string } }) => onChange(name, e.target.value),
  } as const;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {as === "textarea" ? <textarea {...shared} /> : <input type={type} {...shared} />}
      {error ? (
        <p className="field__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
