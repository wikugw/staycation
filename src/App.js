import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/scss/style.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/property/:id" component={DetailPage} />
      </Router>
    </div>
  );
}

export default App;
