import './App.css'
import WeatherComp from './assets/components/WeatherComp';
import images1 from '../src/assets/img/morro.jpg';
import images2 from '../src/assets/img/surf.jpg';


function App() {
  return (
    <div className="App" >
      <img src={images2} alt="umagen" className="ima2"/>
      <WeatherComp />
      <img src={images1} alt="umagen" width="600" height="400" className="ima1" />
    </div>
  )
}

export default App;
