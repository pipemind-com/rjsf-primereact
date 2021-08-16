import React from "react"
import styled from 'styled-components'
import { InputTextarea } from 'primereact/inputtextarea'

import { FloatWrapper } from './util'

const StyledTextarea = styled(InputTextarea)`
  width: 100%;
  background-color: ${props => props.readOnly ? '#e2e2e2' : 'initial'}
`

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
  uiSchema
}) {
  // eslint-disable-next-line no-shadow
  const _onChange = ({ target: { value } }) => {
    return onChange(value === "" ? options.emptyValue : value)
  }
  const _onBlur = () => onBlur && onBlur(id, value)
  const _onFocus = () => onFocus && onFocus(id, value)
  const inputType = schema.type === 'string' ?  'text' : `${schema.type}`

  //console.log('uiSchema["ui:textProcessing"]', uiSchema["ui:textProcessing"])
  //console.log('uiSchema bgColor', uiSchema?.bgColor)
  return (
    <FloatWrapper 
      float={!!options.float}
      key={id}
      required={required} 
      id={id} 
      label={label}
    >
      <StyledTextarea
        id={id}
        placeholder={placeholder}
        type={inputType}
        label={schema.title || label}
        required={required}
        autoFocus={autofocus}
        disabled={disabled}
        readOnly={readonly}
        name={name}
        value={value || value === 0 ? value : ""}
        rows={options.rows || 5}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
        style={{backgroundColor: (options?.bgColor ? options.bgColor : 'white')}}
      />
    </FloatWrapper>
  )
}

export default TextareaWidget