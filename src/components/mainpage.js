import React from 'react'
import '../App.css'
import small1 from '../images/small1.png'
import small2 from '../images/small2.png'
import small3 from '../images/small3.png'
import small4 from '../images/small4.png'
import small5 from '../images/small5.png'
import other1 from '../images/other1.png'
import other2 from '../images/other2.png'
import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.png'
import slider3 from '../images/slider3.png'
import slider4 from '../images/slider4.png'
import slider5 from '../images/slider5.png'
import slider6 from '../images/slider6.png'
import { Header } from './Header'
import { QualityComponent } from './QualityComponent'
import { Footer } from './Footer'
import { SideBar } from './SideBar'

export default function Mainpage() {
  const addtoCart = () => {
    alert(`Item to be added in your cart!`)
  }

  const reviewSubmit = () => {
    alert(`Thankyou for your feedback!`)
  }
  return (
    <>
      <SideBar />
      <div className="main_container">
        <Header />
        <div className="product_description">
          <div className="description">
            <div className="heading">
              <h2 className="product_name1">Menstrual Hygiene</h2>
              <h1 className="product_name2">Cosy Fluff Night Pads (XL)</h1>
              <div className="product_name3">
                <h3>Sale! 10% off</h3>
              </div>
            </div>
            <div className="product">
              <p>
                The pads you need for the heaviest of flows. Ultrasoft, with 4
                wide wings, and designed for leak-proof rapid absorbency for up
                to 12 hours. Without the bulk.
              </p>
            </div>
            <div className="notes">
              <div className="part1">
                <p>
                  <img src={small1} />
                  315mm XL Pads
                </p>
                <p>
                  <img src={small2} />
                  COD Available
                </p>
                <p>
                  <img src={small3} />
                  Organic cotton and no chemicals
                </p>
              </div>
              <div className="part2">
                <p>
                  <img src={small4} />
                  Free shipping above 299
                </p>
                <p>
                  <img src={small5} />
                  Delivered in 3 working days
                </p>
              </div>
            </div>
            <div className="size">
              <ul>
                <li>
                  <a href="10 PADS">10 PADS</a>
                </li>
                <li>
                  <a href="20 PADS">20 PADS</a>
                </li>
                <li>
                  <a href="30 PADS">30 PADS</a>
                </li>
                <li>
                  <a href="40 PADS">40 PADS</a>
                </li>
              </ul>
            </div>
            <div className="add_btn">
              <button type="submit" onClick={addtoCart} className="cart_btn">
                ADD TO CART
                <i class="fa fa-cart-plus" style={{ fontSize: '15px' }} />
                <span> Rs.406</span>
              </button>
            </div>
            <div className="subscription">
              <p>
                Or start <span>subscription</span> and Get upto
                <span>20% off</span>
              </p>
            </div>
            <div className="other_product">
              <div className="other_one">
                <img src={other1} />
                <div className="content">
                  <h3>
                    Intimate Foaming wash
                    <i class="fa fa-get-pocket" />
                  </h3>
                  <p>
                    Soft, balancing vaginal foam cleanser. Safe for daily use.
                  </p>
                </div>
              </div>
              <div className="other_two">
                <img src={other2} />
                <div className="content">
                  <h3>
                    Period Relief Roll On
                    <i class="fa fa-get-pocket" />
                  </h3>
                  <p>
                    A relaxing, relieving blend of 5 pure, magical essential
                    oils that work together to soothe cramps on contact.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slider"></div>
        </div>
        <h4 className="like">You may like</h4>
        <div className="slide_other_product">
          <div className="slide_other">
            <img src={slider1} />
            <div className="slide_content">
              <p>
                <a href="Best Sellers" className="other_product_link1">
                  Best Sellers
                </a>
              </p>
              <p>
                <a
                  href="Ultra-Thin Panty liners"
                  className="other_product_link2"
                >
                  Ultra-Thin Panty liners<span className="rate">Rs.125</span>
                  <i class="fa fa-get-pocket" />
                </a>
              </p>
              <p>To keep you fresh on spotting and non-periods days</p>
            </div>
          </div>
          <div className="slide_other">
            <img src={slider2} />
            <div className="slide_content">
              <p>
                <a href="Intimate Hygine" className="other_product_link1">
                  Intimate Hygine
                </a>
              </p>
              <p>
                <a
                  href="Ultra-Thin Panty liners-Pack of 2"
                  className="other_product_link2"
                >
                  Ultra-Thin Panty liners
                  <span className="rate">Rs.236</span>
                  <i class="fa fa-get-pocket" />
                </a>
              </p>
              <p>To keep you fresh on spotting and non-periods days</p>
            </div>
          </div>
          <div className="slide_other">
            <img src={slider3} />
            <div className="slide_content">
              <p>
                <a href="Hormonal Health" className="other_product_link1">
                  Hormonal Health
                </a>
              </p>
              <p>
                <a href="Wellness Tea" className="other_product_link2">
                  Wellness Tea<span className="rate">Rs.349</span>
                  <i class="fa fa-get-pocket" />
                </a>
              </p>
              <p>
                A masterful blend that vitalises your mind and body to give you
                an instant energy boost.
              </p>
            </div>
          </div>
          <div className="slide_other">
            <img src={slider4} />
            <div className="slide_content">
              <p>
                <a href="Deal of The Weak" className="other_product_link1">
                  Deal of The Weak
                </a>
              </p>
              <p>
                <a href="Active Period Pack" className="other_product_link2">
                  Active Period Pack<span className="rate">Rs.575</span>
                  <i class="fa fa-get-pocket" />
                </a>
              </p>
              <p>
                Thoughtfully curated sets of LAIQA period care combo packs.
                Designed so your needs are covered throughout your menstrual
                cycle, for all kinds of flow.
              </p>
            </div>
          </div>
          <div className="slide_other">
            <img src={slider5} />
            <div className="slide_content">
              <p>
                <a href="Menstrual Hygiene" className="other_product_link1">
                  Menstrual Hygiene
                </a>
              </p>
              <p>
                <a href="Combo Pack" className="other_product_link2">
                  Combo Pack<span className="rate">Rs.280</span>
                  <i class="fa fa-get-pocket" />
                </a>
              </p>
              <p>
                Thoughtfully curated sets of LAIQA period care combo packs.
                Designed so your needs are covered throughout your menstrual
                cycle, for all kinds of flow.
              </p>
            </div>
          </div>
          <div className="slide_other">
            <img src={slider6} />
            <div className="slide_content">
              <p>
                <a href="Deal of The Weak" className="other_product_link1">
                  Deal of The Weak
                </a>
              </p>
              <p>
                <a href="Comfy Period Pack" className="other_product_link2">
                  Comfy Period Pack<span className="rate">Rs.592</span>
                  <i class="fa fa-get-pocket" />
                </a>
              </p>
              <p>Never worry about non having a pad on your period</p>
            </div>
          </div>
        </div>
        <QualityComponent />
        <div className="review_form">
          <h1>Leave feedback about this</h1>
          <div className="form">
            <form onSubmit={reviewSubmit}>
              <input
                type="text"
                name="text"
                placeholder="Name"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <input
                type="text"
                name="text"
                placeholder="Email"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <input
                type="text"
                name="text"
                placeholder="Review title"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <textarea
                className="review"
                name="review"
                rows="15"
                cols="150"
                placeholder="Describe your review"
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <input
                type="checkbox"
                required
                onChange={(e) => e.target.value}
              />
              <span>Review anonymously</span>
              <br />
              <button>Submit Review</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
