import './App.css';
import Challenge from './components/Challenge';
import CompleteChallenge from './components/CompleteChallenge';
import Header from './components/Header';
import Hero from './components/Hero';
import SurvivalMode from './components/SurvivalMode';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Challenge />
      <CompleteChallenge />
      <SurvivalMode />
    </div>
  );
}

export default App;
