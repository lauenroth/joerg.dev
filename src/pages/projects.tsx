import React from "react";
import Helmet from "react-helmet";
import MainLayout from "../components/MainLayout";

const ProjectsPage: React.FC = () => (
  <MainLayout>
    <Helmet>
      <title>Jörg.dev | projects</title>
    </Helmet>
    <section>
      <h1>My Projects</h1>
      <p>Here are some of the projects I've been working on</p>
    </section>
  </MainLayout>
);

export default ProjectsPage;
