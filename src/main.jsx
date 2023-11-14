import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
import {registerSW} from "virtual:pwa-register"
registerSW({immediate: true})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
)
