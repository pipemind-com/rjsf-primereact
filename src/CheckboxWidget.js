import React from "react"
import { Checkbox } from 'primereact/checkbox'
import styled from 'styled-components'

const CheckboxLabel = styled.label`
  margin-left: 10px;
`

function CheckboxWidget(props) {
  const {
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
    onBlur,
    options,
    onFocus,
    formContext
  } = props;
  const _onChange = event => onChange && onChange(event.checked)
  const _onBlur = () => onBlur && onBlur(id, value)
  const _onFocus = () => onFocus && onFocus(id, value)
  const checked = value == "true" || value == true
  return (
    <div className="p-field-checkbox">
      <Checkbox
        inputId={id}
        disabled={disabled || readonly}
        autoFocus={autofocus}
        checked={typeof value === "undefined" ? false : checked}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        required={required}
      />
      <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
    </div>
  )
}

export default CheckboxWidget
