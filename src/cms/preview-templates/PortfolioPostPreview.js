import React from "react"
import PropTypes from "prop-types"
import { PortfolioPostTemplate } from "../../templates/portfolio-post"

const PortfolioPostPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  console.log(data)

  if (data) {
    return <PortfolioPostTemplate {...data} />
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
