import { Provider } from "react-redux";
import { RegistrationForm } from "./components/RegistrationForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <center>
        <h1>Registration Form</h1>
      </center>
      <RegistrationForm />
    </div>
  );
}

export default App;
