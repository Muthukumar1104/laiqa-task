import React from 'react'
import './App.css'
import small1 from './small1.png'
import small2 from './small2.png'
import small3 from './small3.png'
import small4 from './small4.png'
import small5 from './small5.png'
import other1 from './other1.png'
import other2 from './other2.png'
import slider1 from './slider1.png'
import slider2 from './slider2.png'
import slider3 from './slider3.png'
import slider4 from './slider4.png'
import slider5 from './slider5.png'
import slider6 from './slider6.png'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import bottom1 from './bottom1.png'
import bottom2 from './bottom2.png'

export default function Mainpage() {
  const addtoCart = () => {
    alert(`Item to be added in your cart!`)
  }

  const reviewSubmit = () => {
    alert(`Thankyou for your feedback!`)
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
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
      <div className="main_container">
        <div className="header">
          <ul>
            <li className="company_name">LAIQA</li>

            <li name="Period pal" className="Period_pal">
              <a href="Period pal" style={{ marginTop: '-1px' }}>
                PERIOD PAL
                <i class="fa fa-shopping-cart" style={{ fontSize: '31px' }}></i>
              </a>
            </li>
            <li name="Deal of the week" className="Deal_of_the_week">
              <a href="deal of the week"> DEAL OF THE WEEK</a>
            </li>
            <li
              name="Shop"
              className="shop"
              onClick={openNav}
              style={{ cursor: 'pointer' }}
            >
              <span>Shop</span>
            </li>
          </ul>
        </div>
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
                ADD TO CART<span> Rs.406</span>
              </button>
            </div>
            <div className="subscription">
              <p>
                Or start <span>subscription</span> and Get upto{' '}
                <span>20% off</span>
              </p>
            </div>
            <div className="other_product">
              <div className="other_one">
                <img src={other1} />
                <div className="content">
                  <h3>Intimate Foaming wash</h3>
                  <p>
                    Soft, balancing vaginal foam cleanser. Safe for daily use.
                  </p>
                </div>
              </div>
              <div className="other_two">
                <img src={other2} />
                <div className="content">
                  <h3>Period Relief Roll On</h3>
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
                  Ultra-Thin Panty liners - Pack of 2
                  <span className="rate">Rs.236</span>
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
                </a>
              </p>
              <p>Never worry about non having a pad on your period</p>
            </div>
          </div>
        </div>
        <div className="quality1">
          <img src={image1} />
          <div className="ad1">
            <h1>Organic.</h1>
            <p>
              LAIQA products are made with a commitment to using 100% natural
              ingredients that are good for your body.
            </p>
          </div>
        </div>
        <div className="quality2">
          <img src={image2} />
          <div className="ad2">
            <h1>Authentic.</h1>
            <p>Dreamed, designed, developed by menstruators. For menstruator</p>
          </div>
        </div>
        <div className="quality3">
          <img src={image3} />
          <div className="ad3">
            <h1>Sustainable</h1>
            <p>
              We believe in keeping our packaging eco-friendly and
              biodegradable, and sourcing our material ethically and
              consciously.
            </p>
          </div>
        </div>
        <div className="mid">
          <h3>What Makes</h3>
          <h1>Laiqa Pad Special</h1>
          <p>
            <a href="explore">Explore</a>
          </p>
        </div>
        <div className="bottom">
          <img src={bottom1} />
          <img src={bottom2} />
          <img src={bottom1} />
        </div>
        <div className="review_form">
          <h1>Leave feedback about this</h1>
          <div className="form">
            <form onSubmit={reviewSubmit}>
              <input type="text" name="text" placeholder="Name" />
              <br />
              <input type="text" name="text" placeholder="Email" />
              <br />
              <input type="text" name="text" placeholder="Review title" />
              <br />
              <textarea
                className="review"
                name="review"
                rows="15"
                cols="150"
                placeholder="Describe your review"
              />
              <br />
              <input type="checkbox" />
              <span>Review anonymously</span>
              <br />
              <button>Submit Review</button>
            </form>
          </div>
        </div>
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
                    class="fa fa-facebook-square"
                    style={{ fontSize: '31px' }}
                  />
                </a>
              </p>
              <p>
                <a href="https://twitter.com/OurLaiqa?s=08#">
                  <i
                    class="fa fa-twitter-square"
                    style={{ fontSize: '31px' }}
                  />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/ourlaiqa/">
                  <i class="fa fa-instagram" style={{ fontSize: '31px' }} />
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
