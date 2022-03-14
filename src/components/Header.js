import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth'

export const Header = () => {
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px'
  }
  const navigate = useNavigate()
  const { logout } = useAuth()
  const existUser = localStorage.getItem('stayUser')
  return (
    <div className="header">
      <ul>
        <li className="company_name">LAIQA</li>
        {existUser && (
          <li>
            <span className="welcome">Hi, {existUser}!</span>
          </li>
        )}
        <li name="Period pal" className="Period_pal">
          {existUser ? (
            <a href="" onClick={logout}>
              LOGOUT
            </a>
          ) : (
            <a href="" onClick={() => navigate('/login')}>
              LOGIN
            </a>
          )}
        </li>
        <li name="Deal of the week" className="Deal_of_the_week">
          <a href="/products">PRODUCTS</a>
        </li>

        <li
          name="Shop"
          className="shop"
          onClick={openNav}
          style={{ cursor: 'pointer' }}
        >
          <span>
            Shop
            <i class="fa fa-arrow-circle-down" />
          </span>
        </li>
        <li>
          <a href="/">
            <i
              className="fas fa-house-damage"
              style={{ fontSize: '25px', marginTop: '-10px' }}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
