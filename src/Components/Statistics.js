import React from "react";

const Statistics = ({ text, good, bad, neutral, kesk, pos }) => {
  if (kesk === 0) {
    return (
      <div>
        <h1>Statistiika</h1>
        <p>ei yhtään palautetta annettu</p>
      </div>
    );
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              <h1>statistiikka</h1>
            </th>
          </tr>
          <tr>
            <td>hyvä</td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>neutraali</td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>huono</td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>keskiarvo</td>
            <td>{kesk}</td>
          </tr>
          <tr>
            <td>positiivisia</td>
            <td>{pos}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Statistics;
