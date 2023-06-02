import './App.css';
import Feature from './Components/Header/Feature';
import Home from './Components/Header/Home';
import OurFeatures from './Components/Main/OurFeatures';
import Stats from './Components/Main/Stats';

function App() {
  return (
    <div className="App">
      <Home />
      <Feature />
      <Stats />
      <OurFeatures />
    </div>
  );
}

export default App;
