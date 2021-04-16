import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../components/MainLayout";

const AboutPage: React.FC = () => (
  <MainLayout>
    <Helmet>
      <title>Jörg.dev | about</title>
    </Helmet>
    <section>
      <h2>I'm a ...</h2>
      <h2>
        <span role="img" aria-label="nerd emoji">
          👨‍💻
        </span>{" "}
        dev
      </h2>
      <p>
        I'm one of these &quot;devs&quot; who transform{" "}
        <span className="delete">coffee</span> Mate into code. Currently, I'm
        working as front-end developer on bigger projects but also build entire
        websites and apps.
      </p>

      <h2>
        <span role="img" aria-label="metal hand emoji">
          🤘
        </span>{" "}
        punk
      </h2>
      <p></p>

      <h2>
        <span role="img" aria-label="food emoji">
          🍲
        </span>{" "}
        chef
      </h2>

      <h2>
        <span role="img" aria-label="bike emoji">
          🚴‍♂️
        </span>{" "}
        biker
      </h2>

      <h2>
        <span role="img" aria-label="skiing emoji">
          ⛷
        </span>{" "}
        alpinist
      </h2>

      <h2>
        <span role="img" aria-label="camera emoji">
          📷
        </span>{" "}
        photographer
      </h2>
    </section>
  </MainLayout>
);

export default AboutPage;
