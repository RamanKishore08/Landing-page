import React from 'react';
import './Products.css';

function Products() {
  return (
    <section className="products">
      <h2>Our Wellness Products</h2>
      <div className="products-container">
        <div className="product">
          <img src="https://naturalstateskin.com/cdn/shop/files/8M0A0225-Edited.jpg?v=1702331537&width=1445" alt="Calming Herbal Tea" />
          <h3>Calming Herbal Tea</h3>
          <p>Relax and unwind with our specially crafted herbal tea blend designed to reduce stress and promote calmness.</p>
        </div>
        <div className="product">
          <img src="https://naturalstateskin.com/cdn/shop/files/8M0A0225-Edited.jpg?v=1702331537&width=1445" alt="Organic Skincare" />
          <h3>Organic Skincare</h3>
          <p>Nourish your skin with our all-natural, organic skincare products that enhance your beauty from within.</p>
        </div>
        <div className="product">
          <img src="https://naturalstateskin.com/cdn/shop/files/8M0A0225-Edited.jpg?v=1702331537&width=1445" alt="Aromatherapy Oils" />
          <h3>Aromatherapy Oils</h3>
          <p>Revitalize your senses with our range of pure essential oils that promote relaxation and healing.</p>
        </div>
      </div>
    </section>
  );
}

export default Products;
