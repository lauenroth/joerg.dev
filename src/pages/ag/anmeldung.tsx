import React from "react";
import styled from "styled-components";
import ComputerLayout from "../../components/ComputerLayout";

const Anmeldung: React.FC = () => (
  <ComputerLayout>
    <section>
      <h1>Anmeldung zur Computer AG</h1>
      <Form>
        <fieldset>
          <label htmlFor="name">Name des Kindes</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="klasse">Klasse</label>
          <input type="text" id="klasse" name="klasse" />
          <label htmlFor="email">E-Mail Adresse</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="anmerkung">Anmerkung</label>
          <textarea id="anmerkung" name="anmerkung"></textarea>
        </fieldset>
        <p>
          <button type="submit">Anmeldung abschicken</button>
        </p>
      </Form>
    </section>
    <aside>
      <h3>Bitte beachten:</h3>
      <p>Die Computer AG ist nur für Kinder der 3. und 4. Klasse vorgesehen.</p>
      <p>
        Es gibt 10 freie Plätze. Bei mehr als 10 Anmeldungen wird ausgelost.
      </p>
    </aside>
  </ComputerLayout>
);

const Form = styled.form`
  margin: 20px auto;

  fieldset {
    border: 0;
    display: grid;
    gap: 20px;
    grid-template-columns: 175px auto;
    margin-bottom: 20px;
    padding: 0;
  }

  label {
    cursor: pointer;
    padding: 10px 0;
  }

  input,
  textarea {
    border: 0;
    border-radius: 4px;
    font-size: 1rem;
    padding: 10px 10px;
  }

  textarea {
    height: 100px;
  }

  p:last-child {
    display: flex;

    button {
      margin-left: auto;
    }
  }

  @media (max-width: 500px) {
    fieldset {
      grid-template-columns: auto;
    }
    label {
      padding-bottom: 0;
    }
    button {
      width: 100%;
    }
  }
`;

export default Anmeldung;
