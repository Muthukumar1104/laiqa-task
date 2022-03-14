import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export default function Contact() {
  const reviewSubmit = () => {
    alert(`Successfully!`)
  }
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px'
  }

  function closeNav() {
    document.getElementById('mySidenav').style.width = '0'
  }

  return (
    <>
      <div id="mySidenav" class="sidenav">
        <a class="closebtn" onClick={closeNav} style={{ cursor: 'pointer' }}>
          &times;
        </a>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/services">Terms of Services</NavLink>
        <NavLink to="/privacy">Privacy Policy</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
      <div className="main_container">
        <Header />
        <div className="contact_heading">
          <h1>Contact</h1>
        </div>
        <div className="contact">
          <div className="contact_form">
            <form onSubmit={reviewSubmit}>
              <label>Name</label>
              <br />
              <input
                type="text"
                name="text"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <label>Email</label>
              <br />
              <input
                type="text"
                name="text"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <label>Phone Number</label>
              <br />
              <input
                type="tel"
                name="tel"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <label>Message</label>
              <br />
              <textarea
                className="contact_text"
                name="contact_text"
                rows="5"
                cols="50"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <button>Submit</button>
            </form>
          </div>
          <div className="details">
            <h5>Address</h5>
            <p>
              Mohar Organics Pvt. Ltd.
              <br /> 101, Vatika Business Park,Tower - 2,
              <br /> Sohna Road Sector-49,
              <br /> Gurgaon-122018, Haryana India
            </p>
            <br />
            <h5>Phone No.</h5>
            <p>+91-8076581957</p>
            <br />
            <h5>Office hours</h5>
            <p>Monday to Friday 10.00 AM to 6.00 PM</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
