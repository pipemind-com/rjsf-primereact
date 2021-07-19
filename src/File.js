import React from "react"
import { FileUpload } from 'primereact/fileupload'
import { USE_LOGS } from "./util"

export default function FileTemplate (props) {
//  if (USE_LOGS) {
    console.log("FILE TEMPLATE PROPS...")
    console.log({ props })
//  }
  const { id, label, uploadHandler } = props

  const myUploader = (uploadHandler)
  ? uploadHandler
  : (event) => {
//    if (USE_LOGS) {
    console.log('FileTemplate -- No specific file handling for this event')
    console.log({ event })
//    }
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <FileUpload id={id} name={label} mode="basic" customUpload uploadHandler={myUploader} />
    </>
  )
}
