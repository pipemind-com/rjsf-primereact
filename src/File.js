import { FileUpload } from 'primereact/fileupload'
import { FloatWrapper } from './util'
import React from "react"

export default function FileTemplate(props) {
  const { id, label, options, required, onChange } = props

  async function myUploader(event) {
    onChange(event.files[0])
  }

  return (
    <FloatWrapper
      float={!!options.float}
      key={id}
      required={required}
      id={id}
      label={label}
      labelColor={options?.labelColor}
    >
      <FileUpload id={id} name={label} auto customUpload onSelect={myUploader} />
    </FloatWrapper>
  )
}