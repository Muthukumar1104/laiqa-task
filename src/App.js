import { Routes, Route } from 'react-router-dom'
import Mainpage from './components/mainpage'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Privacy from './components/Privacy'
import Login from './components/Login'
import Signup from './components/Signup'
import { AuthProvider } from './components/Auth'
import { RequiredAuth } from './components/RequiredAuth'
import { Home } from './components/Home'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/products"
          element={
            <RequiredAuth>
              <Mainpage />
            </RequiredAuth>
          }
        />
        <Route
          path="about"
          element={
            <RequiredAuth>
              <About />
            </RequiredAuth>
          }
        />
        <Route
          path="services"
          element={
            <RequiredAuth>
              <Services />
            </RequiredAuth>
          }
        />
        <Route
          path="contact"
          element={
            <RequiredAuth>
              <Contact />
            </RequiredAuth>
          }
        />
        <Route
          path="privacy"
          element={
            <RequiredAuth>
              <Privacy />
            </RequiredAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
