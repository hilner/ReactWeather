var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <h3>{temp} graus em {location}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
