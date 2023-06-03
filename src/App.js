import './App.css';
import Feature from './Components/Header/Feature';
import Home from './Components/Header/Home';
import OurFeatures from './Components/Main/OurFeatures';
import OurProject from './Components/Main/OurProject';
import Service from './Components/Main/Service';
import Stats from './Components/Main/Stats';
import Testimonials from './Components/Main/Testimonials';

function App() {
  return (
    <div className="App">
      <Home />
      <Feature />
      <Stats />
      <OurFeatures />
      <Service />
      <OurProject />
      <Testimonials />
    </div>
  );
}

export default App;
