import React from 'react';
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './Views/Home'
import History from './Views/History'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
