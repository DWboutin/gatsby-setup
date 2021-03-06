import React from 'react'
import Layout from '../components/layout'
import { withIntl, Link } from '../i18n'

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withIntl(NotFoundPage)
