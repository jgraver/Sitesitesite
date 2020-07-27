import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectsStyles from "../styles/ProjectsStyles.js"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProjectStub from "../templates/ProjectStub"

export default function Index(props) {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(
        filter: { media: { eq: "Print" } }
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

  // console.log(description)
  const edges = data.allContentfulProject.edges

  return (
    <Layout>
      <SEO title="Burger" />

      <ProjectsStyles>
        <h1 className="post_header">print</h1>
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
