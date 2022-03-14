import React from 'react'
import '../App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { SideBar } from './SideBar'

export default function About() {
  return (
    <>
      <SideBar />
      <div className="main_container">
        <Header />
        <div className="about">
          <p>
            At LAIQA, we believe we are not just a product, but a movement. We
            are committed to bringing high-end menstrual care products into the
            market that are eco-friendly, sustainable, comfortable, and suited
            for the modern you. LAIQA recognizes that our responsibility only
            just begins there. For a brand conceptualized and developed in
            India, where 43% of the menstruating population do not have access
            to safe and hygienic care, we donate period products to communities
            in need for every LAIQA purchase made. We celebrate the power of
            kindness and community. Our products are crafted with scientific
            innovation – and we are constantly looking for ways to reinvent the
            world of menstrual care. Our team at LAIQA is driven by a passion to
            dream and create today the possibilities of tomorrow. A future that
            is both — good for her, and good for Earth.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}
