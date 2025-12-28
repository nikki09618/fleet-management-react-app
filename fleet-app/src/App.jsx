import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/ProtectedRoute'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/login'  element={<Login setIsAuth={setIsAuth}/>}/>
        <Route
        path='/admin' element={<ProtectedRoute isAuth={isAuth}>
          <AdminDashboard/>
          </ProtectedRoute>
          }
        />
        <Route path='*' element={<Navigate to ="/login"/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
