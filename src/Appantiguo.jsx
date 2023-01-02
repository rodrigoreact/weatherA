
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 
  useEffect(() => {  

      function success(pos) {

      const crd = pos.coords;

      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=ec3f7168c60946c3164dad39de1aa4c8`)
            .then(res => console.log(res.data));

      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);


  }, []);

  return (
    <div className="App">  
      Hola mundo
    </div>
  )
}

export default App
