import React from 'react'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import bottom1 from '../images/bottom1.png'
import bottom2 from '../images/bottom2.png'

export const QualityComponent = () => {
  return (
    <>
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
            We believe in keeping our packaging eco-friendly and biodegradable,
            and sourcing our material ethically and consciously.
          </p>
        </div>
      </div>
      <div className="mid">
        <h3>What Makes</h3>
        <h1>Laiqa Pad Special</h1>
        <p>
          <a href="explore">
            Explore
            <i class="fa fa-get-pocket" />
          </a>
        </p>
      </div>
      <div className="bottom">
        <img src={bottom1} />
        <img src={bottom2} />
        <img src={bottom1} />
      </div>
    </>
  )
}
