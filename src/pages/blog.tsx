import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const BlogPage: React.FC = () => (
  <MainLayout>
    <Helmet>
      <title>Jörg.dev | blog</title>
    </Helmet>
    <BlogWrapper>
      <h1>Blog</h1>
      <p>
        I occasionally write about front-end development, cooking and other
        stuff.
      </p>

      <BlogPosts>
        <li>
          <h3>Code editor for Github</h3>
          <Tags>
            <li>development</li>
          </Tags>
        </li>
        <li>
          <h3>Caret color</h3>
          <Tags>
            <li>development</li>
            <li>front-end</li>
            <li>css</li>
          </Tags>
        </li>
        <li>
          <h3>Customizing the touch bar</h3>
          <Tags>
            <li>macOS</li>
          </Tags>
        </li>
      </BlogPosts>
    </BlogWrapper>
  </MainLayout>
);

const BlogWrapper = styled.section``;

const BlogPosts = styled.ul`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    background-color: var(--color-text);
    color: var(--color-background);
    border-radius: 4px;
    padding: 20px;

    h3 {
      margin: 0 0 20px;
      text-align: center;
    }
  }
`;

const Tags = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    background-color: var(--color-secondary);
    border-radius: 4px;
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

export default BlogPage;
