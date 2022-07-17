import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './components/App';
import AppProvider from './store/AppContext';
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <BrowserRouter>
       <App/>
    </BrowserRouter>
  </AppProvider>
)