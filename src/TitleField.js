import React from "react"
import styled from 'styled-components'

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: 0em;
`

function TitleField ({ title, options }) {
  return title && (
    <Title
      style={{ color: (options?.titleColor ? options.titleColor : undefined) }}
    >
      {title}
    </Title>
  )
}

export default TitleField