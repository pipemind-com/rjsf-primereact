import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 30px;
  display: block;
  position: relative;
`

const FloatLabel = styled.label``

const NormalLabel = styled.label`
  position: absolute;
  top: -0.75rem;
  margin-top: -.5rem;
  font-size: 12px;
  color: #6c757d;
`
//  left: 0.5rem;


export function FloatWrapper ({ required, label, labelColor, id, float, children }) {
  if (!label) {
    return children
  }

  const Label = float ? FloatLabel : NormalLabel

  const array = [
    (<Label key={1}
      htmlFor={id}
      style={{ color: labelColor ? labelColor : undefined }}
    >
      {label} {required ? <span title="Required">*</span> : undefined}
    </Label>),
    children
  ]

  return (
    <Wrapper className={float ? "p-float-label" : ''}>
      {float ? array.reverse() : array}
    </Wrapper>
  )
}

