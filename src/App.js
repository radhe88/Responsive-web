import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './component/Header'
import AppHero from './component/Hero';
import About from './component/About';
import OurService from './component/Service';
import AppWorks from './component/Works';
import OurTeam from './component/Team';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header />
      </header>
      <main>
        <AppHero />
        <About />
        <OurService />
        <AppWorks />
        <OurTeam />
      </main>
    </div>
  );
}

export default App;
