import React from "react";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

// markup
const NotFoundPage = () => (
  <MainLayout>
    <Wrapper>
      <h2>4😱4 - Page not found</h2>

      <iframe
        src="https://giphy.com/embed/4560Nv2656Gv0Lvp9F"
        width="480"
        height="204"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
      ></iframe>

      <code>This isn't the page you're looking for...</code>
    </Wrapper>
  </MainLayout>
);

const Wrapper = styled.section`
  h2 {
    text-align: center;
  }

  iframe {
    margin-bottom: 30px;
    width: 100%;
  }

  code {
    background-color: #272d34;
    border-radius: 4px;
    color: #adafb1;
    display: block;
    font-family: "Fira Code";
    margin: 0 auto 30px;
    padding: 20px;
    width: 440px;
  }
`;

export default NotFoundPage;
