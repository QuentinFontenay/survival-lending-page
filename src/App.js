import './App.css';
import Challenge from './components/Challenge';
import CompleteChallenge from './components/CompleteChallenge';
import GalleryCard from './components/GalleryCard';
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
      <GalleryCard />
    </div>
  );
}

export default App;
