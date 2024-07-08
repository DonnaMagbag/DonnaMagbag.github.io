import './styles/styles1.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { ThemeProvider } from './ThemeMode';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <ThemeProvider> */}    
      <App />
{/* </ThemeProvider> */}    
  </React.StrictMode>
);

/* to start measuring performance in app, pass a function
 to log results (for example: reportWebVitals(console.log))
 or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
reportWebVitals();
