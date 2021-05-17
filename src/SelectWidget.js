import React from "react"
import styled from 'styled-components'
import { Dropdown } from 'primereact/dropdown'
import { FloatWrapper } from './util'

const DropdownLabel = styled.label`
  display: block;
  padding-bottom: 5px;
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

  console.log('dropdown props', props)

  function processValue (event) {

    console.log(event)
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