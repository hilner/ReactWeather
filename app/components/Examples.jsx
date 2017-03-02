var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Exemplos</h1>
      <p>Exemplos de locais:</p>
      <ol>
        <li>
          <Link to="/?location=Fortaleza">Fortaleza, CE</Link>
        </li>
        <li>
          <Link to="/?location=Natal">Natal, RN</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
