import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 30px;
`

export function FloatWrapper ({ required, label, id, children }) {
  return (
    <Wrapper className="p-float-label">
      {children}
      {!!label && (
        <label htmlFor={id}>
          {label} {required ? <span title="Required">*</span> : undefined}
        </label>
      )}
    </Wrapper>
  )
}

