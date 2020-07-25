import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Button from "./Button"

const FooterStyles = styled.footer`
  margin-top: 3rem;
  margin-bottom: 3rem;
  border-top: 1px solid white;
  padding-top: 10px;
  text-align: right;
`

const Footer = ({ siteTitle }) => (
  <FooterStyles>
    <p>Josh's Super Cool Footer</p>
  </FooterStyles>
)

export default Footer
