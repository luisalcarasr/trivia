import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './App.css';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import Questions from './components/Questions';

function App() {
  return (
    <Container className="main-container">
      <Navbar />
      <div id="content">
        <Router>
          <Switch>
            <Route path="/categories" exact>
              <Categories />
            </Route>
            <Route path="/questions">
              <Questions />
            </Route>
            <Route path="/">
              <Redirect to="/categories"></Redirect>
            </Route>
          </Switch>
        </Router>
      </div>
    </Container>
  );

}

export default App;
