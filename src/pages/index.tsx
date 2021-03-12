import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";
import jörgImage from "../images/jorg.webp";

// markup
const IndexPage: React.FC = () => {
  return (
    <MainLayout>
      <title>Jörg Lauenroth</title>
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
            You can find more about me on my <Link to="/about">about page</Link>
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

  @media (max-width: 1000px) {
    grid-template-columns: auto;
    grid-column-gap: 30px;

    img {
      margin-bottom: 30px;
      width: 100%;
    }
  }
`;

export default IndexPage;
