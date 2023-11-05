import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/Route'
import AuthProvider from './Provider/AuthProvide'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreatedRouter}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
