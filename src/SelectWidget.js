import React from "react"
import styled from 'styled-components'
import { Dropdown } from 'primereact/dropdown'

const DropdownLabel = styled.label`
  display: block;
  padding: 6px 0;
  font-size: 12px;
  color: #6c757d;
`

const DropdownInput = styled(Dropdown)`
  width: 100%;
`

function SelectWidget(props) {
  const {
    id,
    value,
    name,
    options,
    required,
    label,
    onChange
  } = props

  return (
    <>
      <DropdownLabel
        htmlFor={id}
        style={{ color: options?.labelColor ? options.labelColor : undefined }}
      >
        {label}
      </DropdownLabel>
      <DropdownInput 
        inputId={id}
        name={name}
        value={value}
        options={options.enumOptions}
        onChange={event => onChange(event.value)}
      />
    </>
  )
}

export default SelectWidget