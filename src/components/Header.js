import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Button from "./Button"

const HeaderStyles = styled.header`
  #navwrapper {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 750px;
    max-height: 70px;
    background-color: rgba(0, 0, 0, 0.7);
    box-shadow: black 0px 10px 10px -10px;
    color: white;
    font-family: aktiv-grotesk-std, sans-serif;
    font-size: 1.5rem;
    z-index: 29;
    padding: 20px 0px;
    margin: 0 auto;
  }

  #info1 {
    font-weight: bold;
    color: white;
    font-family: "aktiv-grotesk-std", sans-serif;
    font-size: 1.5rem;
  }

  #info3 {
  }

  #info3 ul {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  #info3 ul li a {
    font-family: "aktiv-grotesk-std", sans-serif;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
  }

  /*  Media Queries */

  @media (max-width: 800px) {
    #navwrapper {
      max-width: 600px;
      /* min-width: 600px; */
    }
  }

  @media (max-width: 600px) {
    #navwrapper {
      max-width: 450px;
      /* min-width: 425px; */
      font-size: 1.3rem;
    }
  }

  @media (max-width: 500px) {
    #navwrapper {
      flex-flow: column nowrap;
      max-width: 440px;
      /* border: 1px solid red; */
    }
    #info1 {
      padding-left: 10px;
      align-self: flex-start;
    }

    #info3 {
      padding-top: 10px;
      padding-right: 10px;
      align-self: flex-end;
    }
  }

  @media (max-width: 450px) {
    #navwrapper {
      max-width: 400px;
      flex-flow: column nowrap;
      /* border: 1px solid red; */
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <div id="navwrapper">
      <div id="info1">
        <Link to="/">
          <p>joshua graver</p>
        </Link>
      </div>

      <div id="info3">
        <ul>
          <li>
            <Link to="/">
              <Button name="recent(ish)" />
            </Link>
          </li>
          <li>
            <Link to="/print">
              <Button name="print" />
            </Link>
          </li>
          <li>
            <Link to="/motion">
              <Button name="motion" />
            </Link>
          </li>
          <li>
            <Link to="/sound">
              <Button name="sound" />
            </Link>
          </li>
          <li>
            <Link to="/todos">
              <Button name="all" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </HeaderStyles>
)

export default Header
