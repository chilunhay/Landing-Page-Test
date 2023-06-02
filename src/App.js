import './App.css';
import Feature from './Components/Header/Feature';
import Home from './Components/Header/Home';
import OurFeatures from './Components/Main/OurFeatures';
import Service from './Components/Main/Service';
import Stats from './Components/Main/Stats';

function App() {
  return (
    <div className="App">
      <Home />
      <Feature />
      <Stats />
      <OurFeatures />
      <Service />
    </div>
  );
}

export default App;
