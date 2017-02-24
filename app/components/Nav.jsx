var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.location.value;

    alert('test');
  },
  render: function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
        <ul className="menu">
        <li className="menu-text">App Temperaturas React</li>
      <li>
        <IndexLink to="/" activeClassName="active"
        activeStyle={{fontWeight: 'bold'}}>Temperaturas</IndexLink>
      </li>
      <li>
        <Link to="/about" activeClassName="active"
        activeStyle={{fontWeight: 'bold'}}>Sobre</Link>
      </li>
      <li>
        <Link to="/examples" activeClassName="active"
        activeStyle={{fontWeight: 'bold'}}>Exemplos</Link>
      </li>
      </ul>
      </div>
      <div className="top-bar-right">
      <form onSubmit={this.onSearch}>
        <ul className="menu">
          <li>
            <input type="search" placeholder="location"/>
          </li>
          <li>
            <input className="button" type="button" value="obter temperatura"/>
          </li>
        </ul>
      </form>
      </div>
      </div>
    );
  }
});

module.exports = Nav;
