import './App.css';
import Footer from './Components/Footer/Footer';
import Feature from './Components/Header/Feature';
import Home from './Components/Header/Home';
import OurFeatures from './Components/Main/OurFeatures';
import OurProject from './Components/Main/OurProject';
import Service from './Components/Main/Service';
import Stats from './Components/Main/Stats';
import Team from './Components/Main/Team';
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
      <Team />
      <Footer />
    </div>
  );
}

export default App;
