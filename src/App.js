import React from 'react';

import Registr from "./pages/Registr";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ReactNotification from 'react-notifications-component';

import 'react-notifications-component/dist/theme.css';
import "animate.css";
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import PrivateRoute from "./rout/PrivateRout";
import Chat from './pages/Chat';



class App extends React.Component {

  render() {

    return (
      <div className="App">
     
          <Provider store={store}>
          <ReactNotification className="custom-notification"/>
            <Router>
              <Switch>
                <Route path="/registration" component={Registr} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/messages" component={Chat} />
              </Switch>
            </Router>
          </Provider>
  
      </div>
    )

  }

}

export default App;