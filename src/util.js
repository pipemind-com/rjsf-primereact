import styled from 'styled-components'

export const USE_LOGS = false

const Wrapper = styled.div`
  margin-top: 30px;
`

export function FloatWrapper ({ required, label, id, children }) {
  if (!label) {
    return children
  }

  return (
    <Wrapper className="p-float-label">
      {children}
      <label htmlFor={id}>
        {label} {required ? <span title="Required">*</span> : undefined}
      </label>
    </Wrapper>
  )
}
