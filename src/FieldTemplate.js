import React from "react"
import styled from 'styled-components'

import DescriptionField from "./DescriptionField"
// import HelpField from "../HelpField";
// import RawErrors from "../RawErrors";

const Wrapper = styled.div`
  margin-bottom: 10px;
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
    <Wrapper>
      {children}
      {displayLabel && rawDescription && (
        <div>
          <DescriptionField description={rawDescription} />
        </div>
      )}
      {/* <HelpField helpText={rawHelp} id={id} /> */}
      {/* <RawErrors errors={rawErrors} options={errorOptions} /> */}
    </Wrapper>
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