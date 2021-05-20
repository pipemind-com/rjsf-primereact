import styled from 'styled-components'

import { Button } from 'primereact/button'
import { utils } from '@rjsf/core'
const { isFixedItems } = utils;

const Grid = styled.div`
  background-color: red; 
`

const Segment = styled.div`
  background-color: yellow; 
`

const MaybeWrap = styled.div`
  background-color: green; 
`

const RowActions = styled.div`
  width: ${props => (props.children?.length || 0) * 40};
`


const ArrayFieldTitle = ({ TitleField, idSchema, uiSchema, title }) => {
  if (!title) {
    return null;
  }

  const id = `${idSchema.$id}__title`;
  return <TitleField id={id} title={title} options={uiSchema["ui:options"]} />;
};

function ArrayFieldDescription({ DescriptionField, idSchema, description }) {
  if (!description) {
    return null;
  }
  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
}


// checks if its the first array item
function isInitialArrayItem(props) {
  // no underscore because im not sure if we want to import a library here
  const { idSchema } = props.children.props;
  return idSchema.target && idSchema.conditions;
}

// Used in the two templates
function DefaultArrayItem(props) {
  return (
    <div className="p-grid" key={props.key}>
      <div className="p-col">
        {props.children}
      </div>
      {props.hasToolbar && (props.hasMoveUp || props.hasMoveDown || props.hasRemove) && (
        <RowActions className="p-col-fixed p-buttonset p-justify-end  ">
            {(props.hasMoveUp || props.hasMoveDown) && (
              <Button
                icon="pi pi-angle-up"
                tabIndex="-1"
                disabled={
                  props.disabled || props.readOnly || !props.hasMoveUp
                }
                onClick={props.onReorderClick(
                  props.index,
                  props.index - 1
                )}
              />
            )}

            {(props.hasMoveUp || props.hasMoveDown) && (
              <Button
                icon="pi pi-angle-down"
                tabIndex="-1"
                disabled={
                  props.disabled || props.readOnly || !props.hasMoveDown
                }
                onClick={props.onReorderClick(
                  props.index,
                  props.index + 1
                )}
              />
            )}

            {props.hasRemove && (
              <Button
                icon="pi pi-trash"
                className="p-button-danger"
                tabIndex="-1"
                disabled={props.disabled || props.readOnly}
                onClick={props.onDropIndexClick(props.index)}
              />
            )}
        </RowActions>
      )}
    </div>
  );
}

function DefaultNormalArrayFieldTemplate({
  uiSchema,
  idSchema,
  canAdd,
  className,
  classNames,
  disabled,
  DescriptionField,
  items,
  onAddClick,
  readOnly,
  required,
  schema,
  title,
  TitleField,
  itemProps,
}) {
  const fieldTitle = uiSchema["ui:title"] || title;
  const fieldDescription = uiSchema["ui:description"] || schema.description;
  return (
    <div
      className={[
        className,
        classNames,
        "sortable-form-fields",
      ]}>
      <ArrayFieldTitle
        key={`array-field-title-${idSchema.$id}`}
        TitleField={TitleField}
        idSchema={idSchema}
        uiSchema={uiSchema}
        title={fieldTitle}
        required={required}
      />

      {fieldDescription && (
        <ArrayFieldDescription
          key={`array-field-description-${idSchema.$id}`}
          DescriptionField={DescriptionField}
          idSchema={idSchema}
          description={fieldDescription}
        />
      )}

      <div key={`array-item-list-${idSchema.$id}`}>
        <div className="row array-item-list">
          {items && items.map(p => DefaultArrayItem({ ...p, ...itemProps }))}
        </div>

        {canAdd && (
          <div
            style={{
              marginTop: "1rem",
              position: "relative",
              textAlign: "right",
            }}>
            <Button icon="pi pi-plus" onClick={onAddClick} disabled={disabled || readOnly} />
          </div>
        )}
      </div>
    </div>
  );
}

function ArrayFieldTemplate(props) {
  const { schema } = props;

  return <DefaultNormalArrayFieldTemplate {...props}  />;
}

ArrayFieldTemplate.defaultProps = {
  options: {},
};

export default ArrayFieldTemplate;
