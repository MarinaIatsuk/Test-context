import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '../src/Style/index.css'
import { MyContextComponent } from './Context/MyContext.jsx' //оборачиваем им все приложение

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContextComponent>
    <App />
    </MyContextComponent>
  </React.StrictMode>,
)
