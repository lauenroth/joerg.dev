import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/comfortaa";
import "@fontsource/fira-code";
import { Link } from "gatsby";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #1d3557;
    --color-text: #f1faee;
    --color-secondary: #a8dadc;
    --color-ternary: #457b9d;
    --color-highlight: #e63946;
  }

  * {
    font-family: 'Comfortaa', Helvetica, Verdana, sans-serif;
  }

  html {
    background-color: var(--color-background);
  }

  body {
    background: conic-gradient(
        from 240deg at bottom right,
        var(--color-background),
        var(--color-secondary)
      )
      fixed;
    color: var(--color-text);
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 2.2rem;
    margin: 0 0 40px;
  }

  p {
    line-height: 1.5;
    margin: 0 0 20px;
  }

  a {
    color: var(--color-text);

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`;

const MainLayout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <MainNavigation>
      <h1>
        <Link to="/">jörg.dev</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/uses">uses</Link>
        </li>
      </ul>
    </MainNavigation>
    <MainWrapper>{children}</MainWrapper>
  </>
);

const MainNavigation = styled.nav`
  align-items: center;
  display: flex;
  height: 120px;
  padding: 0 60px;

  h1 {
    align-items: center;
    display: flex;
    font-family: "Fira Code";
    font-size: 1.6rem;
    margin: 0 6rem 0 0;

    a {
      color: var(--color-text);
      font-family: inherit;
      text-decoration: none;

      &::before {
        content: "<";
        position: relative;
        right: 5px;
        transition: 0.2s;
      }
      &::after {
        content: ">";
        left: 5px;
        position: relative;
        transition: 0.2s;
      }

      &:hover::before {
        right: 2px;
      }
      &:hover::after {
        left: 2px;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(45px, 1fr));
    grid-column-gap: 3rem;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li {
    list-style: none;

    a {
      color: var(--color-text);
      text-decoration: none;
    }
  }

  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;

const MainWrapper = styled.main`
  > section {
    margin: 0 auto;
    padding: 100px 60px;
    max-width: 1000px;
  }

  .delete {
    opacity: 0.7;
    text-decoration: line-through;
  }

  @media (max-width: 1000px) {
    > section {
      padding: 50px 20px;
    }
  }
`;

export default MainLayout;
