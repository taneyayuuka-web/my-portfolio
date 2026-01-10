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

import Login from './Login.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        {/* パスワード入力ページ */}
        <Route path="/login" element={<Login />} />

        {/* ここから下は全部パスワード保護 */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />

        <Route
          path="/shinrai"
          element={
            <ProtectedRoute>
              <Shinrai />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gettone"
          element={
            <ProtectedRoute>
              <Gettone />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gangu"
          element={
            <ProtectedRoute>
              <Gangu />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pinset"
          element={
            <ProtectedRoute>
              <Pinset />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ryukku"
          element={
            <ProtectedRoute>
              <Ryukku />
            </ProtectedRoute>
          }
        />

        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />

        <Route
          path="/jisyu"
          element={
            <ProtectedRoute>
              <Jisyu />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
