import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

import invisibleLinkStyles from '../styles/components/invisible-link'

// -------------------------------------------------------------
// Default
// -------------------------------------------------------------

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 5rem;

  font-size: 3em;
  font-weight: 500;

  &::before,
  &::after {
    content: '';

    flex: 1;
    height: 1px;

    background: hsl(0, 0%, 80%);
  }

  &::before {
    margin-right: 3rem;
    background: linear-gradient(
      to left,
      hsl(0, 0%, 88%),
      var(--color-page-background)
    );
  }

  &::after {
    margin-left: 3rem;
    background: linear-gradient(
      to right,
      hsl(0, 0%, 88%),
      var(--color-page-background)
    );
  }

  ${invisibleLinkStyles};
`

export default ({url, children}) => {
  return (
    <Title>
      <Link to={url ? url : '#'}>{children}</Link>
    </Title>
  )
}
