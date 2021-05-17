export function FloatWrapper ({ required, label, id, children }) {
  return (
    <div className="p-float-label">
      {children}
      {!!label && (
        <label htmlFor={id}>
          {label} {required ? <span title="Required">*</span> : undefined}
        </label>
      )}
    </div>
  )
}

