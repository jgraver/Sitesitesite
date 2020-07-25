import React from "react"
import { Link } from "gatsby"
import Button from "../components/Button"

import { INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styled from "styled-components"

const StubStyles = styled.div`
  .post {
    padding-top: 120px;
    width: 100%;
  }

  .post_banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  .post_description {
    font-size: 1rem;
  }
`

const IframeContainer = styled.span`
  padding-bottom: 56.25%;
  position: relative;
  display: block;
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Video = props => {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        console.log("node.data.uri", node.data.uri)
        if (node.data.uri.includes("player.vimeo.com/video")) {
          return (
            <IframeContainer>
              <iframe
                title="Unique Title 001"
                src={node.data.uri}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          )
        } else if (node.data.uri.includes("youtube.com")) {
          console.log("HELLO???????????????????????????")
          return (
            <IframeContainer>
              <iframe
                title="Unique Title 001"
                src={node.data.uri}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </IframeContainer>
          )
        }
      },
    },
  }

  return <div>{documentToReactComponents(props.json, options)}</div>
}

export default function ProjectStub(props) {
  const {
    title,
    media,
    projectDate,
    location,
    slug,
    videoLink,
    images,
    description,
  } = props

  const imgOptions = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  // console.log("images", images)

  console.log("videoLink", videoLink)

  return (
    <StubStyles>
      <div className="post">
        <div className="imageArea"></div>
        {images &&
          images.map(image => (
            <img key={image.fluid.src} src={image.fluid.src} alt="works?" />
          ))}
        {videoLink && Video(videoLink)}
        <div className="post_banner">
          <Link to={slug}>
            <Button name={title} fontSize="1.3rem" />
          </Link>
          <p className="post_location_date">{`${location} | ${projectDate}`}</p>
        </div>
      </div>

      <p className="post_description">{description.description}</p>
    </StubStyles>
  )
}

// return (
//   <>
//     <h1>video!</h1>

//     <IframeContainer>
//       <iframe
//         title="Unique Title 001"
//         src={subNode.data.uri}
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//     </IframeContainer>
//   </>
// )
