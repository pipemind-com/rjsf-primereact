import React from "react"
import styled from 'styled-components'
import { Dropdown } from 'primereact/dropdown'
import { FloatWrapper } from './util'
import { USE_LOGS } from "./util"


const DropdownLabel = styled.label`
  display: block;
  padding: 6px 0;
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
  if (USE_LOGS) {
    console.log('dropdown props', props)
  }

  function processValue (event) {
    if (USE_LOGS) {
      console.log(event)    
    }
  }

  return (
    <>
      <DropdownLabel htmlFor={id}>{label}</DropdownLabel>
      <Dropdown
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
