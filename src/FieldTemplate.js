import React from "react"
import styled from 'styled-components'

import DescriptionField from "./DescriptionField"
// import HelpField from "../HelpField";
// import RawErrors from "../RawErrors";


const FormGroup = styled.div`
  margin: 20px 0;
`

function FieldTemplate({
  id,
  children,
  className, 
  classNames,
  displayLabel,
  label,
  rawErrors = [],
  rawHelp,
  rawDescription,
  ...props
}) {
  return (
    <FormGroup>
      {children}
      {displayLabel && rawDescription && rawDescription && (
        <div>
          <DescriptionField description={rawDescription} />
        </div>
      )}
      {/* <HelpField helpText={rawHelp} id={id} /> */}
      {/* <RawErrors errors={rawErrors} options={errorOptions} /> */}
    </FormGroup>
  );
}

export default FieldTemplate;


// import styled from 'styled-components'
// 
// const FormField = styled.div`
//   margin: 20px 0;
// `
// 
// export default function FieldTemplate (props) {
//   const { id, classNames, label, help, required, description, errors, children } = props
// 
//   console.log('PROPS FieldTemplate', props)
//   return (
//     <FormField className="p-float-label">
//       {children}
//       <label htmlFor={id}>
//         {label} {required ? <span title="Required">*</span> : undefined}
//       </label>
//     </FormField>
//   )
// }