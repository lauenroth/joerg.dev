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
        websites from back to front and (web) apps.
      </p>
      <p>
        I love trying out new libraries and frameworks so you will find lots of
        different technologies being used on{" "}
        <a href="/projects">my projects page</a>.
      </p>

      <h2>
        <span role="img" aria-label="metal hand emoji">
          🤘
        </span>{" "}
        punk
      </h2>
      <p>
        I loooove music! Music has always played an important role in my life
        and always will. My passion for (pop) punk started with Green Day, Bad
        Religion and NOFX back in the 90s and it still is my favorite type of
        music - even though the bands changed over the years...
      </p>
      <p>
        Going to concerts and festivals is one of the best things to do - as
        well as playing guitar. 🎸
      </p>

      <h2>
        <span role="img" aria-label="food emoji">
          🍲
        </span>{" "}
        chef
      </h2>
      <p>Okay, I'm probably not a great chef but I love cooking and baking.</p>

      <h2>
        <span role="img" aria-label="bike emoji">
          🚴‍♂️
        </span>{" "}
        biker
      </h2>
      <p>
        I try to ride my bike every day or at least several times per week.
        Recently, I got a new pedelec that's super fun to ride and increases my
        range.
      </p>

      <h2>
        <span role="img" aria-label="skiing emoji">
          ⛷
        </span>{" "}
        alpinist
      </h2>
      <p>
        Maybe I love mountains so much because we don't have them in Berlin (or
        in the other cities I was living). Skying is, hands down, the best sport
        in the world. You spend the entire day outside (at a season where you
        usually prefer being inside) in a beautiful landscape doing sport.
      </p>

      <h2>
        <span role="img" aria-label="camera emoji">
          📷
        </span>{" "}
        photographer
      </h2>
      <p>
        Not very professionally but I love taking pictures. Especially of nature
        and architecture.
      </p>
    </section>
  </MainLayout>
);

export default AboutPage;
