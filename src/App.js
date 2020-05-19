import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/admin"><Admin /></Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
