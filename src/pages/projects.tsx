import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const ProjectsPage: React.FC = () => (
  <MainLayout>
    <Helmet>
      <title>Jörg.dev | projects</title>
    </Helmet>
    <section>
      <h1>My Projects</h1>
      <p>
        I love trying out new technologies. And what's better than trying them
        on new side projects?
      </p>
      <p>Here are some of the projects I've been working on:</p>
      <Projects>
        <li>
          <a href="#">WorldcAPP</a>
        </li>
        <li>
          <a href="#">Förderverein GARP</a>
        </li>
        <li>
          <a href="#">Perackis Architekten</a>
        </li>
        <li>
          <a href="#">Expenses Tracker</a>
        </li>
        <li>
          <a href="#">Finny</a>
        </li>
        <li>
          <a href="#">InLabour</a>
        </li>
        <li>Your project?</li>
      </Projects>
    </section>
  </MainLayout>
);

const Projects = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  grid-column-gap: 3rem;
  margin: 0;
  padding: 0;

  li {
    align-items: center;
    display: flex;
    height: 200px;
    justify-content: center;
    list-style: none;
    margin-bottom: 3rem;

    &:last-child {
      border: 1px dashed var(--color-text);
      border-radius: 4px;
      font-size: 1.8rem;
    }
  }

  a {
    align-self: stretch;
    background-color: var(--color-text);
    border-radius: 4px;
    color: var(--color-background);
    display: block;
    padding: 20px;
    text-decoration: none;
    transition: 0.25s;
    width: 100%;

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export default ProjectsPage;
