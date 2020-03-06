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


class App extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route path="/registration" component={Registr} />
            <Route path="/login" component={Login} />
          </div>

        </Router>
      </Provider>

    )

  }

}

export default App;