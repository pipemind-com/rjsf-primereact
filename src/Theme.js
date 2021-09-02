import React from "react"

import { utils } from '@rjsf/core'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import styled from 'styled-components'

import ArrayFieldTemplate from './ArrayFieldTemplate'
import FileTemplate from './File'
import ObjectFieldTemplate from './ObjectFieldTemplate'
import FieldTemplate from './FieldTemplate'
import TitleField from './TitleField'
import TextWidget from './TextWidget'
import TextareaWidget from './TextareaWidget'
import CheckboxWidget from './CheckboxWidget'
import ColorWidget from './ColorWidget'
import SelectWidget from './SelectWidget'


const { getDefaultRegistry }  = utils
const { fields, widgets } = getDefaultRegistry()

const handleChange = ({ onChange, options }) => ({ target }) => onChange(target.value === '' ? options.emptyValue : target.value)

const Theme = (themeOpts) => {
  return {
    children: themeOpts?.noDefaultButton === true ? (<></>) : (<Button type="submit" label="submit"/>),
    fields: {
      ...fields, 
      TitleField
    },
    widgets: {
      ...widgets, 
      FileWidget: props => {
        props.options.labelColor = themeOpts?.globalLabelColor ? themeOpts.globalLabelColor : undefined
        return (<FileTemplate {...props} />)
      },
      TextWidget: props => {
        props.options.labelColor = themeOpts?.globalLabelColor ? themeOpts.globalLabelColor : undefined
        return (<TextWidget {...props} />)
      },
      CheckboxWidget: props => {
        props.options.labelColor = themeOpts?.globalLabelColor ? themeOpts.globalLabelColor : undefined
        return (<CheckboxWidget {...props} />)
      },
      TextareaWidget: props => {
        props.options.labelColor = themeOpts?.globalLabelColor ? themeOpts.globalLabelColor : undefined
        return (<TextareaWidget {...props} />)
      },
      ColorWidget: props => {
        props.options.labelColor = themeOpts?.globalLabelColor ? themeOpts.globalLabelColor : undefined
        return (<ColorWidget {...props} />)
      },
      SelectWidget: props => {
        props.options.labelColor = themeOpts?.globalLabelColor ? themeOpts.globalLabelColor : undefined
        return (<SelectWidget {...props} />)
      },
      PasswordWidget: props => {
        const { id, required, label, onChange, value } = props
        return (
          <InputText
            id={id}
            type="password"
            name={label}
            required={required}
            onChange={handleChange(props)}
            value={value || ''}
          />
        )
      }
    },
    FieldTemplate,
    ObjectFieldTemplate,
    ArrayFieldTemplate
  }
}

export default Theme