import React from "react"

function ObjectFieldTemplate({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}) {
  const fieldTitle = uiSchema["ui:title"] || title;
  const fieldDescription = uiSchema["ui:description"] || description;
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
  );
}

export default ObjectFieldTemplate;