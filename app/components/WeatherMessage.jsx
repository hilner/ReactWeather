var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <h3 className="text-center">{temp} graus em {location}</h3>
    </div>
  )
};

module.exports = WeatherMessage;
