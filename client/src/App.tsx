import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
        <div className="App">
          <div style={{ margin: '20px 0' }}>
              <Link to="/" style={{ margin: '0 20px' }}>Home</Link>
              <Link to="/otherpage">OtherPage</Link>
          </div>
          
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>
    </Router>
  )
}

export default App;
