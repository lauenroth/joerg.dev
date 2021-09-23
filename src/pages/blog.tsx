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
        <li style={{ backgroundImage: "url(/images/github1.png" }}>
          <footer>
            <h3>Code editor for Github</h3>
            <Tags>
              <li>development</li>
            </Tags>
          </footer>
        </li>
        <li>
          <footer>
            <h3>Caret color</h3>
            <Tags>
              <li>development</li>
              <li>front-end</li>
              <li>css</li>
            </Tags>
          </footer>
        </li>
        <li style={{ backgroundImage: "url(/images/touchbar.jpg" }}>
          <footer>
            <h3>Customizing the touch bar</h3>
            <Tags>
              <li>macOS</li>
            </Tags>
          </footer>
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
    animation: fadeIn 0.75s;
    background-color: var(--color-text);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    color: var(--color-background);
    display: flex;
    flex-direction: column;
    min-height: 275px;
    position: relative;
    transition: 0.2s;

    h3 {
      margin: 0 0 20px;
      text-align: center;
    }

    &:hover {
      cursor: pointer;
      transform: scale(1.03);

      footer {
        opacity: 1;
      }
    }
  }

  footer {
    background-color: var(--color-text);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: auto;
    opacity: 0.95;
    padding: 20px;
    transition: 0.2s;
  }

  @media (max-width: 850px) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 2fr;
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
