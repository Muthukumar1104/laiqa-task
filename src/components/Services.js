import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { Footer } from './Footer'
import { SideBar } from './SideBar'
import { Header } from './Header'

export default function Services() {
  function openNav() {
    document.getElementById('mySidenav').style.width = '250px'
  }

  return (
    <>
      <SideBar />
      <div className="main_container">
        <Header />
        <div className="services">
          <h1>Terms and Services</h1>
          <h4>Introduction</h4>
          <p>
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of our website, Website Name accessible at
            mylaiqa.com. These Terms will be applied fully and affect to your
            use of this Website. By using this Website, you agreed to accept all
            terms and conditions written in here. You must not use this Website
            if you disagree with any of these Website Standard Terms and
            Conditions. Minors or people below 18 years old are not allowed to
            use this Website.
          </p>
          <h4>Intellectual Property Rights</h4>
          <p>
            Other than the content you own, under these Terms, Mohar Organics
            Pvt Ltd and/or its licensors own all the intellectual property
            rights and materials contained in this Website. You are granted
            limited license only for purposes of viewing the material contained
            on this Website. By providing your details on Contact Us page, you
            are authorizing Mohar Organics Pvt Ltd to contact you via phone or
            email for transactional and product related information.
          </p>
          <h4>Your Content</h4>
          <p>
            In these Website Standard Terms and Conditions, “Your Content” shall
            mean any audio, video text, images or other material you choose to
            display on this Website. By displaying Your Content, you grant Mohar
            Organics Pvt Ltd a non-exclusive, worldwide irrevocable,
            sub-licensable license to use, reproduce, adapt, publish, translate
            and distribute it in any and all media. Your Content must be your
            own and must not be invading any third-party’s rights. Mohar
            Organics Pvt Ltd reserves the right to remove any of Your Content
            from this Website at any time without notice.
          </p>
          <h4>No warranties</h4>
          <p>
            This Website is provided “as is,” with all faults, and Mohar
            Organics Pvt Ltd expresses no representations or warranties, of any
            kind related to this Website or the materials contained on this
            Website. Also, nothing contained on this Website shall be
            interpreted as advising you.
          </p>
          <h4>Limitation of liability</h4>
          <p>
            In no event shall Mohar Organics Pvt Ltd, nor any of its officers,
            directors and employees, shall be held liable for anything arising
            out of or in any way connected with your use of this Website whether
            such liability is under contract. Mohar Organics Pvt Ltd, including
            its officers, directors and employees shall not be held liable for
            any indirect, consequential or special liability arising out of or
            in any way related to your use of this Website.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}
