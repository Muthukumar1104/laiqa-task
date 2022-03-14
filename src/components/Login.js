import React, { useState } from 'react'
import '../App.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export default function Login() {
  const [user, setUser] = useState({ name: '', password: '' })
  const { name, password } = user
  const { loginPage } = useAuth()
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <div className="login">
      <div className="login_heading">
        <h1>
          <NavLink to="/">LAIQA</NavLink>
        </h1>
      </div>
      <div className="form_login">
        <label>Name</label>
        <br />
        <input type="text" name="name" value={name} onChange={changeHandler} />
        <br />
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <br />
        <button onClick={() => loginPage(user)}>Login</button>
        <p>
          click here if you don't have
          <a href="/signup">
            <strong> account</strong>
          </a>
          .
        </p>
      </div>
    </div>
  )
}
