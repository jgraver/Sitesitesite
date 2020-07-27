import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectStub from "../templates/ProjectStub"

const ProjectsStyles = styled.div`
  .post_header {
    /* margin-top: 70px; */
    margin-bottom: 0px;
    font-size: 6rem;
    letter-spacing: -0.5rem;
    font-weight: bold;
  }

  .post {
    padding-top: 70px;
    width: 100%;
    margin-bottom: 0px;
    /* border: 1px solid yellowgreen; */
  }

  /* ----- Media queries --- */

  @media (max-width: 600px) {
    .post_header {
      font-size: 5rem;
      letter-spacing: -0.3rem;
      text-align: center;
    }
  }
`

export default function Index(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(
        filter: { media: { eq: "Sound" } }
        sort: { fields: projectDate, order: DESC }
      ) {
        edges {
          node {
            title
            slug
            media
            location
            projectDate(formatString: "MMMM YYYY")
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
      }
    }
  `)

  const edges = data.allContentfulProject.edges

  return (
    <Layout>
      <SEO title="Burger" />

      <ProjectsStyles>
        <h1 className="post_header">sound</h1>
        {edges.map(edge => {
          const {
            title,
            media,
            projectDate,
            location,
            slug,
            images,
            videoLink,
            description,
          } = edge.node

          return (
            <ProjectStub
              className="post"
              key={slug}
              {...{
                title,
                media,
                projectDate,
                location,
                slug,
                images,
                videoLink,
                description,
              }}
            />
          )
        })}
      </ProjectsStyles>
    </Layout>
  )
}
