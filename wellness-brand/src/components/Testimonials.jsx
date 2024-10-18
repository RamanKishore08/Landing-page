import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <p>"I've never felt so nurtured and cared for! Their products are a game changer for my mental health."</p>
          <p>- Sarah</p>
        </div>
        <div className="testimonial">
          <p>"The natural skincare line has transformed my daily routine. I feel beautiful and confident every day."</p>
          <p>- John</p>
        </div>
        <div className="testimonial">
          <p>"Aromatherapy oils have been my go-to solution for stress relief. I can't imagine my life without them!"</p>
          <p>- Emma</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
