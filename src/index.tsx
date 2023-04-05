import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {value01_01} from './01/01-01'
import {value_01_viktor} from './01/01_viktor'
import {value05_05} from './01/05-sorting'
import {value06_06} from './01/06-copy'

const a = value01_01;
const b = value_01_viktor
const c = value05_05
const d = value06_06


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
