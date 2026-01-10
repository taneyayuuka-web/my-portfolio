import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from './App.jsx'
import Shinrai from './shinrai.jsx'
import Gettone from './gettone.jsx'
import Gangu from './gangu.jsx'
import Pinset from './pinset.jsx'
import Ryukku from './ryukku.jsx'
import Map from './map.jsx'
import Jisyu from './jisyu.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shinrai" element={<Shinrai />} />
        <Route path="/gettone" element={<Gettone />} />
        <Route path="/gangu" element={<Gangu />} />
        <Route path="/pinset" element={<Pinset />} />
        <Route path="/ryukku" element={<Ryukku />} />
        <Route path="/map" element={<Map />} />
        <Route path="/jisyu" element={<Jisyu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
