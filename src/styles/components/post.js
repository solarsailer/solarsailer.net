import styled, {css} from 'styled-components'
import {rgba, tint, shade} from 'polished'

import {colors, typography} from '../config'
import bodyLinkStyles from './body-link'
import specialLinkStyles from './special-link'

// -------------------------------------------------------------
// Constants.
// -------------------------------------------------------------

const BREAKPOINT_MOBILE = 700
const INNER_BLOCK_BORDER_RADIUS = 5

// -------------------------------------------------------------
// Post Styles.
// -------------------------------------------------------------

const HINT = css`
  position: absolute;
  top: -20px;
  right: 20px;

  color: black;
  opacity: 0.35;
  font-size: 1.15rem;
  font-weight: 500;
  text-transform: uppercase;
`

export default css`
  & > :first-child {
    margin-top: 0;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  /* Titles. */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    line-height: normal;

    &::before {
      opacity: 0.25;
      font-size: 0.75em;
      font-weight: 300;
      font-style: normal;
    }

    .more {
      color: #888;
      margin-left: 0.5rem;
      font-size: 0.7em;
      font-weight: normal;
      text-transform: none;
    }
  }

  h1 {
    margin-top: 6rem;
    margin-bottom: 4rem;

    font-size: 1.3em;
    font-weight: bold;
    text-transform: uppercase;

    &::before {
      content: '# ';
    }
  }

  h2 {
    margin-top: 5rem;
    margin-bottom: 3rem;

    padding-bottom: 0.5rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);

    font-size: 1.2em;
    font-weight: normal;
    text-transform: uppercase;

    &::before {
      content: '## ';
    }
  }

  h3 {
    display: table;

    margin-top: 4rem;
    margin-bottom: 2rem;

    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);

    font-size: 1.2em;
    font-weight: normal;
    text-transform: none;

    &::before {
      content: '### ';
    }
  }

  h4 {
    margin-top: 4rem;
    margin-bottom: 2rem;

    color: rgb(50, 50, 50);

    font-size: 1.1em;
    font-weight: 500;
    text-transform: none;

    &::before {
      content: '#### ';
    }
  }

  h5 {
    margin-top: 3rem;
    margin-bottom: 2rem;

    color: rgb(100, 100, 100);

    font-size: 0.9em;
    font-weight: 500;
    text-transform: uppercase;

    &::before {
      content: '##### ';
    }
  }

  h6 {
    margin-top: 3rem;
    margin-bottom: 2rem;

    color: rgb(150, 150, 150);

    font-size: 0.8em;
    font-weight: normal;
    text-transform: uppercase;

    &::before {
      content: '###### ';
    }
  }

  /* Images. */

  img {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid ${rgba('black', 0.1)};
  }

  /* Links. */

  ${bodyLinkStyles};
  ${specialLinkStyles};

  /* Lists. */

  ul {
    li {
      position: relative;

      &::before {
        content: '';

        position: absolute;
        top: 0.525em;
        left: -1.05em;

        width: 5px;
        height: 5px;

        background: ${colors.brand.main};
        border-radius: 50%;
      }
    }
  }

  ol {
    list-style-type: decimal;

    li {
      padding-left: 1rem;
    }
  }

  ul,
  ol {
    padding-left: 4rem;
    font-size: 0.9em;

    @media (max-width: 600px) {
      padding-left: 3rem;
    }
  }

  li {
    margin-bottom: 1rem;
  }

  /* Figure and figcaption. */

  figure {
    margin-top: 0;
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 2rem;

    padding-top: 0;
    padding-bottom: 1rem;

    background: #f6f6f6;
    border-radius: ${INNER_BLOCK_BORDER_RADIUS}px;

    img {
      margin-bottom: 1rem;
      border: none;
    }

    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      margin-left: -2rem;
      margin-right: -2rem;

      background: #f1f1f1;
    }
  }

  figcaption {
    color: #666;
    padding: 0 2rem;
    font-family: ${typography.code.fontStack};
    font-size: 0.8em;
    text-align: center;
  }

  /* Code. */

  .gatsby-highlight {
    position: relative;

    &::before {
      content: 'Code';
      ${HINT};
    }
  }

  .gatsby-highlight pre {
    margin: 0;
    margin-bottom: 2rem;
    padding: 1.5rem 2.5rem;
    border-radius: ${INNER_BLOCK_BORDER_RADIUS}px;

    code {
      white-space: pre-wrap;
    }

    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      margin-left: -2rem;
      margin-right: -2rem;
      border-radius: 0;
    }
  }

  code {
    font-size: 0.75em;
  }

  /* Inline code block. */
  p code {
    color: ${colors.brand.main};

    margin-left: 2px;
    margin-right: 2px;

    padding-top: 4px;
    padding-bottom: 2px;
    padding-left: 8px;
    padding-right: 8px;

    background: #f1f1f1;
  }

  /* Blockquotes. */

  blockquote {
    position: relative;

    color: rgb(50, 50, 50);

    margin: 0;
    margin-bottom: 2rem;

    padding: 2rem calc(2.5rem - 1px);

    background: #f1f1f1;
    border-radius: ${INNER_BLOCK_BORDER_RADIUS}px;
    border: 1px solid #e0e0e0;

    font-size: 0.85em;
    line-height: 1.45;

    @media (max-width: ${BREAKPOINT_MOBILE}px) {
      margin-left: -2rem;
      margin-right: -2rem;

      border: none;
      border-radius: 0;

      background: #eaeaea;
    }

    &::before {
      content: 'Quote';
      ${HINT};
    }
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  .twitter-tweet {
    background: ${tint(0.15, '#4da4fa')};
    border: 1px solid ${tint(0.25, '#4da4fa')};

    &::before {
      content: 'Tweet';
      color: #4da4fa;
      opacity: 0.55;
    }
  }

  /* HR. */

  hr {
    color: ${rgba(colors.brand.main, 0.2)};

    max-width: 80%;
    height: 1px;
    margin: 5rem 0 6rem;
    margin-left: auto;
    margin-right: auto;

    background: linear-gradient(
      to right,
      ${colors.page.background},
      #e0e0e0,
      ${colors.page.background}
    );

    border: none;
  }

  /* Embeds. */

  iframe {
    display: block;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }

  /* Footnotes */

  a.footnote-ref {
    box-sizing: content-box;
    color: white;
    margin-left: 2px;
    padding-left: 5px;
    padding-right: 5px;
    background: ${colors.brand.main};
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 1.2rem;

    &:hover {
      color: ${colors.brand.main};
      background: #eee;
      border: 1px solid ${colors.brand.main};
    }
  }

  /* Note: yes, this is dirty, but we don't have any control on how footnotes are generated by Remark. */
  .footnotes {
    position: relative;

    margin-top: 10rem;
    padding: 2rem 0;

    background: #eee;
    border-radius: ${INNER_BLOCK_BORDER_RADIUS}px;

    font-size: 0.85em;

    &::before {
      content: 'Footnotes';
      ${HINT};
    }

    hr {
      display: none;
    }

    ol {
      margin-bottom: 0;
      padding-left: 0;
      list-style: none;
    }

    li {
      position: relative;
      margin-bottom: 2rem;
      padding: 0 2rem 0;
      border-bottom: 1px solid ${rgba('black', 0.1)};

      &:last-of-type {
        margin-bottom: -2rem;
        padding-bottom: 0;
        border: none;
      }

      &:target {
        font-weight: 500;
      }

      blockquote {
        margin-left: 0;
        margin-right: 0;
        padding: 1.5rem;
        background: #ddd;
        border: none;
      }

      .footnote-backref {
        position: absolute;
        top: 0;
        right: -11px;

        margin-left: 2rem;
        padding: 6px 6px 3px;
        background: ${tint(0.4, colors.brand.main)};
        border-bottom: none;
        border-radius: ${INNER_BLOCK_BORDER_RADIUS}px;

        font-size: 0.9em;
        line-height: normal;

        &:hover {
          color: white;
          background: ${colors.brand.main};
        }
      }
    }
  }
`
