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

const MainLayout: React.FC = ({ children }) => (
  <>
    <GlobalStyle />
    <MainNavigation>
      <h1>
        <Link to="/">jörg.dev</Link>
      </h1>
      <ul>
        <li>
          <Link to="/aboutt">about</Link>
        </li>
        <li>
          <Link to="/projects">projects</Link>
        </li>
        <li>
          <Link to="/music">music</Link>
        </li>
        <li>
          <Link to="/cooking">cooking</Link>
        </li>
        <li>
          <Link to="/uses">uses</Link>
        </li>
      </ul>
    </MainNavigation>
    <MainWrapper>{children}</MainWrapper>
    <MainFooter>
      <section>
        <h3>
          <a href="https://www.instagram.com/lauenroth/">Instagram</a>
        </h3>
        <Gallery>
          <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/132090331_402509710994049_8952866939266705046_n.jpg?tp=1&_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=gU0lOQSyaAQAX-wGUqD&edm=AABBvjUAAAAA&ccb=7-4&oh=8fbc371152d9bca61aca3a11013450e2&oe=609E5AAE&_nc_sid=83d603" />
          <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/13398744_1745194305762525_1495246471_n.jpg?tp=1&_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=dic9LmtVT5gAX_GeK1j&edm=AP_V10EAAAAA&ccb=7-4&oh=1d59f32b5c538a016e3d281d1777d031&oe=609F469A&_nc_sid=4f375e" />
          <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/e35/84705540_194664208560143_5603665843698671134_n.jpg?tp=1&_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=111&_nc_ohc=_EPjgciJwtMAX_WNcJ1&edm=AP_V10EAAAAA&ccb=7-4&oh=49de395e7d6ca971ebddc5c6f02b34a1&oe=60A03CF7&_nc_sid=4f375e" />
          <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/13423067_465821903611313_178480076_n.jpg?tp=1&_nc_ht=scontent-frx5-1.cdninstagram.com&_nc_cat=105&_nc_ohc=znD_DbIzTo4AX_uLa08&edm=AP_V10EAAAAA&ccb=7-4&oh=1666c05d4c47df9693ec0f0e89ba531d&oe=60A08CE7&_nc_sid=4f375e" />
          <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/83103497_121441269229394_161422819949146411_n.jpg?tp=1&_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=102&_nc_ohc=l-0wYmTkIIgAX-lT5aZ&tn=69tHmlsoDHvWPaT0&edm=AP_V10EAAAAA&ccb=7-4&oh=82d325164a961647b6162958421c26c7&oe=60A01DB3&_nc_sid=4f375e" />
          <img src="https://scontent-frt3-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/66071288_127663805169304_835903907610460472_n.jpg?tp=1&_nc_ht=scontent-frt3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=1jU3TL6N1OkAX_Kmzt3&edm=AABBvjUAAAAA&ccb=7-4&oh=2e1eac12e722e2bb03147593aa537d8d&oe=60A0CDBB&_nc_sid=83d603" />
        </Gallery>
      </section>
      <section>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </section>
    </MainFooter>
  </>
);

const MainNavigation = styled.nav`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: space-between;
  margin: 0 auto;
  max-width: var(--max-width);
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

  @media (max-width: 1000px) {
    padding: 0 20px;
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

  @media (max-width: 1000px) {
    > section {
      padding: 50px 20px;
    }
  }
`;

const MainFooter = styled.footer`
  background-color: var(--color-background);
  margin-top: auto;

  h3 a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  > section {
    max-width: var(--max-width);
    padding: 30px 60px;

    &:last-child {
      background-color: #222;
      font-size: 0.8rem;
      padding: 15px 60px;
      text-align: center;

      a {
        text-decoration: none;

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

  img {
    border-radius: 6px;
    height: 120px;
    margin-right: 20px;
  }
`;

const Gallery = styled.div`
  background-color: #fff;
  border-radius: 6px;
  overflow: auto;
  padding: 20px 0 20px 20px;
  white-space: nowrap;
`;

export default MainLayout;
