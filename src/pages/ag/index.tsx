import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { GlobalStyle } from "../../components/MainLayout";
import jörgImage from "../../images/jorg.webp";

const ComputerAGPage: React.FC = () => (
  <Wrapper>
    <GlobalStyle />
    <Helmet>
      <title>Computer AG</title>
    </Helmet>
    <header>
      <h1>
        Computer AG <span>Grundschule am Rüdesheimer Platz</span>
      </h1>
    </header>
    <main>
      <section>
        <h1>Herzlich Willkommen bei der Computer AG!</h1>
        <p>
          Die Computer AG findet dienstags von 14-15 Uhr im Computerraum der
          Grundschule am Rüdesheimer Platz statt.
        </p>
      </section>
      <aside>
        <img src={jörgImage} width="120" height="120" alt="Jörg Lauenroth" />
        <p>Mein Name ist Jörg Lauenroth.</p>
        <p>
          Seit knapp 20 Jahren arbeite ich im Bereich Web-Entwicklung - derzeit
          als Front-end Lead bei <a href="https://www.worldia.com/">Worldia</a>.
        </p>
        <p>
          Meine beiden Töchter gehen auf die Grundschule am Rüdesheimer Platz,
          daher versuche ich mich dort zu engagieren. Seit Anfang 2020 im
          Förderverein und ab Ende 2021 mit der Computer AG.
        </p>
        <p>
          Bei Fragen erreichen Sie mich am besten per E-Mail an{" "}
          <a href="mailto:hi@jörg.dev">hi@jörg.dev</a>.
        </p>
      </aside>
    </main>
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

      span {
        display: block;
        font-size: 0.6rem;
        padding-top: 4px;
      }
    }
  }

  main {
    display: grid;
    gap: 30px;
    grid-template-columns: auto 300px;
    margin: 0 auto;
    max-width: 1000px;
    padding: 30px;

    > section {
    }

    > aside {
      background-color: var(--color-text);
      border-radius: 10px;
      color: var(--color-background);
      display: grid;
      font-size: 0.9rem;
      gap: 20px;
      margin-top: 50px;
      padding: 90px 20px 20px;
      position: relative;

      a {
        color: var(--color-background);
      }

      img {
        border: 4px solid #2a4a6c;
        border-radius: 50%;
        right: 86px;
        position: absolute;
        top: -50px;
      }

      p {
        margin: 0;
      }
    }

    @media (max-width: 800px) {
      gap: 20px;
      grid-template-columns: auto;
      padding: 20px;

      > aside img {
        right: calc(50% - 65px);
      }
    }
  }
`;

export default ComputerAGPage;
