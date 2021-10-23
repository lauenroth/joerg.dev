import React from "react";
import styled from "styled-components";
import ComputerLayout from "../../components/ComputerLayout";
import jörgImage from "../../images/jorg.webp";

const ComputerAGPage: React.FC = () => (
  <ComputerLayout>
    <section>
      <h1>Herzlich Willkommen!</h1>
      <p>
        Das Ziel der Computer AG ist es, Schulkindern der 3. und 4. Klasse den
        Umgang mit Computern spielerisch nahezubringen. Neben theoretischen
        Themen wird es immer auch die Möglichkeit geben, das Erlernte praktisch
        anzuwenden.
      </p>
      <p>Hier sind ein paar Themenideen:</p>
      <Tags>
        <li>Computer im Alltag</li>
        <li>Aufbau eines Computers</li>
        <li>Hardware</li>
        <li>Software</li>
        <li>Speichermedien</li>
        <li>Betriebssysteme</li>
        <li>Dateien und Ordner</li>
        <li>Das Internet</li>
        <li>Suchmaschinen</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Word</li>
        <li>Excel</li>
        <li>PowerPoint</li>
        <li>Soziale Medien</li>
        <li>Barrierefreiheit</li>
        <li>Sicherheit / Passwörter</li>
        <li>Künstliche Intelligenz</li>
        <li>VR / AR</li>
        <li>Apps und Programmierung</li>
      </Tags>

      <p>
        Die Computer AG findet dienstags von 14-15 Uhr im Computerraum der
        Grundschule am Rüdesheimer Platz statt.
      </p>

      <p>
        <a className="btn" href="/ag/anmeldung">
          Zur Anmeldung
        </a>
      </p>
    </section>
    <Aside>
      <img src={jörgImage} width="100" height="100" alt="Jörg Lauenroth" />
      <h3>Hallo 👋</h3>
      <p>Mein Name ist Jörg Lauenroth.</p>
      <p>
        Mittlerweile habe ich knapp 20 Jahre Erfahrung im Bereich
        Web-Entwicklung. Derzeit arbeite ich als Front-end Lead bei{" "}
        <a href="https://www.worldia.com/">Worldia</a>, einem Startup für
        Individualreisen.
      </p>
      <p>
        Meine beiden Töchter gehen auf die Grundschule am Rüdesheimer Platz,
        daher versuche ich mich dort zu engagieren - seit Anfang 2020 im
        Förderverein und ab Ende 2021 mit der Computer AG.
      </p>
      <p>
        Bei Fragen erreichen Sie mich am besten per E-Mail an{" "}
        <a href="mailto:hi@jörg.dev">hi@jörg.dev</a>.
      </p>
    </Aside>
  </ComputerLayout>
);

const Aside = styled.aside`
  img {
    border: 4px solid #2a4a6c;
    border-radius: 50%;
    right: 40px;
    position: absolute;
    top: -40px;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-flow: wrap;
  gap: 20px;
  list-style: none;
  margin: 40px 0;
  max-width: var(--max-width);
  padding: 0;

  li {
    background-color: #def;
    border-radius: 10px;
    color: var(--color-background);
    font-size: 0.8rem;
    padding: 5px 10px;
  }
`;

export default ComputerAGPage;
