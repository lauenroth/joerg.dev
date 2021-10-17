import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled, { css } from "styled-components";
import MainLayout from "../components/MainLayout";
import jörgImage from "../images/jorg.webp";
import Helmet from "react-helmet";

// markup
const IndexPage: React.FC = () => {
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
    <MainLayout>
      <Helmet>
        <title>Jörg.dev</title>
      </Helmet>
      <Hello>
        <picture>
          <img src={jörgImage} width="360" height="360" alt="Jörg Lauenroth" />
        </picture>
        <div>
          <h1>
            Hey there!{" "}
            <span role="img" aria-label="wave emoji">
              👋
            </span>
            <br />
            My name is Jörg.
          </h1>
          <p>
            I'm a freelancing full-stack web developer based in Berlin, Germany.
          </p>
          <p>
            Currently, my main job position is front-end tech lead at{" "}
            <a href="https://www.worldia.com">Worldia</a>, a platform for
            tailor-made travelling. But I'm always involved in plenty of other
            projects as well.
          </p>
          <p>
            You can find more about me on my <Link to="/about">about page</Link>
            .
          </p>
          <p>
            If you are interested in working with me, please{" "}
            <Link to="/contact">drop me a line</Link>.
          </p>
        </div>
      </Hello>
      <ProjectSection>
        <h2>Förderverein GARP</h2>

        <section>
          <div>
            <p>
              As a member of the Förderverein (friends of the school club) at
              Grundschule am Rüdesheimer Platz, I am responsible for the
              development and maintenance of their website.
            </p>
            <p>
              Visitors can register to become a member, get information about
              the work of the Förderverein and financed projects.
            </p>
            <p>
              When it's time for the flea market, people can book a spot on the
              schoolyard over the website. You can also checkout the app I built
              for check-in and statistics for the flea market.
            </p>

            <Tags>
              <li>CraftCMS</li>
              <li>CSS / HTML</li>
              <li>Design</li>
            </Tags>
          </div>
          <aside>
            <p className="website">
              <div />
              <a href="https://foerderverein-garp.de/">
                <img
                  src="/images/projects/foerderverein.png"
                  alt="Website Förderverein GARP"
                />
              </a>
            </p>
            <p className="url">
              <a href="https://foerderverein-garp.de/">foerderverein-garp.de</a>
            </p>
          </aside>
        </section>
      </ProjectSection>
      <ProjectSection isAlt>
        <section>
          <div>
            <h2>Flea Market App</h2>
            <p>
              For the yearly flea market, organized by the Förderverein GARP, I
              developed an app to help implementing the hygiene protocol:
            </p>
            <p>
              People who registered a spot at the schoolyard via the website,
              got a confirmation email including a QR-Code. This code can be
              scanned by the app and the current status of the reservation is
              shown: registered, checked-in or payed.
            </p>
            <p>
              The app was connected via API to the CMS of the website, so that
              it was possible to use the app simultaneously by several people
              while having the data in sync.
            </p>
            <Tags>
              <li>React</li>
              <li>TypeScript</li>
              <li>Styled Components</li>
              <li>Design</li>
              <li>API</li>
            </Tags>
          </div>
          <aside>
            <p className="mobile">
              <img src="/images/projects/flea-market.png" alt="Flea market" />
            </p>
          </aside>
        </section>
      </ProjectSection>
      <ProjectSection>
        <section>
          <div>
            <h2>Perackis Architekten</h2>
            <p>
              I had the pleasure to implement the website for one of the finest
              architects in Berlin: Perackis Architekten.
            </p>
            <Tags>
              <li>CraftCMS</li>
              <li>CSS / HTML</li>
            </Tags>
          </div>
          <aside>
            <p className="website">
              <div />
              <a href="https://www.perackis.de/">
                <img
                  src="/images/projects/perackis.png"
                  alt="Perackis Architekten Website"
                />
              </a>
            </p>
            <p className="url">
              <a href="https://www.perackis.de/">perackis.de</a>
            </p>
          </aside>
        </section>
      </ProjectSection>
      <ProjectSection isAlt>
        <section>
          <div>
            <h2>Social network</h2>
            <p>
              I designed and implemented a simple social network for the
              movement <em>Aufbruch, jetzt!</em>. They needed a platform for
              discussions with a very special invitation system.
            </p>
            <p>
              This was an opportunity to give redwood.js a try. It was quite fun
              to implement and was my first real project with GraphQL.
            </p>
            <Tags>
              <li>Redwood.js</li>
              <li>React</li>
              <li>Styled components</li>
              <li>GraphQL</li>
              <li>Design</li>
            </Tags>
          </div>
          <aside>
            <p className="website">
              <div />
              <img src="/images/projects/aufbruch.png" alt="Aufbruch Website" />
            </p>
          </aside>
        </section>
      </ProjectSection>
      <ProjectSection>
        <section>
          <div>
            <h2>WorldcApp</h2>
            <p>
              For the football world cup in 2014, I've implemented an app for
              our office at the{" "}
              <abbr title="European External Action Service">EEAS</abbr> where
              all colleagues were able to bet on the results of each match.
            </p>
            <Tags>
              <li>Meteor</li>
              <li>React</li>
              <li>Styled components</li>
              <li>Concept & Design</li>
            </Tags>
          </div>
          <aside>
            <p className="mobile">
              <div />
              <img src="/images/projects/worldcapp.png" alt="WorldcApp app" />
            </p>
          </aside>
        </section>
      </ProjectSection>
      <section>
        <h2>Computer AG</h2>
        <p>
          Currently, I am preparing a computer course for pupils at the
          Grundschule am Rüdesheimer Platz to be started later this year.
        </p>
        <p>This course will include lectures about</p>
        <ul>
          <li>structure of a computer</li>
          <li>hardware, software</li>
          <li>the Internet</li>
          <li>search engines</li>
          <li>social media</li>
          <li>opearing systems</li>
          <li>files and folders</li>
          <li>Word, Excel</li>
          <li>HTML, CSS, JavaScript</li>
          <li>security/passwords</li>
          <li>artificial intelligence</li>
          <li>and much more :)</li>
        </ul>
      </section>
    </MainLayout>
  );
};

const Hello = styled.section`
  display: grid;
  grid-template-columns: 360px auto;
  grid-column-gap: 110px;

  img {
    border-radius: 8px;
    height: auto;
    width: 360px;
  }

  h1 {
    font-weight: normal;
    font-size: 46px;
    margin: 0 0 20px;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-column-gap: 30px;

    img {
      margin-bottom: 30px;
      width: 100%;
    }
  }
`;

const Tags = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 40px 0;
  padding: 0;

  li {
    background-color: #def;
    border-radius: 10px;
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

const ProjectSection = styled.div<{ isAlt?: boolean }>`
  background-color: var(--color-text);
  color: var(--color-background);
  min-height: 50vh;
  padding: 100px 60px;

  a {
    color: var(--color-background);
  }

  h2 {
    margin: 0 auto 40px;
    max-width: var(--max-width);
  }

  > section {
    display: grid;
    gap: 40px;
    grid-template-columns: auto 40%;
    margin: 0 auto;
    max-width: var(--max-width);

    aside {
      text-align: center;
    }
  }

  .mobile {
    max-height: 550px;
    transform: rotate3d(-50, -20, -50, -8deg);
    transition: 0.25s;

    &:hover {
      transform: rotate3d(-0, -0, -0, 0deg);
    }

    img {
      max-height: 550px;
    }
  }

  .website {
    background-color: #333;
    border-radius: 4px;
    box-shadow: 2px 5px 10px #999;
    line-height: 0;
    margin-top: 20px;
    max-width: max(450px, 40%);
    padding: 10px 0 0;
    position: relative;
    transform: rotate3d(-50, -20, -50, -8deg);
    transition: 0.25s;

    &:hover {
      transform: rotate3d(-0, -0, -0, 0deg);
    }

    div {
      background-color: #c33;
      border-radius: 50%;
      height: 4px;
      left: 5px;
      position: absolute;
      top: 3px;
      width: 4px;

      &::after,
      &::before {
        background-color: #ee3;
        border-radius: 50%;
        content: "";
        display: block;
        height: 4px;
        left: 8px;
        padding: 0;
        position: relative;
        top: 0;
        width: 4px;
      }

      &::after {
        background-color: #3c3;
        left: 16px;
        top: -4px;
      }
    }

    img {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      max-width: 100%;
    }
  }

  .url {
    margin-top: 40px;
    margin-bottom: 0;
  }

  ${(props) =>
    props.isAlt &&
    css`
      background-color: var(--color-background);
      color: var(--color-text);

      ${Tags} li {
        color: var(--color-background);
      }

      > section {
        grid-template-columns: 40% auto;
      }

      aside {
        grid-row: 1;
      }

      .website {
        transform: rotate3d(-50, -20, -50, 8deg);
      }

      .mobile {
        transform: rotate3d(-50, -20, -50, 8deg);
      }
    `}
`;

export default IndexPage;
