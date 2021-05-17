import React from "react"
import { InputTextarea } from 'primereact/inputtextarea'
import { FloatWrapper } from './util'

function TextareaWidget({
  id,
  placeholder,
  required,
  readonly,
  disabled,
  name,
  label,
  schema,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  formContext,
}) {
  // eslint-disable-next-line no-shadow
  const _onChange = ({ target: { value } }) => {
    return onChange(value === "" ? options.emptyValue : value)
  }
  const _onBlur = () => onBlur && onBlur(id, value)
  const _onFocus = () => onFocus && onFocus(id, value)
  const inputType = schema.type === 'string' ?  'text' : `${schema.type}`
  
  return (
    <FloatWrapper 
      key={id}
      required={required} 
      id={id} 
      label={label}
    >
      <InputTextarea
        id={id}
        placeholder={placeholder}
        type={inputType}
        label={schema.title || label}
        required={required}
        autoFocus={autofocus}
        disabled={disabled || readonly}
        name={name}
        value={value || value === 0 ? value : ""}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </FloatWrapper>
  )
}

export default TextareaWidget