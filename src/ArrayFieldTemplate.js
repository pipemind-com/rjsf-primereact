import React from "react"
import styled from 'styled-components'
import { Button } from 'primereact/button'

export default function ArrayFieldTemplate (props) {
  if (props.uiSchema['ui:ArrayFieldTemplateType'] === 'cards') {
    return (
        <div>
          cards array template 2
        </div>
      )
  }

  return (
    <div>
      array template 2
    </div>
  )
}