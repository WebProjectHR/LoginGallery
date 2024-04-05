import './App.css';
import { Routes, Route } from 'react-router-dom'

import React from 'react'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}

export default App