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

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  url,
  title,
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
            <div className="column is-one-third">
              <h1 className="title is-size-2">
                <b className="gradient-text">{title}</b>
              </h1>

              <p>{description}</p>
              <PostContent content={content} />
              <div className="gradient-divider" />
              <div style={{ marginTop: `3rem` }}>
                {/*coop && (
                  <div className="title-separator">
                    <h4>Spolupráce s</h4>
                    <b>{coop}</b>
                  </div>
                )*/}

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
              </div>
            </div>
            <div className="column is-two-third">
              <div
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

              {/*galleryImages &&
                galleryImages.length &&
                galleryImages.map(galleryImage => (
                  <ImageZoom
                    image={{
                      src: galleryImage.image,
                      alt: "small gallery image",
                      className: "img",
                      style: { maxHeight: "8em" }
                    }}
                    zoomImage={{
                      src: galleryImage.image,
                      alt: "big gallery image"
                    }}
                  />
                ))*/}
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
      date={post.frontmatter.date}
      title={post.frontmatter.title}
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
        url
      }
    }
  }
`;
