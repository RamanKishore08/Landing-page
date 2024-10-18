import React from 'react';
import './Benefits.css';

function Benefits() {
  return (
    <section className="benefits">
      <h2>Why Choose Us?</h2>
      <p className="benefits-intro">
        At our wellness brand, we believe in a holistic approach to well-being. Here are some compelling reasons to choose us:
      </p>
      <div className="benefits-container">
        <div className="benefit">
          <img src="https://i.etsystatic.com/6831704/r/il/da06c3/3320911267/il_794xN.3320911267_bk1r.jpg" alt="Holistic Approach" />
          <h3>Holistic Approach</h3>
          <p>Our wellness solutions address both physical and mental well-being, offering a complete path to health. We integrate body, mind, and spirit to promote overall wellness, ensuring a balanced lifestyle.</p>
        </div>
        <div className="benefit">
          <img src="https://i.etsystatic.com/6831704/r/il/da06c3/3320911267/il_794xN.3320911267_bk1r.jpg" alt="Natural Products" />
          <h3>Natural Products</h3>
          <p>We use only the purest ingredients to create products that are safe, effective, and kind to the environment. Our commitment to sustainability ensures that every product is made with the health of the planet in mind.</p>
        </div>
        <div className="benefit">
          <img src="https://i.etsystatic.com/6831704/r/il/da06c3/3320911267/il_794xN.3320911267_bk1r.jpg" alt="Personalized Care" />
          <h3>Personalized Care</h3>
          <p>Our services are tailored to your unique needs, ensuring that you receive the support you deserve. We believe that every individual is different, and we strive to provide customized solutions that cater to your specific wellness goals.</p>
        </div>
        <div className="benefit">
          <img src="https://i.etsystatic.com/6831704/r/il/da06c3/3320911267/il_794xN.3320911267_bk1r.jpg" alt="Community Support" />
          <h3>Community Support</h3>
          <p>Joining our wellness community means being part of a supportive network that encourages growth and healing. Engage with like-minded individuals, share experiences, and embark on your wellness journey together.</p>
        </div>
        <div className="benefit">
          <img src="https://i.etsystatic.com/6831704/r/il/da06c3/3320911267/il_794xN.3320911267_bk1r.jpg" alt="Expert Guidance" />
          <h3>Expert Guidance</h3>
          <p>Our team of wellness experts is dedicated to providing you with the knowledge and resources needed to make informed decisions about your health. From workshops to one-on-one consultations, we’re here to guide you every step of the way.</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
