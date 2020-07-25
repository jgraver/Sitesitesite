import React from "react"
import PropTypes from "prop-types"
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
`

const propTypes = {}

const defaultProps = {}

export default function TrashCan(props) {
  return (
    <TrashCanStyles>
      <img alt="trashcan" src={TrashCanUrl} />
    </TrashCanStyles>
  )
}

TrashCan.propTypes = propTypes
TrashCan.defaultProps = defaultProps
