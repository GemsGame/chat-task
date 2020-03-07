import React from 'react';
import './App.scss';
import Registr from "./pages/Registr";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/Login';
import PrivateRoute from "./rout/PrivateRout";

class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Router>
        <Switch>
          <div className="App">
            <Route path="/registration" component={Registr} />
            <Route path="/login" component={Login} />
            <PrivateRoute path="/messages" component={Registr} />
          </div>
          </Switch>
        </Router>
      </Provider>

    )

  }

}

export default App;