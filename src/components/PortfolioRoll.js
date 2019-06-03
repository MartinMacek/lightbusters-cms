import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class PortfolioRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="masonry-with-columns">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id} className="tile-container">
              <Link to={post.fields.slug}>
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.title}`
                      }}
                    />
                  </div>
                ) : null}

                <div className="overlay" />
                <h3 className="tile-text">{post.frontmatter.title}</h3>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "gray"
                  }}
                >
                  {post.frontmatter.tags}
                </p>

                {/*<article className={`blog-list-item tile is-child notification`}>
                              <header>
                                {post.frontmatter.featuredimage ? (
                                  <div className="featured-thumbnail">
                                    <PreviewCompatibleImage
                                      imageInfo={{
                                        image: post.frontmatter.featuredimage,
                                        alt: `featured image thumbnail for post ${post.title}`
                                      }}
                                    />
                                  </div>
                                ) : null}
                                <p className="post-meta">
                                  <Link
                                    className="title has-text-primary is-size-4"
                                    to={post.fields.slug}
                                  >
                                    {post.frontmatter.title}
                                  </Link>
                                  <span> &bull; </span>
                                  <span className="subtitle is-size-5 is-block">
                                    {post.frontmatter.date}
                                  </span>
                                </p>
                              </header>
                              <p>
                                {post.excerpt}
                                <br />
                                <br />
                                <Link className="button" to={post.fields.slug}>
                                  Keep Reading →
                                </Link>
                              </p>
                            </article>*/}
              </Link>
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
