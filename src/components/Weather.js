import React from 'react';

const Weather = props => (
  <div>
  { props.city &&
    <div>
      <p>Місто: {props.city}, {props.country}</p>
      <p>Температура: {props.temp} в градусах Кельвіна</p>
      <p>Тиск: {props.pressure}</p>
      <p>Захід сонця: {props.sunset}</p>
    </div>
   }
   <p>{props.error}</p>
  </div>
);

export default Weather;
