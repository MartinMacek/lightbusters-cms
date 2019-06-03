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

export const PortfolioPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  url,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

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
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Kategorie</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        {/*<Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>*/}
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <div className="column is-two-third">
              <video width="320" height="240" controls className="post-video">
                <source src={url} />
              </video>
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        url
      }
    }
  }
`;
