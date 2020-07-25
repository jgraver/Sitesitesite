import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Out of luck, wiener.</p>
    <Link to="/">Return to main page.</Link>
  </Layout>
)

export default NotFoundPage
