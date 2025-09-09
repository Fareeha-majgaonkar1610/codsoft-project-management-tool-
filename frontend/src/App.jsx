import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import PrivateRoute from './Components/PrivateRoute'
import NavBar from './Components/NavBar'   

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Task Manager</h1>
        <NavBar />   {/* ✅ use NavBar instead of inline <nav> */}
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute><Dashboard /></PrivateRoute>}
          />
        </Routes>
      </main>

      <footer className="footer">Made with ❤️</footer>
    </div>
  )
}
