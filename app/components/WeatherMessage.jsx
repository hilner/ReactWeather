var React = require('react');

var WeatherMessage = React.createClass({
  render: function(){
    var {location, temp} = this.props;

    return (
      <div>
        <h3>{temp} graus em {location}</h3>
      </div>
    );
  }
});

module.exports = WeatherMessage;
