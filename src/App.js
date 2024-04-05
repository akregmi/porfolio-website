import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Title from './home';
import { useState } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/about">
              <Title />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;