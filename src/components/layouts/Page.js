import React from 'react'
import styled from 'styled-components'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

export const Page = ({children}) => (
  <div className="page" id="page">
    {children}
  </div>
)

export const PageContent = ({children}) => (
  <main className="page-content" id="page_content" role="main">
    {children}
  </main>
)

const Constraints = styled.div`
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem;
`

export const PageContentConstrained = ({children}) => (
  <main className="page-content" id="page_content" role="main">
    <Constraints>{children}</Constraints>
  </main>
)
