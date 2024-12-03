import './App.css';
import Navbar from './components/Navbar';
import WindowSize from './test/WindowSize';
import Homepage from './components/Home';
import Timeline from './components/Timeline';
import ProjectShowcase from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Timeline />
      <ProjectShowcase />
      <WindowSize />
    </div>
  );
}

export default App;