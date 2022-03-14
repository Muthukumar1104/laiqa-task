import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'
export const RequiredAuth = ({ children }) => {
  const { user } = useAuth()
  console.log('Check user:::', user)
  const location = useLocation()
  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />
  }
  return children
}
