import React, { useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import "@fontsource/comfortaa";
import "@fontsource/fira-code";
import { Link } from "gatsby";
import AltesMuseum from "../images/altes_museum.jpeg";
import Bellevue from "../images/bellevue.jpeg";
import Cinquantenaire from "../images/cinquantenaire.jpeg";
import Flachau from "../images/flachau.jpeg";
import Ghent from "../images/ghent.jpeg";
import HumboldtForum from "../images/humboldt_forum.jpeg";
import Kellenhusen from "../images/kellenhusen.jpeg";
import Roma from "../images/roma.jpeg";
import Zoo from "../images/zoo.jpeg";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-background: #1d3557;
    --color-text: #f1faee;
    --color-secondary: #a8dadc;
    --color-ternary: #457b9d;
    --color-highlight: #e63946;

    --max-width: 1200px;
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

const MainLayout: React.FC = ({ children }) => {
  useEffect(() => {
    console.log(
      "%cHey there! 👋",
      "font-size: 26px; font-family: Verdana, sans-serif; color: #f1faee; text-shadow: 2px 2px 0 #457b9d, 4px 4px #1d3557;"
    );
    console.log(
      "%cGot any questions about this website?",
      "font-size: 18px; font-family: Verdana, sans-serif; color: #f1faee; text-shadow: 2px 2px 0 #457b9d, 4px 4px #1d3557;"
    );
    console.log(
      "%cFeel free to ask me anything via hi@jörg.dev",
      "font-size: 18px; font-family: Verdana, sans-serif; color: #f1faee; text-shadow: 2px 2px 0 #457b9d, 4px 4px #1d3557;"
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <MainNavigation>
        <h1>
          <Link to="/">jörg.dev</Link>
        </h1>

        <input type="checkbox" id="overlay-input" />
        <label htmlFor="overlay-input" id="overlay-button">
          <span></span>
        </label>

        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          {/* <li>
            <Link to="/projects">projects</Link>
          </li> */}
          {/* <li>
          <Link to="/music">music</Link>
        </li>
        <li>
          <Link to="/cooking">cooking</Link>
        </li> */}
          <li>
            <Link to="/uses">uses</Link>
          </li>
        </ul>
      </MainNavigation>
      <MainWrapper>{children}</MainWrapper>
      <MainFooter>
        <section>
          <div>
            <h2>Let's connect</h2>
            <ul>
              <li>
                <a href="https://github.com/lauenroth">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  Github
                </a>
              </li>
              <li>
                <a href="https://twitter.com/lauenroth">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"></path>
                  </svg>
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://de.linkedin.com/in/joerglauenroth">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/lauenroth/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Photo stream</h3>
            <Gallery>
              <a href="https://www.instagram.com/p/CJHCgoSgchw/">
                <img src={AltesMuseum} alt="Altes Museum, Berlin" />
              </a>
              <a href="https://www.instagram.com/p/BHCjWn1AtIy/">
                <img
                  src={Cinquantenaire}
                  alt="Parc du Cinquantenaire, Brussels"
                />
              </a>
              <a href="https://www.instagram.com/p/BG9-c1UuzOG/">
                <img src={Ghent} alt="Ghent, Belgium" />
              </a>
              <a href="https://www.instagram.com/p/Bibwnc9lIqo/">
                <img src={Zoo} alt="Zoo, Berlin" />
              </a>
              <a href="https://www.instagram.com/p/B8ORsZOC_X5/">
                <img src={Flachau} alt="Reitdorf, Austria" />
              </a>
              <a href="https://www.instagram.com/p/CJHCYGrgU-m/">
                <img src={HumboldtForum} alt="Humboldt Forum, Berlin" />
              </a>
              <a href="https://www.instagram.com/p/CC58G_zJFWL/">
                <img src={Kellenhusen} alt="Kellenhusen" />
              </a>
              <a href="https://www.instagram.com/p/BVQApT4DTL3/">
                <img src={Roma} alt="Collosseum, Rome" />
              </a>
              <a href="https://www.instagram.com/p/BJhlrHyA6UP/">
                <img src={Bellevue} alt="Bellevue, Berlin" />
              </a>
            </Gallery>
          </div>
        </section>
        <section>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy-notice">Privacy notice</Link>
        </section>
      </MainFooter>
    </>
  );
};

const MainNavigation = styled.nav`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--max-width);
  padding: 0 60px;

  #overlay-button,
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ #overlay-button {
    &:hover span,
    span {
      background: transparent;
    }
    span {
      &:before {
        transform: rotate(45deg) translate(7px, 7px);
        opacity: 1;
      }
      &:after {
        transform: rotate(-45deg) translate(7px, -7px);
      }
    }
  }

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
    display: flex;
    /* grid-template-columns: repeat(auto-fill, minmax(45px, 1fr)); */
    /* grid-column-gap: 3rem; */
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;

    a {
      color: var(--color-text);
      display: block;
      margin-left: 3rem;
      opacity: 0.8;
      position: relative;
      text-decoration: none;
      transition: 0.25s;

      &::before {
        bottom: 0;
        left: -7px;
        content: "<";
        opacity: 0;
        position: absolute;
        transition: 0.25s;
      }
      &::after {
        bottom: 0;
        content: ">";
        opacity: 0;
        position: absolute;
        right: -7px;
        transition: 0.25s;
      }

      &:hover,
      &:focus {
        opacity: 1;

        &::before {
          left: -14px;
          opacity: 1;
        }
        &::after {
          right: -14px;
          opacity: 1;
        }
      }
    }
  }

  @media (max-width: 900px) {
    padding: 0 20px;
  }

  @media (max-width: 800px) {
    height: 70px;

    #overlay-button {
      cursor: pointer;
      display: block;
      padding: 26px 11px;
      position: absolute;
      right: 10px;
      top: 5px;
      user-select: none;
      z-index: 5;

      span {
        background-color: var(--color-text);
        border-radius: 2px;
        display: block;
        height: 4px;
        opacity: 0.7;
        position: relative;
        transition: all 0.15s ease-in-out;
        width: 30px;

        &:before {
          top: -10px;
          visibility: visible;
        }
        &:after {
          top: 10px;
        }
        &:before,
        &:after {
          background-color: white;
          border-radius: 2px;
          content: "";
          height: 4px;
          position: absolute;
          transition: all 0.15s ease-in-out;
          width: 30px;
        }
      }
      &:hover span,
      &:hover span:before,
      &:hover span:after {
        opacity: 1;
      }
    }

    ul {
      background-color: var(--color-background);
      bottom: 0;
      display: none;

      left: 0;
      opacity: 0;
      position: fixed;
      right: 0;
      top: 0;
    }

    input[type="checkbox"]:checked ~ ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      opacity: 1;
    }

    li {
      a {
        align-items: center;
        /* border-bottom: 1px solid #abc; */
        display: flex;
        font-size: 32px;
        height: 100%;
        justify-content: center;
        margin: 30px 0;

        &::before,
        &::after {
          display: none;
        }
      }
    }
  }
`;

const MainWrapper = styled.main`
  min-height: 80vh;

  > section {
    margin: 0 auto;
    padding: 100px 60px;
    max-width: var(--max-width);
  }

  .delete {
    opacity: 0.7;
    text-decoration: line-through;
  }

  @media (max-width: 900px) {
    > section {
      padding: 50px 20px;
    }
  }
`;

const MainFooter = styled.footer`
  background-color: var(--color-background);
  margin-top: auto;

  h2 {
    font-size: 1.2rem;
  }

  h2 a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  > section {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 30px 60px;

    &:first-child {
      display: grid;
      grid-template-columns: auto 700px;

      ul {
        list-style: none;
        padding: 0;
      }

      li a {
        align-items: center;
        display: inline-flex;
        margin-bottom: 15px;
        position: relative;

        &::before {
          bottom: 6px;
          content: "<";
          left: 45px;
          opacity: 0;
          position: absolute;
          transition: 0.25s;
        }

        &::after {
          bottom: 6px;
          content: ">";
          right: -8px;
          opacity: 0;
          position: absolute;
          transition: 0.25s;
        }

        &:hover {
          &::after {
            opacity: 1;
            right: -12px;
          }
          &::before {
            left: 38px;
            opacity: 1;
          }
          /* text-decoration: underline; */
        }

        svg {
          margin-right: 20px;
        }
      }
    }

    &:last-child {
      background-color: #222;
      font-size: 0.8rem;
      padding: 15px;
      position: relative;
      text-align: center;
      white-space: nowrap;

      a {
        &::before {
          content: "<";
          margin-right: 5px;
          opacity: 0;
          position: relative;
          right: -5px;
          transition: 0.25s;
        }

        &::after {
          content: ">";
          margin-left: 5px;
          opacity: 0;
          position: relative;
          left: -5px;
          transition: 0.25s;
        }

        &:hover,
        &:focus {
          &::before {
            opacity: 1;
            right: 0;
          }
          &::after {
            opacity: 1;
            left: 0;
          }
        }
      }
    }
  }

  a {
    text-decoration: none;
  }

  a svg {
    fill: var(--color-text);
    opacity: 0.6;
    transition: 0.25s;
  }
  a:hover svg,
  a:focus svg {
    opacity: 1;
  }

  @media (min-width: 900px) {
    > section:last-child {
      padding: 15px 360px;
    }
  }

  @media (max-width: 800px) {
    > section:first-child {
      grid: none;
      padding: 20px;
    }
  }
`;

const Gallery = styled.div`
  background-color: #fff;
  border-radius: 6px;
  height: 120px;
  overflow: auto;
  padding: 20px 0 20px 20px;
  width: 100%;

  > a {
    margin-bottom: 0;

    &:hover img {
      transform: scale(1.1);
    }
  }

  img {
    border-radius: 6px;
    height: 120px;
    margin: 0 20px 20px 0;
    transition: 0.25s;
  }
`;

export default MainLayout;
