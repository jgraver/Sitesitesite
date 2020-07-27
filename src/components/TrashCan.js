import React from "react"
import TrashCanUrl from "../images/joshua_graver_timetrasher.gif"
import styled from "styled-components"

const TrashCanStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 130px;

  img {
    width: 40px;
    height: 64px;
  }

  /* --- Media queries */ 

  @media (max-width: 500px) {
    display: none;
  }
`

export default function TrashCan(props) {
  return (
    <TrashCanStyles>
      <img alt="trashcan" src={TrashCanUrl} />
    </TrashCanStyles>
  )
}
