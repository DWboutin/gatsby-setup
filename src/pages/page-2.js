import React from 'react'
import { FormattedMessage } from 'react-intl'
import { withIntl, Link } from '../i18n'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1><FormattedMessage id="titlePage2" /></h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default withIntl(SecondPage)
