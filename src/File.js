import React from "react"
import { FileUpload } from 'primereact/fileupload'

export default function FileTemplate (props) {
  const { id, label } = props
  
  function myUploader (event) {
    // console.log({ event })
  }

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <FileUpload id={id} name={label} mode="basic" customUpload uploadHandler={myUploader} />
    </>
  )
}