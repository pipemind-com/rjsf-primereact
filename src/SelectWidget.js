import React from "react"
import styled from 'styled-components'
import { Dropdown } from 'primereact/dropdown'
import { FloatWrapper } from './util'

const DropdownLabel = styled.label`
  display: block;
  padding: 6px 0;
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
      <DropdownLabel htmlFor={id}>{label}</DropdownLabel>
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