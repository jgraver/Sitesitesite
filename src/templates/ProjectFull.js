import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import Button from "../components/Button"
import Video from "../components/Video"

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      projectDate(formatString: "MMMM YYYY")
      media
      location
      slug
      description {
        description
      }
      videoLink {
        json
      }
      images {
        fluid(maxWidth: 1000) {
          src
        }
      }
    }
  }
`

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

export default function ProjectFull(props) {
  const {
    title,
    projectDate,
    location,
    videoLink,
    images,
    description,
  } = props.data.contentfulProject

  return (
    <Layout>
      <StubStyles>
        <div className="post">
          <div className="imageArea"></div>
          {images &&
            images.map(image => (
              <img key={image.fluid.src} src={image.fluid.src} alt="works?" />
            ))}
          {videoLink && Video(videoLink)}
          <div className="post_banner">
            <Button name={title} fontSize="1.3rem" />
            <p className="post_location_date">{`${location} | ${projectDate}`}</p>
          </div>
        </div>

        <p className="post_description">{description.description}</p>
      </StubStyles>
    </Layout>
  )
}
