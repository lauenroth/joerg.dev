import React from "react";
import MainLayout from "../components/MainLayout";

const ContactPage: React.FC = () => (
  <MainLayout>
    <section>
      <h1>Let's get in touch</h1>
      <p>
        You can send me an email to <a href="mailto:hi@jörg.dev">hi@jörg.dev</a>{" "}
        or contact me via one of the social networks.
      </p>
    </section>
  </MainLayout>
);

export default ContactPage;
