import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './Components/UserList';
import XYZ from './xyz';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/userlist" exact component={UserList} />
            <Route path="/xyz" exact component={XYZ} />
        </Switch>
        </div>
      </Router>
    )
  }
}


export default App;