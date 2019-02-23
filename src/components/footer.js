import React from "react";

import "../styles/footer.scss";

const Footer = () => {
  return (
    <div>
      <footer>
        <section className="footer-content">
          <section className="contact">
            <h3>Interested in starting a project?</h3>
            <h3>Let’s talk:</h3>

            <input type="email" name="email" value="Enter email" />

            <p>We'll never share your email with anyone else.</p>
          </section>
          <address>
            <h3>New York</h3>
            <p>123 Lane</p>
            <p>Suite 100</p>
            <p>Albany, NY 12345</p>
            <a href="tel:202-555-0144">202 555 0144</a>
          </address>
          <address>
            <h3>Florida</h3>
            <p>Ocean Drive</p>
            <p>Suite 201</p>
            <p>Orlando, FL 22345</p>
            <a href="tel:502-555-0144">502 555 0144</a>
          </address>

          <address>
            <h3>California</h3>
            <p>Mountain Street</p>
            <p>Suite 105</p>
            <p>San Diego, CA 22345</p>
            <a href="tel:702-555-0144">702 555 0144</a>
          </address>
        </section>
        <div className="copyright">Copyright © 2018 Smith and Jones</div>
      </footer>
    </div>
  );
};

export default Footer;
