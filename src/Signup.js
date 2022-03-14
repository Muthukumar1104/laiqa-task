import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signup() {
  return (
    <div className="signup">
      <div className="signup_heading">
        <h1>
          <NavLink to="/">LAIQA</NavLink>
        </h1>
      </div>
      <form>
        <label>Name</label>
        <br />
        <input type="text" name="text" onChange={(e) => e.target.value} />
        <br />
        <label>New Password</label>
        <br />
        <input
          type="passward"
          name="new-password"
          onChange={(e) => e.target.value}
        />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          type="passward"
          name="confirm-password"
          onChange={(e) => e.target.value}
        />
        <br />
        <button>Signup</button>
      </form>
    </div>
  )
}
