import React from 'react'
import styled from 'styled-components'
import {Helmet} from 'react-helmet'
import {rgba} from 'polished'

import {colors} from '../../styles/config'
import postStyles from '../../styles/components/post'

// -------------------------------------------------------------
// Components.
// -------------------------------------------------------------

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
`

const Article = styled.article`
  padding: 5rem;

  background: white;
  border-radius: 2px;

  &::before {
    content: '';

    display: block;

    position: absolute;
    z-index: -1;

    top: 2rem;
    bottom: 1rem;
    left: 1rem;
    right: 1rem;

    box-shadow: 0 20px 30px ${rgba('black', 0.1)};
  }
`

const Titles = styled.div`
  margin-bottom: 6rem;

  text-align: center;
  line-height: normal;
`

const MainTitle = styled.h1`
  margin-bottom: 0.5rem;
  font-size: 2em;
  font-weight: normal;
`

const SubTitle = styled.h2`
  margin-bottom: 0;
  color: #aaa;
  font-size: 0.8em;
  font-weight: normal;
`

const PostContent = styled.div`
  ${postStyles};
`

export default function PostTemplate({data}) {
  const {markdownRemark, site} = data
  const {frontmatter, html} = markdownRemark

  return (
    <Wrapper>
      <Article>
        <Helmet>
          <title>
            {frontmatter.title} — {site.siteMetadata.title}
          </title>
        </Helmet>
        <Titles>
          <MainTitle>{frontmatter.title}</MainTitle>
          <SubTitle>{frontmatter.date}</SubTitle>
        </Titles>
        <PostContent dangerouslySetInnerHTML={{__html: html}} />
      </Article>
    </Wrapper>
  )
}

// -------------------------------------------------------------
// Queries.
// -------------------------------------------------------------

export const POST_QUERY = graphql`
  query PostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }

    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        title
      }
    }
  }
`
