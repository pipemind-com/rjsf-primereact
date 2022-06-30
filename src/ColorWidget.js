import { ColorPicker } from 'primereact/colorpicker'
import React from "react"
import styled from 'styled-components'

const ColorLabel = styled.label`
  padding-right:10px;
`

function ColorWidget({
  id,
  schema,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
  onBlur,
  onFocus,
}) {
  return (
    <>
      <ColorLabel
        htmlFor={id}
        style={{ color: options?.labelColor ? options.labelColor : undefined }}
      >
        {label}
      </ColorLabel>
      <ColorPicker
        inputId={id}
        value={value}
        onChange={e => onChange(e.value)}
      />
    </>
  )
}
export default ColorWidget