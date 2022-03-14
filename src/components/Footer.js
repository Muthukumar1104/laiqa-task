import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer1">
          <div className="para1">
            <p className="footer_content">Learn</p>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Terms of Services</p>
          </div>
          <div className="para2">
            <p className="footer_content">More</p>
            <p>Faq</p>
            <p>Email</p>
            <p>Privacy Policy</p>
          </div>
          <div className="para3">
            <p className="footer_content">Menstrual Hygiene</p>
            <p>Moderate Flow</p>
            <p>Heavy Flow</p>
            <p>Combo Pack</p>
          </div>
          <div className="para4">
            <p className="footer_content">Hormonal Health</p>
            <p>PMS Care Tea</p>
            <p>PCOS Relief Tea</p>
            <p>Menopause Tea</p>
            <p>Wellness Tea</p>
          </div>
          <div className="para5">
            <p className="footer_content">Intimate Hygiene</p>
            <p>Panty Liners</p>
            <p>Intimate Foaming wash</p>
          </div>
          <div className="para6">
            <p className="footer_content">Cramp Relief</p>
            <p>Period Relief Roll On</p>
            <p className="footer_content">Period Pack</p>
            <p>The Period Pack</p>
            <p>Active Period Pack</p>
            <p>Comfy Period Pack</p>
          </div>
        </div>
        <div className="icon">
          <p style={{ marginTop: '3px' }}>Follow us</p>
          <p>
            <a href="https://www.facebook.com/ourlaiqa/">
              <i
                className="fa fa-facebook-square"
                style={{ fontSize: '31px', color: 'black' }}
              />
            </a>
          </p>
          <p>
            <a href="https://twitter.com/OurLaiqa?s=08#">
              <i
                className="fa fa-twitter-square"
                style={{ fontSize: '31px' }}
              />
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/ourlaiqa/">
              <i className="fa fa-instagram" style={{ fontSize: '31px' }} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
