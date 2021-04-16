import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import MainLayout from "../components/MainLayout";
import SetupImage from "../images/setup.webp";

const UsesPage: React.FC = () => (
  <MainLayout>
    <Helmet>
      <title>Jörg.dev | uses</title>
    </Helmet>
    <Wrapper>
      <h2>My setup</h2>
      <p>
        I'm quite happy with my current setup. It's very useful in these
        pandemic times we're currently living in.
      </p>
      <p>
        <img src={SetupImage} />
      </p>
      <h3>Hardware</h3>
      <ul>
        <li>
          <a href="https://www.apple.com/macbook-pro-13/">
            Macbook Pro 13" (2020)
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/Dell-PF48H-21-5-Inch-Discontinued-Manufacturer/dp/B005OHPW1Q">
            21.5" Dell U2212HM monitor
          </a>
        </li>
        <li>
          <a href="https://www.apple.com/de/shop/product/MQ052Z/A/magic-keyboard-mit-ziffernblock-englisch-international-silber">
            Magic Keyboard with numeric keypad
          </a>
        </li>
        <li>
          <a href="https://www.apple.com/de/shop/product/MJ2R2Z/A/magic-trackpad-2-silber">
            Magic Trackpad 2
          </a>
        </li>
        <li>
          <a href="https://www.inwerk-bueromoebel.de/made-by-inwerk/hoehenverstellbare-schreibtische-masterlift/masterlift2/">
            INWERK Masterlift 2
          </a>{" "}
          - Standing desk
        </li>
        <li>
          <a href="https://www.samsung.com/global/galaxy/galaxy-buds-pro/">
            Galaxy Buds Pro
          </a>
        </li>
        <li>
          <a href="https://www.amazon.de/gp/product/B089VX137D/">
            bossgo charging station
          </a>
        </li>
      </ul>

      <h3>Software</h3>
      <ul>
        <li>
          <a href="https://code.visualstudio.com/">Visual Studio Code</a> - Code
          editor
        </li>
        <li>
          <a href="https://brave.com/">Brave Browser</a> - Privacy browser
        </li>
        <li>
          <a href="https://www.notion.so/">Notion</a> - Notes
        </li>
        <li>
          <a href="https://www.tableplus.io/">TablePlus</a> - Database
          management
        </li>
        <li>
          <a href="https://iterm2.com/">iTerm2</a> - MacOS terminal
        </li>
        <li>
          <a href="https://www.spotify.com/">Spotify</a> - Music streaming
        </li>
      </ul>
    </Wrapper>
  </MainLayout>
);

const Wrapper = styled.section`
  img {
    border-radius: 4px;
    max-width: 100%;
  }

  h3 {
    margin-top: 60px;
  }

  li {
    line-height: 1.5;
  }
`;

export default UsesPage;
