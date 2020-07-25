import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  padding: 5px;
  margin-right: 7px;
  /* background-color: black; */
  background-image: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
  background-size: auto 200%;
  color: white;
  font-weight: bold;
  font-size: ${props => props.fontSize};
  border: white solid 1px;
  box-shadow: 4px 4px 0px 0px #000000;
  transition: 0.5s ease-in-out;

  &:hover {
    background-position: left bottom;
    /* position: relative;
    top: 3px;
    padding: 5px;
    color: white;
    background-color: black;
    border: white solid 1px;
    box-shadow: none; */
  }

  &:active {
    position: relative;
    top: 3px;
    padding: 5px;
    color: white;
  }

  &:focus {
    outline: 0 !important;
    box-shadow: 0 !important;
  }
`

export default function Button(props) {
  return <StyledButton {...props}>{props.name}</StyledButton>
}
