import React from 'react';
import './Contact.css';

function Contact() {
  return (
      <div id="contact" className='Contact'>
        <div className="h2">
          <h2>Stay tuned with us <span className="serenn-link">@SerennBakes.com</span></h2>
      </div>
      <div className="paftrh2">
      <p>Whether you're hosting a special event, catering to a large gathering,<br /> or simply want to stock up on your favourite treats, we've got you covered...</p>
      </div>
      <div className="container">
        <div className="lines">
          <div className="circle"></div>
        </div>
      </div>
      <div className="Serenn">
        <div className="help">
          <h2>Need Help?</h2>
          <p>Customer Care</p>
          <p>Call us at 0487-2333561</p>
        </div>
        <div className="menu">
          <h2>Menu</h2>
          <p>All Products</p>
          <p>Most Popular</p>
          <p>Dairy Cakes</p>
          <p>Fresh Cream Cakes</p>
          <p>My Orders</p>
        </div>
        <div className="info">
          <h2>Info</h2>
          <p>About Us</p>
          <p>Location</p>
          <p>Terms Of Use</p>
          <p>Privacy Policy</p>
          <p>Refund Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Contact;
