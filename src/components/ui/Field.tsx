import React from "react"
import { twMerge } from "tailwind-merge"

const inputBaseClass =
  "peer w-full bg-transparent text-tx-light outline-none placeholder-transparent pt-5 pb-2"

interface FieldProps {
  label: string
  error?: string
  required?: boolean
  children: React.ReactElement
}

const Field = ({ label, error, required, children }: FieldProps) => {
  const childProps = React.isValidElement(children) ? (children.props as { className?: string; placeholder?: string }) : undefined
  const childClassName = childProps?.className
  const isTextarea = React.isValidElement(children) && children.type === "textarea"
  const styledChild = React.isValidElement(children)
    ? React.cloneElement(children, {
      className: twMerge(inputBaseClass, childClassName),
      placeholder: " ",
    } as Record<string, unknown>)
    : children

  const labelPosition = isTextarea ? "top-2" : "bottom-2"

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`relative border-b ${error ? "border-primary" : "border-tx-light-subtle"}`}
      >
        {styledChild}
        <label
          className={`pointer-events-none absolute left-0 right-0 ${labelPosition} flex items-center justify-between text-tx-light-subtle text-sm transition-all duration-200 peer-focus:-translate-y-5 peer-focus:text-xs peer-focus:text-tx-light peer-[:not(:placeholder-shown)]:-translate-y-5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-tx-light`}
        >
          <span>{label}</span>
          {required && <span className="text-primary">*</span>}
        </label>
      </div>
    </div>
  )
}

export default Field
