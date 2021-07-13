import React from "react"
import { FileUpload } from 'primereact/fileupload'
import { USE_LOGS } from "./util"

export default function FileTemplate (props) {
  if (USE_LOGS) {
    console.log({ props })
  }
  const { id, label } = props

  function myUploader (event) {
    if (USE_LOGS) {
      console.log({ event })
    }
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <FileUpload id={id} name={label} mode="basic" customUpload uploadHandler={myUploader} />
    </>
  )
}
