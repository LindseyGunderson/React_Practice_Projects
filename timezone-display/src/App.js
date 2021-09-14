
import './App.css';
import { useState, useEffect } from 'react';

import Clock from './components/Clock';
// import ClockDark from './components/ClockDark';


function App() {

  const API_KEY = "95VKVKO1R2B0";

  const [time, setTime] = useState([]);

  useEffect(() => {

    // getLocation();
    getTime();

  }, []);

  // const getLocation = () => (

  //   navigator.geolocation.getCurrentPosition(function(position) {

  //     let lat = position.coords.latitude;
  //     let long = position.coords.longitude;
  
  //   }));


    const getTime = async () => {

      const response = await fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=${API_KEY}&format=json&by=position&lat=52.3555&lng=1.1743`);
  
      const data = await response.json();
      
      setTime(data);

    }

    // getLocation();

  return (
    <div className="App">
     

    <Clock time={time}/>

    {/* <ClockDark /> */}

    </div>
  );
}

export default App;
