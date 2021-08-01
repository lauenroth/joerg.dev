import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const AboutPage: React.FC = () => (
  <MainLayout>
    <Helmet>
      <title>Jörg.dev | about</title>
    </Helmet>
    <AboutWrapper>
      <h2>I'm a ...</h2>
      <ul>
        <li>
          <h2>
            <span role="img" aria-label="nerd emoji">
              👨‍💻
            </span>{" "}
            dev
          </h2>
          <p>
            I'm one of these &quot;devs&quot; who transform{" "}
            <span className="delete">coffee</span> Mate into code. Currently,
            I'm working as a front-end developer but I also build entire
            websites from back to front and (web) apps.
          </p>
          <p>
            I love trying out new libraries and frameworks so you will find lots
            of different technologies being used on{" "}
            <a href="/projects">my projects page</a>.
          </p>
        </li>

        <li>
          <h2>
            <span role="img" aria-label="metal hand emoji">
              🤘
            </span>{" "}
            punk
          </h2>
          <p>
            I loooove music! Music has always played an important role in my
            life and always will. My passion for punk rock started with Green
            Day, Bad Religion and NOFX back in the 90s and it still is my
            favorite type of music - even though the bands changed over the
            years...
          </p>
          <p>
            Going to concerts and festivals is one of the best things to do - as
            well as playing guitar.
          </p>
        </li>

        <li>
          <h2>
            <span role="img" aria-label="food emoji">
              🍲
            </span>{" "}
            chef
          </h2>
          <p>
            Okay, I'm probably not a great chef but I love cooking and baking.
          </p>
          <p>
            I've moved to a vegetarian/vegan cuisine a couple of years ago and
            always try to improve my cooking skills.
          </p>
        </li>

        <li>
          <h2>
            <span role="img" aria-label="bike emoji">
              🚴‍♂️
            </span>{" "}
            biker
          </h2>
          <p>
            I try to ride my bike every day or at least several times per week.
            Recently, I got a new pedelec that's super fun to ride and increases
            my range. Plus I don't arrive sweaty in the office ;)
          </p>
        </li>

        <li>
          <h2>
            <span role="img" aria-label="skiing emoji">
              ⛷
            </span>{" "}
            alpinist
          </h2>
          <p>
            Maybe I love mountains so much because we don't have them in Berlin
            (or in the other cities I was living). Skiing is, hands down, the
            best sport in the world. You spend the entire day outside (at a
            season where you usually prefer being inside) in a beautiful
            landscape doing sport.
          </p>
        </li>

        <li>
          <h2>
            <span role="img" aria-label="camera emoji">
              📷
            </span>{" "}
            photographer
          </h2>
          <p>
            Not very professionally but I love taking pictures. Especially of
            nature and architecture.
          </p>
        </li>
      </ul>
    </AboutWrapper>
  </MainLayout>
);

const AboutWrapper = styled.section`
  > ul {
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 30px;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding-bottom: 30px;
      text-align: justify;
    }
  }

  @media (max-width: 800px) {
    > ul {
      grid-template-columns: 2fr;
    }
  }
`;

export default AboutPage;
