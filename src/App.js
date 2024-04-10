import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHero from './component/Hero';
import About from './component/About';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <Header />
      </header>
      <main>
        <AppHero />
        <About />
      </main>
    </div>
  );
}

export default App;
