import React from "react"

function DescriptionField({ className, description }) {
  if (description) {
    return <p className={className}>{description}</p>
  }
}

export default DescriptionField
