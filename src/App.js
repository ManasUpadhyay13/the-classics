import About from './About/About';
import './App.css';
import Faq from './FAQ/Faq';
import Footer from './Footer/Footer';
import Home from './home/Home';
import Roadmap from './Roadmap/Roadmap';
import Showcase from './Showcase/Showcase';
import Team from './Team/Team';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Roadmap/>
      <Showcase/>
      <Team/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
