import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Button, message } from 'antd';
import Login from './pages/login/login.js'
import Admin from './pages/admin/admin.js'
import 'antd/dist/antd.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }


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
