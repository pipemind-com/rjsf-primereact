import React from "react"

function ObjectFieldTemplate({
  DescriptionField,
  description,
  TitleField,
  title,
  layout,
  properties,
  required,
  uiSchema,
  idSchema,
}) {
  const fieldTitle = uiSchema["ui:title"] || title
  const fieldDescription = uiSchema["ui:description"] || description
  const fieldLayout = uiSchema["ui:layout"] || layout

  if (!fieldLayout) {
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
        {properties.map(prop => prop.content)}
      </>
    )
  }

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
      <div className="p-grid">
        {properties.map(prop => (
          <div className="p-col">
            {prop.content}
          </div>
        ))}
      </div>  
    </>
  )
}

export default ObjectFieldTemplate;