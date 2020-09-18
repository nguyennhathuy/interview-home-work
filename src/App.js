import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';

function App() {
  const showContentMenu = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
      })
    }
    return <Switch>{result}</Switch>
  }
  
  return (
    <Router>
      <Header />
      {showContentMenu(routes)}
    </Router>
  );
}



export default App;
