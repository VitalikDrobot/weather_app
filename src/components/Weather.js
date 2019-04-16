import React from 'react';

class Weather extends React.Component {
  render() {
    return(
      <div>
      { this.props.city &&
        <div>
          <p>Місто: {this.props.city}, {this.props.country}</p>
          <p>Температура: {this.props.temp} в градусах Кельвіна</p>
          <p>Тиск: {this.props.pressure}</p>
          <p>Захід сонця: {this.props.sunset}</p>
        </div>
       }
      </div>
    );
  }
}

export default Weather;
