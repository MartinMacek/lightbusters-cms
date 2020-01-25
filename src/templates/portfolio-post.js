import React, { useEffect } from "react"
import PropTypes from "prop-types"
// import { kebabCase } from "lodash";
import Helmet from "react-helmet"
import {
  graphql,
  //Link
} from "gatsby"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import Content, { HTMLContent } from "../components/Content"
import ImageZoom from "react-medium-image-zoom"
//import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  url,
  title,
  client,
  coop,
  images,
  date,
  helmet,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const PostContent = contentComponent || Content

  const video_id = url.replace("https://vimeo.com/", "")
  const coopItems = coop != null ? coop.split(";") : []

  return (
    <Layout>
      <section>
        <Navbar />
        {helmet || ""}

        <div className="container content">
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth mobile-section">
              <h1
                className="title is-size-3 has-text-centered"
                style={{ marginBottom: "3rem" }}
              >
                <b className="main-color">{title}</b>
              </h1>
              <div
                className="desktop-vid"
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                  marginBottom: "2rem",
                }}
              >
                <iframe
                  src={"https://player.vimeo.com/video/" + video_id}
                  title="video"
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" />

              <div
                className="mobile-galery"
                style={{ marginBottom: "3rem", color: "black" }}
              >
                {images &&
                  images.length &&
                  images.map((galleryImage, key) => (
                    <div key={key}>
                      {galleryImage.image.publicURL && (
                        <ImageZoom
                          defaultStyles={{
                            overlay: { backgroundColor: "#000000" },
                          }}
                          image={{
                            src: galleryImage.image.publicURL,
                            alt: "small gallery image",
                            className: "img",
                          }}
                          zoomImage={{
                            src: galleryImage.image.publicURL,
                            alt: "big gallery image",
                            style: { backgroundColor: "black" },
                          }}
                        />
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth mobile-section">
              <div className="columns">
                <div className="column is-three-fifths">
                  <h4>O projektu</h4>
                  <p className="portfolio-detail-description">{description}</p>
                  <PostContent content={content} />
                </div>
                <div className="column">
                  <div>
                    {client && (
                      <div className="title-separator">
                        <h4>Klient</h4>
                        <b>{client}</b>
                      </div>
                    )}

                    <div className="title-separator">
                      <h4>Vytvořeno</h4>
                      <b>{date}</b>
                    </div>

                    {tags && tags.length ? (
                      <div>
                        <h4>Kategorie</h4>
                        <ul className="taglist">
                          {tags.map(tag => (
                            <li key={tag + `tag`}>
                              {/*<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>*/}
                              <b>#{tag}</b>
                            </li>
                          ))}
                        </ul>{" "}
                      </div>
                    ) : null}
                    {coop && (
                      <div className="title-separator">
                        <h4>Spolupráce</h4>
                        <b>
                          {coopItems.map((coopItem, key) => (
                            <span key={key}>
                              {coopItem} <br />
                            </span>
                          ))}
                        </b>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <PortfolioPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet titleTemplate="%s | Portfolio">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      tags={post.frontmatter.tags}
      url={post.frontmatter.url}
      coop={post.frontmatter.coop}
      title={post.frontmatter.title}
      client={post.frontmatter.client}
      images={post.frontmatter.images}
      date={post.frontmatter.date}
    />
  )
}

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PortfolioPost

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        client
        description
        tags
        coop
        url
        images {
          image {
            publicURL
          }
        }
      }
    }
  }
`
