import React, { useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
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

export default IndexPage;
