import LandingPage from 'pages/LandingPage';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './assets/scss/style.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
