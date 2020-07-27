/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
import TrashCan from "./TrashCan"
// import "./layout.css"

const GlobalStyle = createGlobalStyle`
 /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

 /* ---- base styling --- */

body {
  background-color: teal;
  margin: 0 auto;
	max-width: 750px;
	background-color: black;
  font-size: 10px;
  font-family: "aktiv-grotesk-std", sans-serif;
  color: white;
  font-weight: normal;
}

img {
  max-width: 100%;
  max-height: 100%;
}

h1 {
  font-size: 10rem;
  letter-spacing: -.5rem;
  font-weight: bold;
}

h2 {
  font-size: 6rem;
  font-weight: bold;
}

h3 {
  font-size: 4rem;
}

h4 {
  font-size: 3rem;
  font-weight: bold;
}


h5 {
  font-size: 1.7rem;
  font-weight: bold;
}


p {
  font-size: 1.3rem;
  line-height: 1.3rem;
}

main {
  padding-top: 20px;
}

.post_header {
  font-size: 50px;
}

header {
  position: sticky;
  top: 0;
}

/*  Media Queries */

@media (max-width: 750px) {
  body {
    max-width: 600px;
    font-size: 10px;
  }
}

@media (max-width: 600px) {
  body {
    max-width: 500px;
    font-size: 9px;
  }
}

@media (max-width: 500px) {
  body {
    max-width: 400px;
    font-size: 8px;
  }

  header {
    position: relative;
  }
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <TrashCan />
      <main>{children}</main>
      <TrashCan />
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
