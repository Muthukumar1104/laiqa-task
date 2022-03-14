import React, { useState } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'

export default function Signup() {
  const [user, setUser] = useState({ name: '', password: '', cPassword: '' })
  const { name, password, cPassword } = user
  const navigate = useNavigate()
  const signup = () => {
    if (user.cPassword !== user.password) {
      return alert('password doesnot match')
    }
    if (user.name === '' || user.cPassword === '' || user.password === '') {
      return alert('fields cannot be empty')
    } else {
      let getUsers = JSON.parse(localStorage.getItem('users'))
      getUsers === null
        ? localStorage.setItem('users', JSON.stringify([user]))
        : localStorage.setItem('users', JSON.stringify([...getUsers, user]))
      navigate('/login')
      setUser({ name: '', password: '', cPassword: '' })
      return
    }
  }
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  return (
    <div className="signup">
      <div className="signup_heading">
        <h1>
          <NavLink to="/">LAIQA</NavLink>
        </h1>
      </div>
      <div className="form_signup">
        <label>Name</label>
        <br />
        <input type="text" name="name" value={name} onChange={changeHandler} />
        <br />
        <label>New Password</label>
        <br />
        <input
          type="passward"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="passward"
          name="cPassword"
          value={cPassword}
          onChange={changeHandler}
        />
        <br />
        <button onClick={signup}>Signup</button>
        <p>
          click here if you are already{' '}
          <a href="/login">
            <strong>user</strong>
          </a>
          .
        </p>
      </div>
    </div>
  )
}
