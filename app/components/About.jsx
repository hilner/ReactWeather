var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Sobre</h1>
      <p>App feita em React.</p>
      <p>Softwares usados:</p>
      <ul>
        <li>
          <a href="https://facebook.guthub.io/react">React</a>
          -Framework Javascript usado.
        </li>
        <li>
          <a href="http://openweathermap.com">Open Weather Map</a>
          -Dados da temperatura usados.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
