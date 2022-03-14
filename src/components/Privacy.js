import React from 'react'
import '../App.css'
import { SideBar } from './SideBar'
import { Header } from './Header'
import { Footer } from './Footer'

export default function Privacy() {
  return (
    <>
      <SideBar />
      <div className="main_container">
        <Header />
        <div className="privacy">
          <h1>Privacy Policy</h1>
          <p>
            Mylaiqa (“us”, “we”, or “our”) operates the www.mylaiqa.com website
            (the “Service”). We use your data to provide and improve the
            Service. By using the Service, you agree to the collection and use
            of information in accordance with this policy. Unless otherwise
            defined in this Privacy Policy, terms used in this Privacy Policy
            have the same meanings as in our Terms and Conditions, accessible
            from www.mylaiqa.com
          </p>
          <br />
          <h3>Information Collection And Use</h3>
          <p>
            We collect several different types of information for various
            purposes to provide and improve our Service to you.
          </p>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain
            personally identifiable information that can be used to contact or
            identify you (“Personal Data”). Personally identifiable information
            may include, but is not limited to:
            <br />
            Email address
            <br />
            First name and last name
            <br />
            Phone number
            <br />
            Address, State, Province, ZIP/Postal code, City
            <br />
            Cookies and Usage Data
          </p>
          <h4>Usage Data</h4>
          <p>
            We may also collect information how the Service is accessed and used
            (“Usage Data”). This Usage Data may include information such as your
            computer’s Internet Protocol address (e.g. IP address), browser
            type, browser version, the pages of our Service that you visit, the
            time and date of your visit, the time spent on those pages, unique
            device identifiers and other diagnostic data.
          </p>
          <h4>Tracking and Cookies Data</h4>
          <p>
            We use cookies and similar tracking technologies to track the
            activity on our Service and hold certain information. Cookies are
            files with small amount of data which may include an anonymous
            unique identifier. Cookies are sent to your browser from a website
            and stored on your device. Tracking technologies also used are
            beacons, tags, and scripts to collect and track information and to
            improve and analyze our Service. You can instruct your browser to
            refuse all cookies or to indicate when a cookie is being sent.
            However, if you do not accept cookies, you may not be able to use
            some portions of our Service.
          </p>
          <h3>Children’s Privacy</h3>
          <p>
            Our Service does not address anyone under the age of 18
            (“Children”). We do not knowingly collect personally identifiable
            information from anyone under the age of 18. If you are a parent or
            guardian and you are aware that your Children has provided us with
            Personal Data, please contact us. If we become aware that we have
            collected Personal Data from children without verification of
            parental consent, we take steps to remove that information from our
            servers.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}
