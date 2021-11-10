import React from "react";
import { Provider } from "react-redux";
import { RegistrationForm } from "./components/RegistrationForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

export const App = () =>{
  return (
    <React.Fragment>
      
        <Router>
          <Switch>
            <Route path="/">
              <RegistrationForm/>
            </Route>
          </Switch>
        </Router>
      
    </React.Fragment>
  )
}

// export default App;
