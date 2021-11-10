import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {App} from './App';
import { configStore } from './Redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configStore()
ReactDOM.render(
  <React.StrictMode>
<Provider store={store}>
    <App />
</Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
