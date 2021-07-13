import React from "react"
import { USE_LOGS } from "./util"


function Header ({
  uiSchema,
  title,
  description,
  idSchema,
  required,
  TitleField,
  DescriptionField
}) {
  const fieldTitle = uiSchema["ui:title"] || title
  const fieldDescription = uiSchema["ui:description"] || description

  return (
    <>
      {(fieldTitle) && (
          <TitleField
            id={`${idSchema.$id}-title`}
            title={fieldTitle}
            options={uiSchema["ui:options"]}
            required={required}
          />
        )}
        {(fieldDescription) && (
          <DescriptionField
            id={`${idSchema.$id}-description`}
            description={fieldDescription}
          />
        )}
    </>
  )
}

function ObjectFieldTemplate(props) {
  const {
    layout,
    properties,
    uiSchema,
    idSchema,
  } = props

  const fieldLayout = uiSchema["ui:layout"] || layout

  if (!fieldLayout) {
    return (
      <>
        <Header {...props} />
        {properties.map(prop => prop.content)}
      </>
    )
  }

  if (USE_LOGS) {
      console.log('properties', properties, fieldLayout)
  }

  return (
    <>
      <Header {...props} />
      {fieldLayout.md.map((line, lineIndex) => (
        <div key={lineIndex} className="p-grid">
          {Object.entries(line).map(([name, col], colIndex) => (
            <div key={colIndex} className={`p-col-${col}`}>
              {properties.find(p => p.name === name)?.content}
            </div>
          ))}
        </div>
      ))}
    </>
  )
}

export default ObjectFieldTemplate;
