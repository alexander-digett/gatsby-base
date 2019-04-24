import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../regions/header'
import Footer from '../regions/footer'
import './layout.css';
import Footercopy from '../regions/footercopy';
import PageTransition from 'gatsby-v2-plugin-page-transitions';
import * as variable from '../variables'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            logo
          }
        }
      }
    `}
    render={data => (
      <>
        <Header 
        siteTitle={data.site.siteMetadata.title} 
        logo={data.site.siteMetadata.logo}
        variable={variable}
        />
        <div>
        <PageTransition>
          {children}
        </PageTransition>
          <Footer />
          <Footercopy />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
