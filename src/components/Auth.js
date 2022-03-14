import { createContext, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const stayUser = localStorage.getItem('stayUser')
  const existUser = stayUser ? stayUser : null
  const [user, setUser] = useState(existUser)
  const location = useLocation()
  const navigate = useNavigate()
  const getData = JSON.parse(localStorage.getItem('users'))
  const redirectPath = location.state?.path || '/'

  const loginPage = (user) => {
    let isvalid =
      getData &&
      getData.length !== 0 &&
      getData.find(
        (data) => data.name === user.name && data.password === user.password,
      )
    if (isvalid) {
      setUser(user)
      localStorage.setItem('stayUser', user.name)
      navigate(redirectPath, { replace: true })
    } else {
      alert('Invalid user or password')
    }
  }
  const logout = () => {
    setUser(null)
    localStorage.removeItem('stayUser')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ user, loginPage, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
