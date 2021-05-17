import React from "react"
import styled from 'styled-components'
import { ColorPicker } from 'primereact/colorpicker'

const ColorLabel = styled.label`
  padding-right:10px;
`

function ColorWidget ({
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
      <ColorLabel htmlFor={id}>{label}</ColorLabel>
      <ColorPicker
        inputId={id}
        value={value}
        onChange={e => onChange(e.value)}
      />
    </>
  )
}
export default ColorWidget