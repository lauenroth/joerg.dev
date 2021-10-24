import React from "react";
import styled from "styled-components";
import ComputerLayout from "../../components/ComputerLayout";

const Anmeldung: React.FC = () => {
  const [name, setName] = React.useState("");
  const [klasse, setKlasse] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [anmerkung, setAnmerkung] = React.useState("");

  const canSubmit = name.length > 0 && klasse.length > 0 && email.length > 0;

  const submit = (event) => {
    event.preventDefault();

    console.log(name, klasse, email, anmerkung);
  };

  return (
    <ComputerLayout>
      <section>
        <h1>Anmeldung zur Computer AG</h1>
        <Form onSubmit={submit}>
          <fieldset>
            <label htmlFor="name">
              Name des Kindes <sup>*</sup>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="klasse">
              Klasse <sup>*</sup>
            </label>
            <select
              id="klasse"
              name="klasse"
              value={klasse}
              onChange={(event) => setKlasse(event.target.value)}
              required
            >
              <option value="">Bitte wählen</option>
              <optgroup label="3. Klasse">
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="B3">B3</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
                <option value="C3">C3</option>
                <option value="D1">D1</option>
                <option value="D2">D2</option>
                <option value="D3">D3</option>
              </optgroup>
              <optgroup label="4.Klasse">
                <option value="4A">4A</option>
                <option value="4B">4B</option>
                <option value="4C">4C</option>
                <option value="4D">4D</option>
              </optgroup>
            </select>
            <label htmlFor="email">
              E-Mail Adresse <sup>*</sup>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label htmlFor="anmerkung">Anmerkung</label>
            <textarea
              id="anmerkung"
              name="anmerkung"
              onChange={(event) => setAnmerkung(event.target.value)}
            ></textarea>
          </fieldset>
          <p>
            <small>
              <sup>*</sup> Pflichtfeld
            </small>
            <button type="submit" disabled={!canSubmit}>
              Anmeldung abschicken
            </button>
          </p>
        </Form>
      </section>
      <aside>
        <h3>Bitte beachten:</h3>
        <p>
          Die Computer AG ist nur für Kinder der <strong>3. und 4.</strong>{" "}
          Klasse vorgesehen.
        </p>
        <p>
          Es gibt leider nur 10 freie Plätze. Bei mehr als 10 Anmeldungen werde
          ich versuchen den Kurs gerecht auf 3./4. Klasse sowie Mädchen und
          Jungs aufzuteilen.
        </p>
      </aside>
    </ComputerLayout>
  );
};

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
  textarea,
  select {
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
