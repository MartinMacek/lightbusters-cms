import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
//import PreviewCompatibleImage from "./PreviewCompatibleImage";
import AniLink from "gatsby-plugin-transition-link/AniLink";

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="portfolioposts">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="tile-container tile-item">
              <AniLink fade duration={1} to={post.fields.slug}>
                {post.frontmatter.featuredimage ? (
                  <div
                    className="tile-thumbnail featured-thumbnail"
                    style={{
                      backgroundImage: `url(${
                        post.frontmatter.featuredimage.childImageSharp
                          ? post.frontmatter.featuredimage.childImageSharp.fluid
                              .src
                          : post.frontmatter.featuredimage
                      })`
                    }}
                  >
                    {/*<PreviewCompatibleImage
                                          imageInfo={{
                                            image: post.frontmatter.featuredimage,
                                            alt: `featured image thumbnail for post ${post.title}`
                                          }}
                                        />*/}
                  </div>
                ) : null}

                <div className="center">
                  <h3>
                    <b className="tile-text">{post.frontmatter.title}</b>
                  </h3>

                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "lightgray"
                    }}
                  >
                    {post.frontmatter.tags.map((tag, key) => (
                      <span key={key}>#{tag} </span>
                    ))}
                  </p>
                </div>
              </AniLink>
            </div>
          ))}
      </div>
    );
  }
}

PortfolioRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query PortfolioRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                tags
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PortfolioRoll data={data} count={count} />}
  />
);
