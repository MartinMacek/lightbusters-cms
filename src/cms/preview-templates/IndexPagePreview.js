import React from "react"
import PropTypes from "prop-types"
import { IndexPageTemplate } from "../../templates/index-page"
import InternalProvider from "gatsby-plugin-transition-link/context/InternalProvider"

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      // add internal provider to overcome transition link issue
      // https://github.com/TylerBarnes/gatsby-plugin-transition-link/issues/161
      <InternalProvider>
        <IndexPageTemplate {...data} />
      </InternalProvider>
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
