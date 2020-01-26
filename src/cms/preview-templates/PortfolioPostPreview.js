import React from "react"
import PropTypes from "prop-types"
import { PortfolioPostTemplate } from "../../templates/portfolio-post"
import InternalProvider from "gatsby-plugin-transition-link/context/InternalProvider"

const PortfolioPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      // TODO: remove when the issues is fixed
      // add internal provider to overcome transition link issue
      // https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/161
      <InternalProvider>
        <PortfolioPostTemplate {...data} />
      </InternalProvider>
    )
  } else {
    return <div>Loading...</div>
  }
}

PortfolioPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PortfolioPostPreview
