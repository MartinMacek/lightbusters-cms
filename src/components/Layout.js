import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import "./all.sass"
import useSiteMetadata from "./SiteMetadata"

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="cs" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/apple-touch-icon.png"
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.png" />
      </Helmet>

      <div className="page">{children}</div>
      <div className="cr">
        ©LightBusters 2019
        {/*<a href="https://www.linkedin.com/in/martinmacek/">Designed by MM</a>*/}
      </div>
    </div>
  )
}

TemplateWrapper.propTypes = { children: PropTypes.node.isRequired }

export default TemplateWrapper
