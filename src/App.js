import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Home';
import Timeline from './components/Timeline';
import ProjectShowcase from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
        <Timeline />
        <ProjectShowcase />
        <ContactMe />
      </main>
    </>
  );
}

export default App;