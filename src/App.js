import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/Weather';

const API_KEY = "02e7604a6c52785e16ebc995f739fed4";

class App extends React.Component {

  gettingWeather = async () => {
    const api_url = await
    fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
