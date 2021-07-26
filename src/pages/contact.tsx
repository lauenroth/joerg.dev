import React from "react";
import styled from "styled-components";
import MainLayout from "../components/MainLayout";

const ContactPage: React.FC = () => (
  <MainLayout>
    <section>
      <h1>Let's get in touch</h1>
      <p>
        You can send me an email to <a href="mailto:hi@jörg.dev">hi@jörg.dev</a>
      </p>
      {/* <p>Or send me a post card:</p>
      <PostCard>
        <p>To: Jörg</p>
        <p>
          From:{" "}
          <input type="email" name="email" placeholder="your email address" />
        </p>
        <textarea />
        <button type="submit">Send post card</button>
      </PostCard> */}
      <p>
        or contact me via one of the social networks{" "}
        <LinkToSocials>👈</LinkToSocials>
      </p>
    </section>
  </MainLayout>
);

const PostCard = styled.form`
  background-color: #fff;
  border-radius: 10px;
  color: #369;
  margin-bottom: 20px;
  padding: 20px;

  input {
    border: 1px solid #369;
    border-radius: 5px;
    font-size: 1em;
    padding: 10px;
  }

  textarea {
    border: 1px solid #369;
    border-radius: 5px;
    padding: 10px;
  }

  button {
    background-color: #369;
    border: 1px solid #369;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    opacity: 0.9;
    padding: 10px;
    transition: 0.25s;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;

const LinkToSocials = styled.span`
  display: inline-block;
  font-size: 32px;
  position: relative;
  top: 15px;
  transform: rotate(-45deg);
`;

export default ContactPage;
