import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import {
  graphql
  //Link
} from "gatsby";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Content, { HTMLContent } from "../components/Content";
import ImageZoom from "react-medium-image-zoom";
//import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  url,
  title,
  coop,
  images,
  date,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  const video_id = url.replace("https://vimeo.com/", "");

  return (
    <Layout>
      <section>
        <Navbar />
        {helmet || ""}

        <div className="container content">
          <div className="columns">
            <div className="column is-one-third mobile-section">
              <h1 className="title is-size-3 gradient-text">{title}</h1>

              <p>{description}</p>
              <PostContent content={content} />
              <div className="gradient-divider" />
              <div
                className="mobile-vid"
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                  margin: "2rem 0rem"
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
                    height: "100%"
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" />
              <div style={{ marginTop: `3rem` }}>
                <div className="title-separator">
                  <h4>Klient</h4>
                  <b>Someone</b>
                </div>

                <div className="title-separator">
                  <h4>Datum</h4>
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
                    <h4>Spolupráce s</h4>
                    <b>{coop}</b>
                  </div>
                )}
              </div>
            </div>
            <div className="column is-two-third">
              <div
                className="desktop-vid"
                style={{
                  padding: "56.25% 0 0 0",
                  position: "relative",
                  marginBottom: "2rem"
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
                    height: "100%"
                  }}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>
              <script src="https://player.vimeo.com/api/player.js" />

              <div className="mobile-galery" style={{ marginBottom: "3rem" }}>
                {images &&
                  images.length &&
                  images.map((galleryImage, key) => (
                    <div key={key}>
                      <ImageZoom
                        defaultStyles={{
                          overlay: { backgroundColor: "#000000" }
                        }}
                        image={{
                          src: galleryImage.image.publicURL,
                          alt: "small gallery image",
                          className: "img"
                        }}
                        zoomImage={{
                          src: galleryImage.image.publicURL,
                          alt: "big gallery image",
                          style: { backgroundColor: "black" }
                        }}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

PortfolioPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const PortfolioPost = ({ data }) => {
  const { markdownRemark: post } = data;

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
      images={post.frontmatter.images}
      date={post.frontmatter.date}
    />
  );
};

PortfolioPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default PortfolioPost;

export const pageQuery = graphql`
  query PortfolioPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        title
        description
        tags
        coop
        url
        images {
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 50) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
            publicURL
          }
          alt
        }
      }
    }
  }
`;
