import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { GlobalStyle } from "./MainLayout";

const ComputerLayout: React.FC = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Helmet>
      <title>Computer AG</title>
    </Helmet>
    <header>
      <h1>
        <a href="/ag">
          Computer AG <span>Grundschule am Rüdesheimer Platz</span>
        </a>
      </h1>
    </header>
    <main>{children}</main>
  </Wrapper>
);

const Wrapper = styled.section`
  > header {
    align-items: center;
    background-color: #fff;
    color: var(--color-background);
    display: flex;
    justify-content: center;
    min-height: 100px;

    h1 {
      background: url(https://foerderverein-garp.de/images/logo.jpg) no-repeat
        left;
      background-size: 30px;
      margin: 0 0 0 -35px;
      padding: 20px 0 20px 50px;

      a {
        color: var(--color-background);
        text-decoration: none;
      }

      span {
        display: block;
        font-size: 0.6rem;
        padding-top: 4px;
      }
    }
  }

  main {
    align-items: flex-start;
    display: grid;
    gap: 30px;
    grid-template-columns: auto 300px;
    margin: 0 auto;
    max-width: 1000px;
    padding: 30px;

    > section {
      h1 {
        font-size: 1.8rem;
        font-weight: normal;
        line-height: 1.5;
      }
    }

    > aside {
      background-color: #fff;
      border-radius: 10px;
      color: var(--color-background);
      display: grid;
      font-size: 0.9rem;
      gap: 20px;
      margin-top: 40px;
      padding: 30px 20px 20px;
      position: relative;
      text-align: justify;

      h3 {
        font-size: 1.4rem;
        margin: 0;
      }

      a {
        color: var(--color-background);
      }

      p {
        margin: 0;
      }
    }
  }

  @media (max-width: 800px) {
    main {
      gap: 20px;
      grid-template-columns: auto;
      padding: 20px;
    }
  }

  @media (max-width: 500px) {
    .btn {
      display: block;
    }
  }
`;

export default ComputerLayout;
